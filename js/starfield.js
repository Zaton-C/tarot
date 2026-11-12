/* ============================================================
   星空背景 · 一次性绘制（无持续动画）
   在无 GPU 加速的环境下，全屏 canvas 每帧重绘会导致整页持续重绘，
   因此改为：初始化时绘制一次，窗口尺寸变化时重绘一次。
   ============================================================ */
(function () {
  var c = document.getElementById('starfield');
  if (!c) return;
  var ctx = c.getContext('2d');

  function render() {
    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    var count = Math.min(260, Math.round(w * h / 6500));
    for (var i = 0; i < count; i++) {
      var x = Math.random() * w;
      var y = Math.random() * h;
      var r = Math.random() * 1.4 + .25;
      var a = Math.random() * .55 + .18;
      /* 少量亮星带光晕 */
      var glow = Math.random() < .06;
      if (glow) {
        var g = ctx.createRadialGradient(x, y, 0, x, y, r * 7);
        g.addColorStop(0, 'rgba(226,214,255,' + (a + .35).toFixed(3) + ')');
        g.addColorStop(1, 'rgba(226,214,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r * 7, 0, Math.PI * 2);
        ctx.fill();
        r *= 1.5;
      }
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(226,214,255,' + a.toFixed(3) + ')';
      ctx.fill();
    }
  }

  render();

  var timer = null;
  window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(render, 200);
  });
})();
