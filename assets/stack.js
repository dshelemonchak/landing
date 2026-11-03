/* The Stack — progressive enhancement. The page is complete without this file. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  /* run `fn` once when `el` is first ~20% visible */
  const once = (el, fn, threshold = 0.2) => {
    if (!el) return;
    if (!('IntersectionObserver' in window)) return fn();
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { io.disconnect(); fn(); }
    }, { threshold });
    io.observe(el);
  };

  /* ───────── reveal on scroll ───────── */
  $$('.reveal').forEach((el) => once(el, () => el.classList.add('in'), 0.12));
  if (!('IntersectionObserver' in window)) $$('.reveal').forEach((el) => el.classList.add('in'));

  /* ───────── packet, active layer, status bar ───────── */
  const stack = $('#stack'), packet = $('#packet'), barLayer = $('#barLayer'), barProg = $('#barProgress');
  const layers = $$('[data-layer]');
  let lastY = scrollY, dir = 1, ticking = false, activeEl = null;

  function onScroll() {
    ticking = false;
    const y = scrollY, vh = innerHeight;
    if (Math.abs(y - lastY) > 2) { dir = y > lastY ? 1 : -1; lastY = y; }
    const top = stack.getBoundingClientRect().top + y;
    const line = y + vh * 0.38;                         // the "wire" the packet rides on
    const py = clamp(line - top, 0, stack.offsetHeight);
    packet.style.transform = `translate3d(0,${py}px,0)`;
    packet.classList.toggle('up', dir < 0);

    const max = document.documentElement.scrollHeight - vh;
    barProg.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;

    let cur = layers[0];
    for (const l of layers) if (l.getBoundingClientRect().top + y <= line) cur = l;
    const atEnd = y >= max - 4;
    if (atEnd) cur = layers[layers.length - 1];
    if (cur !== activeEl) {
      layers.forEach((l) => l.classList.toggle('is-active', l === cur));
      activeEl = cur;
    }
    const name = cur.dataset.layer;
    barLayer.textContent = name === '200 OK' ? '↑ 200 OK' : `${dir > 0 ? '↓' : '↑'} ${name}`;
  }
  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);
  onScroll();

  /* ───────── count-up ───────── */
  $$('[data-count]').forEach((el) => {
    if (reduced) return;
    const end = +el.dataset.count;
    once(el, () => {
      const t0 = performance.now(), dur = 900;
      const step = (t) => {
        const k = clamp((t - t0) / dur, 0, 1);
        el.textContent = Math.round(end * ease(k));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 0.5);
    el.textContent = '0';
  });

  /* ───────── hero terminal ───────── */
  (function terminal() {
    const pre = $('#term');
    if (!pre || reduced) return;
    const lines = $$('.t', pre);
    pre.style.minHeight = pre.offsetHeight + 'px';
    const cmd = lines[0], full = cmd.innerHTML;
    const text = cmd.textContent.replace(/^\$ /, '');
    lines.forEach((l) => { l.style.visibility = 'hidden'; });
    cmd.style.visibility = 'visible';
    cmd.innerHTML = '<b>$</b> ';
    cmd.classList.add('caret');
    let i = 0;
    const type = () => {
      cmd.innerHTML = '<b>$</b> ' + text.slice(0, ++i).replace(/&/g, '&amp;').replace(/</g, '&lt;');
      if (i < text.length) return setTimeout(type, 14 + Math.random() * 22);
      cmd.classList.remove('caret'); cmd.innerHTML = full;
      let n = 1;
      const next = () => {
        if (n >= lines.length) return;
        lines[n].style.visibility = 'visible'; n++;
        setTimeout(next, n === 2 ? 260 : 110);
      };
      setTimeout(next, 280);
    };
    setTimeout(type, 450);
  })();

  /* ───────── 47 tiles + 48 ticks ───────── */
  (function tiles() {
    const box = $('#tiles'), ticks = $('#ticks');
    if (box) {
      box.innerHTML = Array.from({ length: 47 }, (_, i) => `<i>${String(i + 1).padStart(2, '0')}</i>`).join('');
      if (!reduced) $$('i', box).forEach((t, i) => { t.style.transitionDelay = `${i * 18}ms`; });
      once(box, () => box.classList.add('in'), 0.15);
    }
    if (ticks) {
      ticks.innerHTML = '<i></i>'.repeat(48);
      if (!reduced) $$('i', ticks).forEach((t, i) => { t.style.transitionDelay = `${i * 14}ms`; });
      once(ticks, () => ticks.classList.add('in'), 0.5);
    }
  })();

  /* ───────── the 836-field form ───────── */
  (function form() {
    const cv = $('#formcv');
    if (!cv || !cv.getContext) return;
    const ctx = cv.getContext('2d');
    const N = 836, G = 50, F = 139;
    // deterministic pseudo-random so the picture is the same on every visit
    let seed = 836;
    const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

    const start = Array.from({ length: G + 1 }, (_, g) => Math.round((g * N) / G));
    const groupOf = new Uint8Array(N);
    for (let g = 0; g < G; g++) for (let i = start[g]; i < start[g + 1]; i++) groupOf[i] = g;
    const mineGroups = new Set(shuffle(Array.from({ length: G }, (_, g) => g)).slice(0, 17));
    const isMine = (i) => mineGroups.has(groupOf[i]);
    const formula = new Set(shuffle(Array.from({ length: N }, (_, i) => i)).slice(0, F));

    let W = 0, H = 0, cols = 44, rows = 19, pitch = 10, cell = 8, ox = 0, dpr = 1;
    const waves = []; let raf = 0, visible = false, colors = {};

    function readColors() { colors = { ink: css('--ink'), accent: css('--accent'), rule: css('--rule-strong'), bg: css('--bg') }; }
    function layout() {
      const r = cv.getBoundingClientRect(); W = r.width; dpr = Math.min(devicePixelRatio || 1, 2);
      const gap = W < 400 ? 1.5 : 2;
      cols = (W - gap * 43) / 44 >= 5.5 ? 44 : 38;
      rows = N / cols;
      cell = Math.floor(((W - gap * (cols - 1)) / cols) * 10) / 10; pitch = cell + gap;
      ox = (W - (cols * pitch - gap)) / 2;
      H = Math.ceil(rows * pitch - gap);
      cv.style.height = H + 'px';
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const pos = (i) => [ox + (i % cols) * pitch, Math.floor(i / cols) * pitch];

    function draw(now) {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        const [x, y] = pos(i), cx = x + cell / 2, cy = y + cell / 2;
        let hit = 0;
        for (const w of waves) {
          const r = (now - w.t0) * 0.42, d = Math.hypot(cx - w.x, cy - w.y);
          const v = Math.exp(-Math.pow((d - r) / 26, 2)); if (v > hit) hit = v;
        }
        const f = formula.has(i), mine = isMine(i);
        const s = cell * (1 + hit * (f ? 0.9 : 0.35)), o = (cell - s) / 2;
        if (mine) { ctx.globalAlpha = 0.88; ctx.fillStyle = colors.accent; }
        else { ctx.globalAlpha = 0.2 + hit * 0.5; ctx.fillStyle = hit > 0.25 ? colors.accent : colors.ink; }
        if (hit > 0.25 && !mine) ctx.globalAlpha = Math.min(1, 0.35 + hit);
        ctx.fillRect(x + o, y + o, s, s);
        if (f) {            // a formula cell: dark core, turns accent when a wave passes
          const k = mine ? 0.5 : 1, fs = s * k, fo = (cell - fs) / 2;
          ctx.globalAlpha = 0.95; ctx.fillStyle = hit > 0.25 ? colors.bg : colors.ink;
          if (hit > 0.25 && !mine) ctx.fillStyle = colors.accent;
          ctx.fillRect(x + fo, y + fo, fs, fs);
        }
      }
      ctx.globalAlpha = 1;
    }
    function loop(now) {
      raf = 0;
      for (let k = waves.length - 1; k >= 0; k--) if ((now - waves[k].t0) * 0.42 > Math.hypot(W, H) + 80) waves.splice(k, 1);
      draw(now);
      if (waves.length && visible) raf = requestAnimationFrame(loop);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }
    function ripple(x, y) {
      if (reduced) return;
      waves.push({ x, y, t0: performance.now() });
      if (waves.length > 4) waves.shift();
      kick();
    }
    const at = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    cv.addEventListener('pointerdown', (e) => ripple(...at(e)));
    let lastMove = 0;
    cv.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const n = performance.now(); if (n - lastMove < 260) return; lastMove = n; ripple(...at(e));
    });

    const redo = () => { readColors(); layout(); draw(performance.now()); };
    redo();
    if ('ResizeObserver' in window) new ResizeObserver(() => { const w = cv.getBoundingClientRect().width; if (Math.abs(w - W) > 1) redo(); }).observe(cv);
    matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', redo);

    if ('IntersectionObserver' in window) {
      new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible && waves.length) kick(); }, { threshold: 0.05 }).observe(cv);
    } else visible = true;
    once(cv, () => { visible = true; const f0 = [...formula][0]; const [x, y] = pos(f0); ripple(x, y); setTimeout(() => ripple(W * 0.15, H * 0.5), 700); }, 0.35);
  })();

  /* ───────── cache bars ───────── */
  once($('#reqs'), () => $('#reqs').classList.add('in'), 0.3);

  /* ───────── Lighthouse gauge: ~20 → 75–80 ───────── */
  (function gauge() {
    const box = $('#gauge'), arc = $('#gArc'), num = $('#gNum'), tag = $('#gTag');
    if (!box || !arc || reduced) return;
    const C = 2 * Math.PI * 56;
    const set = (v) => { arc.style.strokeDashoffset = C * (1 - v / 100); };
    set(0); num.textContent = '0'; tag.textContent = 'Lighthouse';
    const tween = (a, b, ms, cb) => new Promise((res) => {
      const t0 = performance.now();
      const f = (t) => { const k = clamp((t - t0) / ms, 0, 1), v = a + (b - a) * ease(k); set(v); num.textContent = Math.round(v); cb && cb(v); k < 1 ? requestAnimationFrame(f) : res(); };
      requestAnimationFrame(f);
    });
    once(box, async () => {
      tag.textContent = 'Before'; await tween(0, 20, 700);
      await new Promise((r) => setTimeout(r, 650));
      tag.textContent = 'After'; await tween(20, 80, 1400);
      num.textContent = '75–80'; tag.textContent = 'Lighthouse';
    }, 0.5);
  })();

  /* ───────── data: duplicate found → resolved ───────── */
  (function rows() {
    const t = $('#rows'); if (!t || reduced) return;
    once(t, () => {
      t.classList.add('in');
      setTimeout(() => t.classList.add('dup'), 700);
      setTimeout(() => { t.classList.add('fixed'); t.classList.remove('dup'); }, 1900);
    }, 0.5);
  })();

  /* ───────── copy email ───────── */
  const btn = $('#copyMail');
  if (btn) btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(btn.dataset.mail); btn.textContent = 'Copied'; }
    catch { btn.textContent = 'Press ⌘/Ctrl+C'; location.href = 'mailto:' + btn.dataset.mail; }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
  });

  /* ───────── for the curious ───────── */
  try {
    console.log('%c200 OK%c  Hello — you read the console. Source: github.com/dshelemonchak/landing',
      'background:#e8441a;color:#fff;padding:2px 6px;font-weight:700', 'color:inherit');
  } catch (_) { /* no console */ }
})();
