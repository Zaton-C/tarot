/* ============================================================
   占卜交互引擎
   流程：选择牌阵 → 选择问题 → 洗牌 → 亲手抽牌翻牌 → 解读生成
   ============================================================ */
(function (global) {
  'use strict';

  var state = {
    level: 'basic',
    spread: null,
    question: '',
    customQuestion: '',
    deck: [],
    draws: [],
    flippedCount: 0
  };

  var el = {};

  /* ---------------- 步骤切换 ---------------- */
  function gotoStep(name) {
    var panels = document.querySelectorAll('.step-panel');
    for (var i = 0; i < panels.length; i++) {
      panels[i].classList.toggle('is-active', panels[i].getAttribute('data-step') === name);
    }
    var bar = document.querySelector('.step-bar');
    if (bar) {
      var steps = bar.querySelectorAll('.step-dot');
      var order = ['spread', 'question', 'draw', 'result'];
      var cur = order.indexOf(name);
      for (var j = 0; j < steps.length; j++) {
        steps[j].classList.toggle('is-done', j < cur);
        steps[j].classList.toggle('is-current', j === cur);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------- 步骤 1：牌阵选择 ---------------- */
  function renderSpreads() {
    var grid = el.spreadGrid;
    var list = global.TAROT_SPREADS.filter(function (s) { return s.level === state.level; });
    grid.innerHTML = '';
    list.forEach(function (s) {
      var item = document.createElement('button');
      item.type = 'button';
      item.className = 'spread-card';
      item.setAttribute('data-spread', s.id);
      item.innerHTML =
        '<span class="spread-mini ' + s.layout + '">' +
        Array.apply(null, new Array(s.cards)).map(function (_, i) { return '<i></i>'; }).join('') +
        '</span>' +
        '<span class="spread-info">' +
        '<strong>' + s.name + '</strong>' +
        '<em>' + s.cards + ' 张牌 · ' + (s.en) + '</em>' +
        '<span class="spread-tagline">' + s.tagline + '</span>' +
        '</span>';
      item.addEventListener('click', function () {
        state.spread = s;
        renderQuestion(s);
        gotoStep('question');
      });
      grid.appendChild(item);
    });
  }

  /* ---------------- 步骤 2：问题选择 ---------------- */
  function renderQuestion(spread) {
    el.questionTitle.textContent = '选择你想问的问题 · ' + spread.name;
    el.questionList.innerHTML = '';
    spread.questions.forEach(function (q, i) {
      var label = document.createElement('label');
      label.className = 'question-item';
      label.innerHTML =
        '<input type="radio" name="q" value="' + global.Tarot.escapeXml(q) + '"' + (i === 0 ? ' checked' : '') + '>' +
        '<span class="q-mark"></span>' +
        '<span class="q-text">' + global.Tarot.escapeXml(q) + '</span>';
      label.addEventListener('click', function () {
        el.customQuestion.value = '';
        el.customNote.textContent = '';
      });
      el.questionList.appendChild(label);
    });

    var customLabel = document.createElement('label');
    customLabel.className = 'question-item question-custom';
    customLabel.innerHTML =
      '<input type="radio" name="q" value="__custom__">' +
      '<span class="q-mark"></span>' +
      '<span class="q-text">自定义问题</span>' +
      '<input type="text" id="customQuestion" placeholder="写下你自己的问题…" maxlength="60">';
    el.questionList.appendChild(customLabel);

    customLabel.querySelector('input[type="text"]').addEventListener('input', function (e) {
      var radio = customLabel.querySelector('input[type="radio"]');
      if (e.target.value.trim()) radio.checked = true;
    });
    el.customQuestion = customLabel.querySelector('#customQuestion');
    el.customNote = el.questionNote;
  }

  function confirmQuestion() {
    var checked = document.querySelector('input[name="q"]:checked');
    if (!checked) { alert('请先选择一个问题，或写下你自己的问题。'); return; }
    var custom = (el.customQuestion && el.customQuestion.value || '').trim();
    if (checked.value === '__custom__') {
      if (!custom) { alert('请写下你的问题。'); return; }
      state.question = custom;
    } else {
      state.question = checked.value;
    }
    startDraw();
  }

  /* ---------------- 步骤 3：洗牌与抽牌 ---------------- */
  function startDraw() {
    var spread = state.spread;
    state.deck = global.Tarot.cryptoShuffle(global.Tarot.buildDeck(global.TAROT_LEVELS[state.level].deck));
    state.draws = [];
    state.flippedCount = 0;

    el.board.className = 'board ' + spread.layout;
    el.board.innerHTML = '';
    el.drawHint.innerHTML =
      '<div class="deck-stack" id="deckStack">' +
      '<div class="deck-card d1">' + global.Tarot.cardBackSVG() + '</div>' +
      '<div class="deck-card d2">' + global.Tarot.cardBackSVG() + '</div>' +
      '<div class="deck-card d3">' + global.Tarot.cardBackSVG() + '</div>' +
      '</div>' +
      '<p class="shuffle-tip">牌已备好。请在心中默念你的问题，<br>然后洗牌并亲手抽牌。</p>' +
      '<button type="button" id="btnShuffle" class="btn btn-mystic">✦ 开始洗牌 ✦</button>';
    el.progress.textContent = '0 / ' + spread.cards;
    el.btnInterpret.disabled = true;
    el.btnInterpret.style.display = 'none';

    document.getElementById('btnShuffle').addEventListener('click', shuffleAndDeal);
    gotoStep('draw');
  }

  function shuffleAndDeal() {
    var stack = document.getElementById('deckStack');
    var btn = document.getElementById('btnShuffle');
    btn.disabled = true;
    btn.textContent = '洗牌中…';
    stack.classList.add('is-shuffling');

    setTimeout(function () {
      stack.classList.remove('is-shuffling');
      stack.classList.add('is-gone');
      btn.style.display = 'none';
      dealCards();
    }, 1500);
  }

  function dealCards() {
    var spread = state.spread;
    var board = el.board;
    var frag = document.createDocumentFragment();

    for (var i = 0; i < spread.cards; i++) {
      var card = state.deck[i];
      var pos = spread.positions[i];
      var wrap = document.createElement('div');
      wrap.className = 'tarot-card';
      wrap.setAttribute('data-idx', i);
      wrap.style.setProperty('--delay', (i * 0.13) + 's');
      wrap.style.setProperty('--tilt', ((i % 2 === 0 ? 1 : -1) * (1.5 + (i % 3))) + 'deg');
      wrap.innerHTML =
        '<div class="tarot-card-inner">' +
        '<div class="tarot-card-face tarot-card-back">' + global.Tarot.cardBackSVG() + '</div>' +
        '<div class="tarot-card-face tarot-card-front" data-front></div>' +
        '</div>' +
        '<div class="position-label"><span class="p-no">' + (i + 1) + '</span>' + pos.name + '</div>';
      frag.appendChild(wrap);
    }
    board.appendChild(frag);

    setTimeout(function () {
      var cards = board.querySelectorAll('.tarot-card');
      for (var j = 0; j < cards.length; j++) cards[j].classList.add('is-dealt');
      el.drawHint.innerHTML =
        '<p class="shuffle-tip">请<b>亲手翻开</b>你抽到的每一张牌，<br>每一次翻牌都是一次确认。</p>';
      bindCardClicks();
    }, 120);
  }

  function bindCardClicks() {
    var cards = el.board.querySelectorAll('.tarot-card');
    for (var i = 0; i < cards.length; i++) {
      (function (cardEl) {
        cardEl.addEventListener('click', function () {
          if (cardEl.classList.contains('is-flipped')) return;
          var idx = parseInt(cardEl.getAttribute('data-idx'), 10);
          flipCard(cardEl, idx);
        });
      })(cards[i]);
    }
  }

  function flipCard(cardEl, idx) {
    var card = state.deck[idx];
    var reversed = Math.random() < 0.42;   /* 逆位出现概率约 42% */
    state.draws[idx] = { card: card, reversed: reversed };

    var front = cardEl.querySelector('[data-front]');
    front.innerHTML = global.Tarot.cardFaceSVG(card);
    if (reversed) front.classList.add('is-reversed');

    cardEl.classList.add('is-flipped');
    state.flippedCount++;
    el.progress.textContent = state.flippedCount + ' / ' + state.spread.cards;

    if (state.flippedCount >= state.spread.cards) {
      setTimeout(function () {
        el.drawHint.innerHTML = '<p class="shuffle-tip">牌已全部翻开。<br>现在可以阅读你的解读了。</p>';
        el.btnInterpret.style.display = 'inline-block';
        el.btnInterpret.disabled = false;
        el.btnInterpret.classList.add('is-glow');
      }, 420);
    }
  }

  /* ---------------- 步骤 4：解读生成 ---------------- */
  var ELEMENT_READING = {
    '火': '火元素占优，说明这件事的主导力量是行动、热情与创造。它要的不是反复权衡，而是迈出下一步；迟疑本身才是真正的阻力。',
    '水': '水元素占优，说明感受与关系是这件事的核心。答案藏在情绪与直觉里，理性分析到此为止，需要去听内心与对方的真实声音。',
    '风': '风元素占优，说明关键在信息、沟通与思考。困扰你的多半不是处境本身，而是叙述方式——把话说清楚、把想法写下来，局面就会松动。',
    '土': '土元素占优，说明这件事落在现实层面：资源、时间与具体的步骤。踏实推进、量力而行，比任何灵光一现都更有效。'
  };

  var ELEMENT_ADVICE = {
    '火': '建议：选定一个动作，本周内完成它。',
    '水': '建议：先照顾情绪，再处理事情，允许自己真实地感受。',
    '风': '建议：把想法写下来并与信任的人讨论一次，理清信息再行动。',
    '土': '建议：列出具体步骤与所需资源，一项一项落实。'
  };

  function verdictFor(draws) {
    var d = draws[0];
    var major = d.card.type === 'major';
    if (!major) {
      return {
        title: '倾向于「需要更多信息」',
        text: '抽到的是小牌，说明这个决定的答案还藏在具体条件里，不能只凭牌面下判断。此刻更适合把促成与反对两边的条件各写下来，等现实多给一点信息再定夺。'
      };
    }
    if (!d.reversed) {
      return {
        title: '倾向于「是」',
        text: '抽到了一张正位大阿卡纳，能量顺畅、方向明确。这张牌给出的答案偏向肯定：条件基本具备，真正需要注意的是执行过程中的细节与耐心。'
      };
    }
    return {
      title: '倾向于「否 / 暂缓」',
      text: '抽到了一张逆位大阿卡纳，牌面提示此刻推进的阻力大于助力。它不否定这件事本身，而是否定了"现在"这个时机——等一等，反而更接近你想要的结果。'
    };
  }

  function buildInterpretation() {
    var spread = state.spread;
    var draws = state.draws;
    var html = '';

    html += '<div class="result-head">' +
      '<p class="result-kicker">占卜完成 · ' + global.TAROT_LEVELS[state.level].name + '</p>' +
      '<h3 class="result-question">「' + global.Tarot.escapeXml(state.question) + '」</h3>' +
      '<p class="result-meta">' + spread.name + ' · ' + spread.cards + ' 张牌 · 牌组：' +
      (state.level === 'basic' ? '22 张大阿卡纳' : '完整 78 张') + '</p>' +
      '</div>';

    /* 是否抉择：单独给出结论 */
    if (spread.id === 'yesno') {
      var v = verdictFor(draws);
      html += '<div class="verdict-box"><h4>' + v.title + '</h4><p>' + v.text + '</p></div>';
    }

    /* 逐张解读 */
    html += '<h4 class="res-title">逐张解读</h4><div class="card-readings">';
    draws.forEach(function (d, i) {
      var pos = spread.positions[i];
      var c = d.card;
      var meta = global.Tarot.suitMeta(c);
      var meaning = d.reversed ? c.reversed : c.upright;
      var advice = c.advice;
      html +=
        '<article class="reading">' +
        '<div class="reading-thumb' + (d.reversed ? ' is-rev' : '') + '">' + global.Tarot.cardFaceSVG(c) + '</div>' +
        '<div class="reading-body">' +
        '<div class="reading-pos"><span class="rp-no">' + (i + 1) + '</span>' + pos.name +
        '<em>' + pos.desc + '</em></div>' +
        '<h5 class="reading-card">' + c.name + '<span class="ori">' + (d.reversed ? '逆位' : '正位') + '</span>' +
        '<span class="r-elem" style="color:' + meta.color + '">' + meta.theme + '</span></h5>' +
        '<p class="reading-key">' + c.keywords.map(function (k) { return '<i>' + k + '</i>'; }).join('') + '</p>' +
        '<p class="reading-text">' + meaning + '</p>' +
        '<p class="reading-advice"><b>提示：</b>' + advice + '</p>' +
        '</div></article>';
    });
    html += '</div>';

    /* 能量统计 */
    var counts = { '火': 0, '水': 0, '风': 0, '土': 0 };
    var majorCount = 0, revCount = 0;
    draws.forEach(function (d) {
      counts[global.Tarot.cardElement(d.card)]++;
      if (d.card.type === 'major') majorCount++;
      if (d.reversed) revCount++;
    });
    var dominant = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })[0];
    var secondary = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })[1];

    html += '<h4 class="res-title">能量分析</h4><div class="energy-panel">';
    html += '<div class="energy-bars">';
    ['火', '水', '风', '土'].forEach(function (e) {
      var max = Math.max.apply(null, [counts['火'], counts['水'], counts['风'], counts['土']]);
      var pct = max ? Math.round(counts[e] / max * 100) : 0;
      html += '<div class="ebar"><span class="elabel">' + e + '</span>' +
        '<span class="etrack"><i style="width:' + pct + '%;background:' + global.Tarot.ELEMENT_COLOR[e] + '"></i></span>' +
        '<span class="ecnt">' + counts[e] + '</span></div>';
    });
    html += '</div><div class="energy-text">';
    html += '<p>' + ELEMENT_READING[dominant] + '</p>';
    if (counts[secondary] > 0 && secondary !== dominant) {
      html += '<p>同时也有 <b style="color:' + global.Tarot.ELEMENT_COLOR[secondary] + '">' + secondary +
        '</b> 元素的参与：' + (secondary === '水' ? '情感与人际的影响不可忽略。' :
          secondary === '风' ? '思辨与沟通会改变你的判断。' :
            secondary === '火' ? '一股想立刻行动的冲动正在推着你。' : '现实的资源与安排仍然牢牢在起作用。') + '</p>';
    }
    if (majorCount > 0) {
      html += '<p>本次共出现 <b>' + majorCount + '</b> 张大阿卡纳，说明这件事受较大的局势与命运层面影响——它不是小波动，而是与你人生阶段直接相关的课题。</p>';
    } else {
      html += '<p>本次全部为小阿卡纳，说明这件事的走向更多取决于日常的细节与你的具体选择，而非不可控的大势；这意味着你的行动有切实的影响力。</p>';
    }
    if (revCount > 0) {
      html += '<p>其中 <b>' + revCount + '</b> 张为逆位，提示部分能量受阻或方向需要调整：不是不能成，而是要换一种做法。</p>';
    }
    html += '</div></div>';

    /* 综合结论 */
    var first = draws[0].card, last = draws[draws.length - 1].card;
    html += '<h4 class="res-title">综合结论</h4><div class="conclusion">';
    html += '<p class="conclusion-lead">针对你提出的「' + global.Tarot.escapeXml(state.question) +
      '」，' + spread.name + '给出的整体走向是：<b>' + first.name + '</b> 揭示了起点与核心，<b>' + last.name +
      '</b> 指向了最终的落点。</p>';
    html += '<p>' + ELEMENT_ADVICE[dominant] + '</p>';
    html += '<p>这张牌阵提醒你，塔罗呈现的是<b>倾向与能量</b>而非不可违抗的定局：同样的牌，在不同心境下会走向不同的结果。真正把牌变成答案的，是你接下来的选择。</p>';
    html += '</div>';

    /* 行动清单 */
    html += '<h4 class="res-title">给你的三条行动建议</h4><ol class="action-list">';
    draws.slice(0, 3).forEach(function (d) {
      html += '<li><b>' + d.card.name + '（' + (d.reversed ? '逆位' : '正位') + '）</b>：' + d.card.advice + '</li>';
    });
    if (draws.length > 3) {
      html += '<li><b>' + draws[draws.length - 1].card.name + '（' + (draws[draws.length - 1].reversed ? '逆位' : '正位') +
        '）</b>：' + draws[draws.length - 1].card.advice + '</li>';
    }
    html += '</ol>';

    html += '<p class="disclaimer">※ 本占卜结果由随机牌组与固定牌义生成，仅供自我思考与娱乐参考，请以现实中的判断与专业意见为准。</p>';

    el.resultBody.innerHTML = html;
    gotoStep('result');
  }

  /* ---------------- 初始化 ---------------- */
  function init(options) {
    state.level = (options && options.level) || 'basic';

    el.spreadGrid = document.getElementById('spreadGrid');
    el.questionList = document.getElementById('questionList');
    el.questionTitle = document.getElementById('questionTitle');
    el.questionNote = document.getElementById('questionNote');
    el.board = document.getElementById('board');
    el.drawHint = document.getElementById('drawHint');
    el.progress = document.getElementById('progress');
    el.resultBody = document.getElementById('resultBody');
    el.btnInterpret = document.getElementById('btnInterpret');

    renderSpreads();

    document.getElementById('btnConfirmQuestion').addEventListener('click', confirmQuestion);
    el.btnInterpret.addEventListener('click', buildInterpretation);
    document.getElementById('btnRestart').addEventListener('click', function () {
      state.spread = null; state.question = ''; state.draws = []; state.flippedCount = 0;
      renderSpreads();
      gotoStep('spread');
    });
    document.getElementById('btnBackToSpread').addEventListener('click', function () {
      renderSpreads();
      gotoStep('spread');
    });
  }

  global.Divination = { init: init, state: state };
})(window);
