/* ============================================================
   塔罗牌组引擎 · 洗牌 / 抽牌 / 卡面绘制
   卡面全部由 SVG 程序化绘制，属本项目原创，不使用任何外部图片素材。
   ============================================================ */
(function (global) {
  'use strict';

  var SUIT_META = {
    '权杖': { element: '火', color: '#e0603a', sign: '♨', theme: '行动 · 热情 · 创造', domain: '事业与行动' },
    '圣杯': { element: '水', color: '#4aa8d8', sign: '♒', theme: '情感 · 关系 · 内心', domain: '情感与关系' },
    '宝剑': { element: '风', color: '#9aa6c4', sign: '♓', theme: '思想 · 沟通 · 冲突', domain: '思维与沟通' },
    '星币': { element: '土', color: '#c9a227', sign: '♃', theme: '物质 · 金钱 · 日常', domain: '物质与日常' }
  };

  var ELEMENT_COLOR = {
    '火': '#e0603a', '水': '#4aa8d8', '风': '#9aa6c4', '土': '#c9a227'
  };

  /* 稳定的伪随机：同样的种子得到同样的装饰图案 */
  function hashCode(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) { h = ((h << 5) - h + str.charCodeAt(i)) | 0; }
    return Math.abs(h);
  }

  function cryptoShuffle(arr) {
    var a = arr.slice();
    if (global.crypto && global.crypto.getRandomValues) {
      var rnd = new Uint32Array(a.length);
      global.crypto.getRandomValues(rnd);
      for (var i = a.length - 1; i > 0; i--) {
        var j = rnd[i] % (i + 1);
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }
    for (var k = a.length - 1; k > 0; k--) {
      var m = Math.floor(Math.random() * (k + 1));
      var s = a[k]; a[k] = a[m]; a[m] = s;
    }
    return a;
  }

  function buildDeck(deckKey) {
    var major = global.TAROT_MAJOR || [];
    var minor = global.TAROT_MINOR || [];
    if (deckKey === 'major') return major.slice();
    return major.concat(minor);
  }

  function cardElement(card) {
    if (card.type === 'major') return card.element;
    return SUIT_META[card.suit] ? SUIT_META[card.suit].element : card.element;
  }

  function suitMeta(card) {
    if (card.type === 'major') {
      return { element: card.element, color: '#b48ce8', sign: card.symbol || '✦', theme: '大阿卡纳 · ' + card.astro };
    }
    return SUIT_META[card.suit] || { element: card.element, color: '#b48ce8', sign: '✦', theme: card.suit };
  }

  /* ---------- 程序化生成卡面中心的"神秘纹章" ---------- */
  function sigil(card, color) {
    var seed = hashCode(card.id);
    var rays = 6 + (seed % 7);                 // 光芒数
    var rings = 2 + (seed % 2);                // 圆环数
    var rot = seed % 45;                       // 旋转角度
    var inner = '';
    var i, r1, r2, x1, y1, x2, y2, a1, a2;

    /* 外圈光芒 */
    var raysPath = '';
    for (i = 0; i < rays; i++) {
      a1 = (i * 360 / rays) * Math.PI / 180;
      a2 = a1 + (Math.PI / rays) * 0.55;
      r1 = 74; r2 = 92;
      x1 = 100 + r1 * Math.cos(a1); y1 = 108 + r1 * Math.sin(a1);
      x2 = 100 + r2 * Math.cos(a2); y2 = 108 + r2 * Math.sin(a2);
      raysPath += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="' + color + '" stroke-width="1.2" opacity="0.55"/>';
    }

    /* 多层圆环与内接星形 */
    var ringPath = '';
    for (i = 0; i < rings; i++) {
      var rr = 66 - i * 13;
      ringPath += '<circle cx="100" cy="108" r="' + rr + '" fill="none" stroke="' + color + '" stroke-width="0.9" opacity="' + (0.5 - i * 0.12).toFixed(2) + '"/>';
    }
    var starPath = '';
    var pts = 5 + (seed % 4);
    for (i = 0; i < pts * 2; i++) {
      var rr2 = (i % 2 === 0) ? 54 : 24;
      var ang = (i * 180 / pts) * Math.PI / 180 - Math.PI / 2;
      starPath += (i === 0 ? 'M' : 'L') + (100 + rr2 * Math.cos(ang)).toFixed(1) + ' ' + (108 + rr2 * Math.sin(ang)).toFixed(1) + ' ';
    }
    starPath += 'Z';

    inner += '<g opacity="0.9">' + raysPath + '</g>';
    inner += ringPath;
    inner += '<path d="' + starPath + '" fill="none" stroke="' + color + '" stroke-width="1" opacity="0.75" transform="rotate(' + rot + ' 100 108)"/>';

    /* 中心符号（每个牌独有） */
    inner += '<circle cx="100" cy="108" r="19" fill="#0d0818" stroke="' + color + '" stroke-width="1.2" opacity="0.95"/>';
    inner += '<text x="100" y="118" text-anchor="middle" font-size="26" fill="' + color + '" opacity="0.98">' + escapeXml(card.symbol || suitMeta(card).sign) + '</text>';

    /* 四角小星 */
    var corners = '';
    [[24, 24], [176, 24], [24, 190], [176, 190]].forEach(function (p) {
      corners += '<path d="M' + p[0] + ' ' + (p[1] - 5) + 'L' + (p[0] + 1.6) + ' ' + (p[1] - 1.6) + 'L' + (p[0] + 5) + ' ' + p[1] +
        'L' + (p[0] + 1.6) + ' ' + (p[1] + 1.6) + 'L' + p[0] + ' ' + (p[1] + 5) + 'L' + (p[0] - 1.6) + ' ' + (p[1] + 1.6) +
        'L' + (p[0] - 5) + ' ' + p[1] + 'L' + (p[0] - 1.6) + ' ' + (p[1] - 1.6) + 'Z" fill="' + color + '" opacity="0.7"/>';
    });

    return '<svg class="sigil" viewBox="0 0 200 216" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      inner + corners + '</svg>';
  }

  function escapeXml(s) {
    return String(s).replace(/[<>&"']/g, function (c) {
      return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c];
    });
  }

  /* ---------- 卡牌正面 ---------- */
  function cardFaceSVG(card) {
    var meta = suitMeta(card);
    var color = meta.color;
    var noText = card.type === 'major'
      ? card.numeral
      : (card.rank <= 10 ? String(card.rank) : ['侍从', '骑士', '王后', '国王'][card.rank - 11]);
    var title = card.type === 'major' ? '大阿卡纳' : card.suit;
    var uid = 'g' + hashCode(card.id);

    return '' +
      '<svg class="card-art" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + escapeXml(card.name + ' ' + (card.en || '')) + '">' +
      '<defs>' +
      '<linearGradient id="' + uid + 'bg" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#1b1030"/><stop offset="52%" stop-color="#120a22"/><stop offset="100%" stop-color="#090512"/>' +
      '</linearGradient>' +
      '<radialGradient id="' + uid + 'glow" cx="0.5" cy="0.42" r="0.62">' +
      '<stop offset="0%" stop-color="' + color + '" stop-opacity="0.30"/>' +
      '<stop offset="100%" stop-color="' + color + '" stop-opacity="0"/>' +
      '</radialGradient>' +
      '<linearGradient id="' + uid + 'edge" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#f0d898"/><stop offset="50%" stop-color="#a8813a"/><stop offset="100%" stop-color="#e8c977"/>' +
      '</linearGradient>' +
      '</defs>' +

      '<rect x="2" y="2" width="196" height="316" rx="12" fill="url(#' + uid + 'bg)"/>' +
      '<rect x="2" y="2" width="196" height="316" rx="12" fill="url(#' + uid + 'glow)"/>' +

      /* 外框 */
      '<rect x="7" y="7" width="186" height="306" rx="9" fill="none" stroke="url(#' + uid + 'edge)" stroke-width="1.6" opacity="0.9"/>' +
      '<rect x="12" y="12" width="176" height="296" rx="6" fill="none" stroke="' + color + '" stroke-width="0.6" opacity="0.45"/>' +
      '<path d="M12 34 L12 12 L34 12 M166 12 L188 12 L188 34 M188 286 L188 308 L166 308 M34 308 L12 308 L12 286" ' +
      'fill="none" stroke="url(#' + uid + 'edge)" stroke-width="2.2" opacity="0.95"/>' +

      /* 顶部：编号 + 类别 */
      '<polygon points="100,20 118,30 118,50 100,60 82,50 82,30" fill="#0d0818" stroke="' + color + '" stroke-width="1.1" opacity="0.95"/>' +
      '<text x="100" y="45" text-anchor="middle" font-size="17" fill="' + color + '">' + escapeXml(noText) + '</text>' +
      '<text x="100" y="75" text-anchor="middle" font-size="11" fill="#b9a9d6" letter-spacing="3">' + escapeXml(title) + '</text>' +

      /* 中部纹章 */
      sigil(card, color) +

      /* 底部：牌名 */
      '<text x="100" y="252" text-anchor="middle" font-size="19" fill="#efe3c2" font-weight="600">' + escapeXml(card.name) + '</text>' +
      '<text x="100" y="271" text-anchor="middle" font-size="10" fill="#8f82ad" letter-spacing="1.5">' + escapeXml(card.en || '') + '</text>' +
      '<line x1="46" y1="282" x2="154" y2="282" stroke="' + color + '" stroke-width="0.7" opacity="0.5"/>' +
      '<text x="100" y="299" text-anchor="middle" font-size="10" fill="' + color + '" opacity="0.85">' + escapeXml(meta.theme) + '</text>' +

      /* 底部装饰 */
      '<path d="M78 308 L100 296 L122 308" fill="none" stroke="' + color + '" stroke-width="1" opacity="0.6"/>' +
      '</svg>';
  }

  /* ---------- 卡牌背面 ---------- */
  function cardBackSVG() {
    return '' +
      '<svg class="card-art" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<defs>' +
      '<linearGradient id="bk" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#241142"/><stop offset="50%" stop-color="#160a2b"/><stop offset="100%" stop-color="#0a0514"/></linearGradient>' +
      '<radialGradient id="bk2" cx="0.5" cy="0.5" r="0.55"><stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/><stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/></radialGradient>' +
      '</defs>' +
      '<rect x="2" y="2" width="196" height="316" rx="12" fill="url(#bk)"/>' +
      '<rect x="2" y="2" width="196" height="316" rx="12" fill="url(#bk2)"/>' +
      '<rect x="8" y="8" width="184" height="304" rx="9" fill="none" stroke="#c9a227" stroke-width="1.5" opacity="0.85"/>' +
      '<rect x="14" y="14" width="172" height="292" rx="6" fill="none" stroke="#8b5cf6" stroke-width="0.7" opacity="0.55"/>' +
      /* 菱形网格 */
      '<g stroke="#c9a227" stroke-width="0.45" opacity="0.32">' +
      '<path d="M100 30 L170 160 L100 290 L30 160 Z" fill="none"/>' +
      '<path d="M100 58 L148 160 L100 262 L52 160 Z" fill="none"/>' +
      '<circle cx="100" cy="160" r="46" fill="none"/>' +
      '<circle cx="100" cy="160" r="28" fill="none"/>' +
      '<circle cx="100" cy="160" r="12" fill="none"/>' +
      '<path d="M52 160 L148 160 M100 114 L100 206 M65 125 L135 195 M135 125 L65 195" stroke-width="0.35" opacity="0.6"/>' +
      '</g>' +
      /* 中央眼形 / 星 */
      '<text x="100" y="172" text-anchor="middle" font-size="34" fill="#e8c977" opacity="0.92">✦</text>' +
      '<text x="100" y="56" text-anchor="middle" font-size="13" fill="#b9a9d6" letter-spacing="5">ARCANA</text>' +
      '<text x="100" y="282" text-anchor="middle" font-size="11" fill="#b9a9d6" letter-spacing="4">TAROT</text>' +
      '</svg>';
  }

  global.Tarot = {
    SUIT_META: SUIT_META,
    ELEMENT_COLOR: ELEMENT_COLOR,
    buildDeck: buildDeck,
    cryptoShuffle: cryptoShuffle,
    cardFaceSVG: cardFaceSVG,
    cardBackSVG: cardBackSVG,
    suitMeta: suitMeta,
    cardElement: cardElement,
    hashCode: hashCode,
    escapeXml: escapeXml
  };
})(window);
