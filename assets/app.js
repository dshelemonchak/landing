// Generated from the approved V6 design by convert_dc.py, then hand-edited for contacts.
import { h, render, Component } from './vendor/preact.module.js';
import htm from './vendor/htm.module.js';
const html = htm.bind(h);

// Contact links. Telegram is hidden until the account is ready:
// to show it everywhere (top bar, hero button, contact card), put the URL back, e.g.
//   telegram: 'https://t.me/dshelemonchak',
const CONTACT = {
  telegram: null,
  email: 'shelemonchakdanil@gmail.com',
  linkedin: 'https://www.linkedin.com/in/danylo-shelemonchak',
};

class App extends Component {
  constructor(p) {
    super(p);
    this.rm = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const f = this.rm;
    this.state = { ry: f ? -35 : 20, rx: f ? -22 : -8, open: f, openW: [false, false, false, false, false], seenW: [f, f, f, f, f], lateData: f, mid: f, spin: 0, view: 0, ai: f ? 5 : 0, net: f ? 6 : 0, tr: f ? 3 : 1, sink: f, gone: f, be: f ? 2 : 0 };
    this.secs = []; this.secRefs = [0, 1, 2, 3, 4].map((i) => (el) => { this.secs[i] = el; });
    this.aiRef = (el) => { this.aiEl = el; };
    this.timers = [];
  }
  after(ms, fn) { this.timers.push(setTimeout(fn, ms)); }
  componentDidMount() {
    if (this.rm) return;
    this.after(300, () => this.setState({ ry: -35, rx: -22, open: true }));
    [[900, 2], [1800, 3]].forEach((p) => this.after(p[0], () => this.setState({ tr: p[1] })));
    if (typeof IntersectionObserver !== 'function') { this.setState({ seenW: [true, true, true, true, true], lateData: true, mid: true, sink: true, gone: true, ai: 5, net: 6, tr: 3, be: 2 }); return; }
    this.io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.target === this.aiEl) {
        if (e.isIntersecting && !this.aiStarted) {
          this.aiStarted = true;
          [[300, 1], [1500, 2], [3300, 3], [4900, 4], [6200, 5]].forEach((p) => this.after(p[0], () => this.setState({ ai: p[1] })));
        }
        return;
      }
      const i = this.secs.indexOf(e.target);
      if (e.isIntersecting && i >= 0 && !this.state.seenW[i]) {
        this.setState((s) => { const n = s.seenW.slice(); n[i] = true; return { seenW: n }; });
        if (i === 3 && !this.beStarted) { this.beStarted = true; this.after(400, () => this.setState({ be: 1 })); this.after(3500, () => this.setState({ be: 2 })); }
        if (i === 1 && !this.netStarted) { this.netStarted = true; [1, 2, 3, 4, 5, 6].forEach((k) => this.after(700 + k * 1100, () => this.setState({ net: k }))); }
      }
    }), { threshold: 0.35 });
    this.secs.forEach((n) => n && this.io.observe(n));
    if (this.aiEl) this.io.observe(this.aiEl);
  }
  componentDidUpdate() {
    if (this.state.seenW[4] && !this.state.lateData && !this.dataStarted) {
      this.dataStarted = true;
      this.after(1500, () => this.setState({ mid: true }));
      this.after(3000, () => this.setState({ lateData: true }));
      this.after(3900, () => this.setState({ sink: true }));
      this.after(5200, () => this.setState({ gone: true }));
    }
  }
  componentWillUnmount() { this.timers.forEach(clearTimeout); if (this.io) this.io.disconnect(); }

  box(t, x, y, z, w, h, d, front, side, top, fg, fs, font) { return { t, x, y, z, w, h, d, dz: d / 2, wz: w / 2, hz: h / 2, sl: (w - d) / 2, tt: (h - d) / 2, front, side, top, fg, fs: fs || 16, font: font || 'Manrope, sans-serif', pad: t ? 3 : 0, td: '.7s', o: 1 }; }
  blk(t, cx, cy, cz, w, h, d, front, side, top, fg, fs, font) { const b = this.box(t, 130 + cx - w / 2, 130 + cy - h / 2, cz, w, h, d, front, side, top, fg, fs, font); b.topY = cy - h / 2; b.botY = cy + h / 2; return b; }
  on(t, cx, base, cz, w, h, d, ...r) { return this.blk(t, cx, base - 1 - h / 2, cz, w, h, d, ...r); }
  shift(list, dz) { list.forEach((c) => { c.z += dz; }); return list; }

  cubesStudio(v) {
    const M = 'Manrope, sans-serif', o = [];
    const INK = ['#1B1D21', '#0B0C0E', '#33363D'], AMB = ['#E9A93B', '#B9832A', '#F2C46E'], GRY = ['#D9D6CE', '#A9A59B', '#ECEAE4'], COB = ['#3B5BC4', '#27408F', '#6A86E0'], STL = ['#C9D3E6', '#97A5C2', '#E2E8F3'], PAP = ['#FFFFFF', '#8F8B80', '#F1EFE9'], SLB = ['#D2CEC4', '#8F8B80', '#E9E7E1'], POST = ['#5B5F69', '#3A3D44', '#7A7F8A'];
    o.push(this.blk('', 0, -38, -90, 240, 148, 40, ...SLB, '#111111', 16, M));
    o.push(this.blk('One app shell', 0, -95, -66, 224, 22, 6, ...INK, '#F6F5F1', 16, M));
    o.push(this.blk('Nav', -90, -26.5, -66, 44, 113, 6, ...INK, '#F6F5F1', 16, M));
    const lib = this.blk('Shared component library', 0, 106, -90, 264, 24, 130, ...INK, '#F6F5F1', 16, M);
    o.push(lib);
    [['Button', -98, AMB, '#111111', 64], ['Field', -32, GRY, '#111111', 60], ['Card', 32, COB, '#FFFFFF', 60], ['Table', 96, STL, '#111111', 60]].forEach((k) => {
      const c = this.on(k[0], k[1], lib.topY, -90, k[4], 22, 54, ...k[2], k[3], 16, M);
      o.push(c);
      o.push(this.blk('', k[1], (37 + c.topY - 1) / 2, -90, 6, c.topY - 1 - 37, 6, ...POST, '#FFFFFF', 12, M));
    });
    const names = ['Dashboard', 'Form', 'Report'];
    for (let s = 0; s < 3; s++) {
      const r = (s - v + 3) % 3, px = 6 + 14 * r, py = -8 - 14 * r, pz = 40 - 40 * r, L = px - 70, T = py - 40, zz = pz + 7;
      o.push(this.blk('', px, py, pz, 140, 80, 6, ...PAP, '#111111', 12, M));
      o.push(this.blk(names[s], px, T + 15, zz, 124, 18, 6, ...COB, '#FFFFFF', 16, M));
      if (s === 0) {
        o.push(this.blk('', px, T + 42, zz, 124, 28, 6, ...STL, '#111111', 12, M));
        o.push(this.blk('', L + 107, T + 67, zz, 50, 14, 6, ...AMB, '#111111', 12, M));
      } else if (s === 1) {
        o.push(this.blk('', px, T + 36, zz, 124, 12, 6, ...GRY, '#111111', 12, M));
        o.push(this.blk('', px, T + 52, zz, 124, 12, 6, ...GRY, '#111111', 12, M));
        o.push(this.blk('', L + 33, T + 68, zz, 50, 12, 6, ...AMB, '#111111', 12, M));
      } else {
        o.push(this.blk('', px, T + 40, zz, 124, 20, 6, ...STL, '#111111', 12, M));
        o.push(this.blk('', px, T + 64, zz, 124, 20, 6, ...STL, '#111111', 12, M));
      }
    }
    return this.shift(o, 40);
  }

  cubesSignal(net) {
    const SC = "'Saira Condensed', sans-serif", o = [], DK = '#0B2A30';
    const base = this.blk('', 0, 97, 0, 250, 14, 220, '#14535B', '#0F4249', '#1E6D75', '#E3F1F0', 16, SC);
    o.push(base);
    const T = base.topY;
    o.push(this.on('~20', -35, T, -55, 56, 30, 50, '#2B6068', '#1F4A50', '#3D8088', '#E3F1F0', 24, SC));
    o.push(this.on('75–80', 35, T, -55, 56, 90, 50, '#7FDED6', '#4FB0A8', '#B5F2EC', DK, 24, SC));
    o.push(this.blk('Page speed score', 0, -40, -55, 150, 26, 6, '#E3F1F0', '#9FC3C0', '#FFFFFF', DK, 18, SC));
    const app = this.on('App', -90, T, 55, 56, 56, 56, '#E3F1F0', '#9FC3C0', '#FFFFFF', DK, 24, SC);
    o.push(app);
    o.push(this.on('Cache', 0, T, 55, 56, 56, 56, '#7FDED6', '#4FB0A8', '#B5F2EC', DK, 24, SC));
    o.push(this.on('API', 90, T, 55, 56, 56, 56, '#F0C979', '#B8934A', '#F8E3B0', DK, 24, SC));
    const my = (app.topY + app.botY) / 2;
    o.push(this.blk('', -45, my, 55, 32, 4, 4, '#7FDED6', '#4FB0A8', '#B5F2EC', DK, 12, SC));
    o.push(this.blk('', 45, my, 55, 32, 4, 4, '#7FDED6', '#4FB0A8', '#B5F2EC', DK, 12, SC));
    const xs = [-90, 0, 90, 0, -90, 0, -90], sz = [12, 12, 12, 18, 18, 12, 8];
    const s = sz[net], full = net === 3 || net === 4, back = net === 6;
    const col = full ? ['#F0C979', '#B8934A', '#F8E3B0'] : (back ? ['#F0C979', '#B8934A', '#F8E3B0'] : ['#FFFFFF', '#9FC3C0', '#FFFFFF']);
    const pk = this.blk('', xs[net], app.topY - 1 - s / 2, 55, s, s, s, ...col, DK, 12, SC);
    pk.td = '1s';
    o.push(pk);
    return o;
  }

  cubesGate() {
    const G = "'EB Garamond', serif", o = [], GT = 60, CR = '#F7EFDC', INKC = '#2B2117';
    const BED = ['#5C5438', '#463F2A', '#6E6546'], GRASS = ['#8B7A55', '#6F6144', '#B5BC84'], WATER = ['#2F6070', '#2F6070', '#4E8FA0'], WALL = ['#D4C39C', '#AA9868', '#EADFC3'], TWR = ['#E2D3B0', '#B9A675', '#F3E9D0'], ROOF = ['#7A1F1A', '#5A1411', '#9A3328'], WOOD = ['#6B4A2B', '#4D3320', '#8A6238'], FSTONE = ['#D8CFB4', '#B9AF93', '#E8E0C8'], HILL = ['#A3A97C', '#868C62', '#C3C99A'], HILLB = ['#AEB38A', '#92976F', '#CDD2A8'];
    const add = (b) => { o.push(b); return b; };
    const N = (t, cx, base, cz, w, h, d, col, fg) => add(this.on(t, cx, base, cz, w, h, d, ...col, fg || INKC, 16, G));
    add(this.blk('', 0, 85, -38, 300, 8, 318, ...BED, INKC, 16, G));
    add(this.blk('', 0, 70, 0, 152, 20, 132, ...GRASS, INKC, 16, G));
    add(this.blk('', 0, 70, -109, 256, 20, 22, ...GRASS, INKC, 16, G));
    add(this.blk('', 0, 70, 109, 256, 20, 22, ...GRASS, INKC, 16, G));
    add(this.blk('', -117, 70, 0, 22, 20, 194, ...GRASS, INKC, 16, G));
    add(this.blk('', 117, 70, 0, 22, 20, 194, ...GRASS, INKC, 16, G));
    add(this.blk('', 0, 74, -82, 210, 12, 30, ...WATER, INKC, 16, G));
    add(this.blk('', 0, 74, 82, 210, 12, 30, ...WATER, INKC, 16, G));
    add(this.blk('', -91, 74, 0, 28, 12, 132, ...WATER, INKC, 16, G));
    add(this.blk('', 91, 74, 0, 28, 12, 132, ...WATER, INKC, 16, G));
    add(this.blk('', 0, 70, -159, 300, 20, 76, ...GRASS, INKC, 16, G));
    [-1, 1].forEach((sx) => [-1, 1].forEach((sz) => {
      const t = N('', sx * 56, GT, sz * 44, 26, 56, 26, TWR);
      [-10, 10].forEach((mx) => [-10, 10].forEach((mz) => N('', sx * 56 + mx, t.topY, sz * 44 + mz, 6, 8, 6, TWR)));
    }));
    const wl = N('', -56, GT, 0, 10, 30, 54, WALL);
    N('', 56, GT, 0, 10, 30, 54, WALL);
    N('', 0, GT, -44, 78, 30, 10, WALL);
    N('', -31.5, GT, 44, 15, 30, 10, WALL);
    N('', 31.5, GT, 44, 15, 30, 10, WALL);
    [-30, -10, 10, 30].forEach((x) => N('', x, wl.topY, -44, 8, 7, 8, WALL));
    [-56, 56].forEach((x) => [-14, 14].forEach((z) => N('', x, wl.topY, z, 8, 7, 8, WALL)));
    const gh = N('', 0, GT, 44, 40, 56, 26, TWR);
    [-14, 0, 14].forEach((x) => N('', x, gh.topY, 44, 8, 8, 8, TWR));
    N('', 0, GT, 60, 24, 34, 4, WOOD);
    add(this.blk('JWT', 0, 14, 60, 34, 18, 4, ...ROOF, CR, 16, G));
    const kp = N('', 0, GT, -12, 40, 70, 40, TWR);
    const r1 = N('', 0, kp.topY, -12, 34, 12, 34, ROOF);
    const r2 = N('', 0, r1.topY, -12, 20, 10, 20, ROOF);
    const pl = N('', 0, r2.topY, -12, 3, 26, 3, WOOD);
    add(this.blk('', 13.5, pl.topY + 6, -12, 22, 12, 2, ...ROOF, CR, 16, G));
    [-1, 1].forEach((sx) => {
      const tt = GT - 1 - 56, p = N('', sx * 56, tt, 44, 3, 22, 3, WOOD);
      add(this.blk('', sx * 56 + sx * 13.5, p.topY + 5, 44, 22, 10, 2, ...ROOF, CR, 16, G));
    });
    const deck = add(this.blk('', 0, 57, 86, 36, 4, 44, ...WOOD, CR, 16, G));
    N('', -15, deck.topY, 86, 3, 10, 36, WOOD);
    N('', 15, deck.topY, 86, 3, 10, 36, WOOD);
    const s1 = N('', -104, GT, 112, 4, 22, 4, WOOD);
    N('', -36, GT, 112, 4, 22, 4, WOOD);
    add(this.blk('Access rules', -70, s1.topY - 15, 112, 96, 28, 4, ...WOOD, CR, 16, G));
    const ha = N('', -85, GT, -158, 130, 22, 48, HILL);
    N('', -85, ha.topY, -158, 80, 18, 30, HILL);
    const hb = N('', 80, GT, -166, 120, 28, 48, HILLB);
    const hb2 = N('', 80, hb.topY, -166, 66, 20, 30, HILLB);
    const f1 = N('', -2, GT, -178, 16, 70, 16, FSTONE);
    N('', -2, f1.topY, -178, 24, 10, 24, ROOF);
    const f2 = N('', 80, hb2.topY, -166, 12, 40, 12, FSTONE);
    N('', 80, f2.topY, -166, 18, 8, 18, ROOF);
    [-125, 125].forEach((x) => {
      const p = N('', x, GT, -128, 3, 44, 3, WOOD);
      add(this.blk('', x > 0 ? x - 13.5 : x + 13.5, p.topY + 6, -128, 22, 12, 2, ...ROOF, CR, 16, G));
    });
    return this.shift(o, 38);
  }

  cubesBackend(be) {
    const PX = "'Pixelify Sans', monospace", o = [], D = '#2E2018';
    const CT = ['#EAC39C', '#B89066', '#F7E0C4'], SV = ['#E0B07E', '#AD8454', '#F0CFA8'], RP = ['#D19B63', '#9C7345', '#E3B988'];
    [['Controller', 'REST', CT, -84], ['Service', 'Rules', SV, -16], ['Repository', 'JPA', RP, 52]].forEach((p) => {
      o.push(this.blk(p[0], -67.5, p[3], 0, 105, 28, 150, ...p[2], D, 16, PX));
      o.push(this.blk(p[1], 67.5, p[3], 0, 105, 28, 150, ...p[2], D, 16, PX));
    });
    const rq = this.blk('', 0, be === 1 ? 52 : -118, 0, 16, 16, 16, ...(be === 2 ? ['#FFF1D6', '#CDBB9F', '#FFFFFF'] : ['#E9A93B', '#B9832A', '#F2C46E']), D, 12, PX);
    rq.td = '2.6s';
    o.push(rq);
    o.push(this.blk('Central error handling', 0, 100, 100, 230, 28, 8, '#F7EDE0', '#CDBB9F', '#FFFFFF', D, 16, PX));
    return o;
  }

  cubesData(seen, mid, late, sink, gone) {
    const AZ = "'Azeret Mono', monospace", o = [], INK = '#1F1E1C';
    const DARK = ['#2C2A27', '#1F1E1C', '#3A3835'], ROW = ['#E7E3DB', '#B5AEA0', '#F4F1EA'], HEAD = ['#F0C979', '#C49A3E', '#F8DFA6'], DUP = ['#E9A93B', '#B9832A', '#F2C46E'], DONE = ['#B9B3A7', '#8E887B', '#CFC9BD'], WIRE = ['#A35C2B', '#7A3E12', '#C98A3B'], BASE = ['#AFA798', '#8E867A', '#C2BAAD'];
    const P = (t, cx, cy, cz, w, h, col, fg) => o.push(this.blk(t, cx, cy, cz, w, h, 6, ...col, fg || INK, 16, AZ));
    o.push(this.blk('', 0, 61, 0, 250, 10, 110, ...BASE, INK, 16, AZ));
    o.push(this.blk('', -68, -4.5, 0, 100, 119, 12, ...DARK, INK, 16, AZ));
    o.push(this.blk('', 78, -4.5, 0, 70, 119, 12, ...DARK, INK, 16, AZ));
    P('users', -68, -48, 10, 88, 20, HEAD);
    P('plans', 78, -48, 10, 58, 20, HEAD);
    const dup = seen && !late;
    P('101 Ana', -68, -24, 10, 88, 16, ROW);
    P('102 Ben', -68, -4, 10, 88, 16, dup ? DUP : ROW);
    P('104 Cy', -68, late ? 16 : 36, 10, 88, 16, ROW);
    P('A', 78, -24, 10, 58, 16, ROW);
    P('B', 78, late ? -4 : 6, 10, 58, late ? 16 : 36, ROW);
    P('C', 78, late ? 16 : 36, 10, 58, 16, ROW);
    [-24, -4, 16].forEach((y) => o.push(this.blk('', 12.5, y, 10, 59, 4, 4, ...WIRE, INK, 12, AZ)));
    const tag = late ? ['resolved', '#2F6B3E', '#FFFFFF'] : (mid ? ['merging', '#7A3E12', '#FFFFFF'] : (dup ? ['duplicate', '#9A3328', '#FFF6EE'] : ['checking', '#1F1E1C', '#F0C979']));
    o.push(this.blk(tag[0], -68, -85, 10, 104, 24, 6, tag[1], '#0F0F0E', '#3A3835', tag[2], 16, AZ));
    if (!gone) {
      const y3 = late ? 36 : (mid ? -4 : 16), z3 = (seen && !late) ? 35 : 10;
      const r3 = this.blk(late ? 'merged' : '103 Ben', -68, y3, z3, 88, 16, 6, ...(late ? DONE : (dup ? DUP : ROW)), INK, 16, AZ);
      r3.o = sink ? 0 : 1;
      o.push(r3);
      o.push(late ? Object.assign(this.blk('', -13, 36, 10, 8, 4, 4, ...DONE, INK, 12, AZ), { o: sink ? 0 : 1 }) : this.blk('', 12.5, 36, 10, 59, 4, 4, ...WIRE, INK, 12, AZ));
    }
    return o;
  }

  renderVals() {
    const st = this.state;
    const S = [
      { label: 'Frontend · Angular', font: 'Manrope, sans-serif', top: '#F6F5F1', front: '#E9E7E1', side: '#CFCCC4', fg: '#111111' },
      { label: 'Network · REST, caching', font: "'Saira Condensed', sans-serif", top: '#14535B', front: '#0E3B43', side: '#0A2A30', fg: '#E3F1F0' },
      { label: 'Security · Spring Security', font: "'EB Garamond', serif", top: '#EFE5CF', front: '#E2D3B0', side: '#C9B88F', fg: '#2B2117' },
      { label: 'Backend · Spring Boot', font: "'Pixelify Sans', monospace", top: '#A35C2B', front: '#8A4A20', side: '#6E3A18', fg: '#FFF8EE' },
      { label: 'Data · JPA, SQL', font: "'Azeret Mono', monospace", top: '#D8D2C8', front: '#C9C2B6', side: '#AFA798', fg: '#1F1E1C' }
    ];
    const gap = st.open ? 74 : 38, seen = st.seenW, net = st.net;
    const viewNames = ['Dashboard', 'Form', 'Report'];
    const netCaption = net === 0 ? 'A request starts in the app and heads for the data.' : (net <= 4 ? 'First visit: the cache has nothing yet, so the request goes all the way to the API and the full answer comes back.' : 'Next visit: the cache already has it, so only what changed is sent. Smaller, faster.');
    const W = [
      { id: 'studio', no: '01', layer: 'Frontend', title: 'Interfaces people can rely on.', font: 'Manrope, sans-serif', bg: '#F6F5F1', fg: '#111111', kicker: '#55555A', panelBg: 'transparent', panelPad: '0', chipBg: '#111111', chipFg: '#F6F5F1', hShadow: 'none',
        sell: 'Angular in production for fintech and education, React for healthcare. I build screens from shared components, so every new page ships faster and looks and behaves like the rest of the product.',
        skills: ['Angular 16–21', 'TypeScript', 'RxJS', 'Signals', 'React'],
        details: ['Principal contributor to a library of 47 standalone components; 48 pages built on one base page.', 'Single‑page apps: one application shell, views swap in place without a full page reload.', 'Co‑developed an 836‑field form with 50 subforms and 139 formulas; implemented about a third.', 'Modernised code with standalone components, Signals and zoneless change detection.'],
        artLabel: 'An exploded 3D view of three app screens, Dashboard, Form and Report, inside one app shell, built from the same pieces of a shared component library underneath',
        caption: 'One app shell, views swap in place with no page reload, and every piece comes from the shared library.',
        rx: -16, ry: -26, cubes: this.cubesStudio(st.view) },
      { id: 'signal', no: '02', layer: 'Network', title: 'Fast, responsive apps.', font: "'Saira Condensed', sans-serif", bg: '#0B2A30', fg: '#E3F1F0', kicker: '#9FD0CC', panelBg: 'transparent', panelPad: '0', chipBg: '#E3F1F0', chipFg: '#0B2A30', hShadow: '0 0 18px rgba(127,222,214,.3)',
        sell: 'I design REST APIs and caching together, so pages open quickly, stay responsive, and the server only sends what actually changed.',
        skills: ['REST APIs', 'HTTP caching', 'Performance'],
        details: ['Server‑side caching with ETag and Cache‑Control, revision‑aware invalidation and server‑generated routing data.', 'Helped lift the Lighthouse performance score from about 20 to 75–80 through data‑loading optimisations.', 'Consistent REST resources with structured error responses.'],
        artLabel: 'A 3D console: a packet travels from App to Cache to API and back, then a second time from App to Cache and back with a smaller answer; two columns show the page speed score rising from about 20 to 75 to 80',
        caption: netCaption + ' Page speed score (Lighthouse): I helped raise it from about 20 to 75–80.',
        rx: -20, ry: 28, cubes: this.cubesSignal(net) },
      { id: 'gate', no: '03', layer: 'Security', title: 'The right people, the right access.', font: "'EB Garamond', serif", bg: '#EFE5CF', fg: '#2B2117', kicker: '#7A1F1A', panelBg: 'transparent', panelPad: '0', chipBg: '#7A1F1A', chipFg: '#F7EFDC', hShadow: 'none',
        sell: 'Authentication and access rules for products sold under several brands, built with Spring Security and JWT. Every entry is checked, like a castle with one well‑guarded gate.',
        skills: ['Spring Security', 'JWT', 'Role‑based access'],
        details: ['Extended Spring Security for white‑label products: registration, password reset, email confirmation and access rules.', 'Role‑based access and localisation on the language‑school CRM.'],
        artLabel: 'A 3D castle on an island with towers, keep, banners, a sunken moat, a drawbridge and a gate, with hills and distant towers behind',
        caption: 'Illustration: moat, drawbridge and gate. Every request is checked at the door.',
        hasHills: true, rx: -18, ry: -24, cubes: this.cubesGate() },
      { id: 'blocks', no: '04', layer: 'Backend', title: 'Java backends, built to last.', font: "'Pixelify Sans', monospace", bg: '#2E2018', fg: '#F7EDE0', kicker: '#EAC39C', panelBg: '#24180F', panelPad: '30px 32px', chipBg: '#F7EDE0', chipFg: '#2E2018', hShadow: 'none',
        sell: 'Spring Boot services in clear layers, with predictable errors and business rules that match the frontend to the number.',
        skills: ['Java 17', 'Spring Boot 3', 'REST', 'JavaMail', 'Thymeleaf'],
        details: ['Centralised exception handling with structured error responses.', 'Implemented financial calculation rules and mirrored critical logic in Java so client and server agree.', 'Spring REST endpoints and business logic on all three products.'],
        artLabel: 'Three stacked 3D layers, Controller, Service and Repository, each with a channel down the middle; a request passes through all three, with a tag for central error handling',
        caption: 'Illustration: a request passes down through the layers, then the response travels back up.',
        rx: -22, ry: 34, cubes: this.cubesBackend(st.be) },
      { id: 'bedrock', no: '05', layer: 'Data', title: 'Data that stays correct.', font: "'Azeret Mono', monospace", bg: '#E7E3DB', fg: '#1F1E1C', kicker: '#55524C', panelBg: 'transparent', panelPad: '0', chipBg: '#1F1E1C', chipFg: '#E7E3DB', hShadow: 'none',
        sell: 'Relational models and integrity with Spring Data JPA, and the patience to trace a bug all the way down to the data.',
        skills: ['Spring Data JPA', 'SQL', 'Data integrity'],
        details: ['Tables, JPA mappings and business logic on the healthcare CRM.', 'In fintech, resolved a data‑integrity issue involving duplicate records.'],
        artLabel: 'Two 3D tables, users and plans, joined by relation lines; the same person appears twice, the extra row is merged into the first and its extra relation line is removed',
        caption: 'Illustration: the same person stored twice. The extra row is merged into the first, and its extra link to plans is removed.',
        rx: -16, ry: -30, cubes: this.cubesData(seen[4], st.mid, st.lateData, st.sink, st.gone) }
    ];
    const A = st.ai;
    const defs = [
      { agent: 'Investigator', chip: 'notes', color: '#F0C979', radius: '50%', rot: '0deg', delay: '0s' },
      { agent: 'Implementer', chip: 'diff', color: '#E8DCC4', radius: '4px', rot: '0deg', delay: '.2s' },
      { agent: 'Option scout', chip: 'options', color: '#9FD0CC', radius: '3px', rot: '45deg', delay: '.4s' }
    ];
    const lanes = defs.map((a, i) => {
      const atEnd = i === 1 ? (A === 2 || A >= 4) : A >= 2, handed = A >= 4;
      const note = (i === 1 && A === 3) ? 'changes requested' : (A >= 4 ? (i === 1 ? 'revised, approved' : 'approved') : '');
      return { ...a, left: atEnd ? '100%' : '0%', tx: atEnd ? '-100%' : '0%', op: A >= 1 ? 1 : 0, bg: handed ? 'transparent' : a.color, fg: handed ? a.color : '#1E3A3C', ring: handed ? 'inset 0 0 0 2px ' + a.color : 'none', note, noteOp: note ? 1 : 0 };
    });
    const T = [
      { big: '47', label: 'Angular components, as principal contributor', clip: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)', flex: '1 1 260px', bs: 64, nsz: '56px' },
      { big: '~20 → 75–80', label: 'page speed score (Lighthouse), which I helped raise', clip: 'circle(50%)', flex: '1 1 300px', bs: 64, nsz: '36px' },
      { big: '836', label: 'fields in one financial form I co‑built, about a third mine', clip: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)', flex: '2 1 420px', bs: 96, nsz: 'clamp(60px, 7vw, 96px)' }
    ];
    const trophies = T.map((t, i) => { const on = st.tr > i; return { ...t, status: on ? 'Unlocked' : 'Locked', nc: on ? (i === 2 ? '#E9A93B' : '#EEEBE4') : '#8B8E96', bb: on ? '#E9A93B' : '#3A3D44', sc: on ? 1 : 0.85 }; });
    return {
      rx: st.rx, ry: Math.max(-80, Math.min(80, st.ry + st.spin)),
      explodeLabel: st.open ? 'Collapse' : 'Explode',
      toggleExplode: () => this.setState((s) => ({ open: !s.open })),
      spinL: () => this.setState((s) => ({ spin: Math.max(-45, s.spin - 30) })), spinR: () => this.setState((s) => ({ spin: Math.min(85, s.spin + 30) })),
      spinLDis: st.spin <= -45, spinRDis: st.spin >= 85, spinLOp: st.spin <= -45 ? 0.4 : 1, spinROp: st.spin >= 85 ? 0.4 : 1,
      slabs: S.map((s, i) => ({ ...s, y: (i - 2) * gap, d: (i * 0.06) + 's' })),
      chips: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA', 'REST APIs', 'Angular 16–21', 'TypeScript', 'RxJS', 'AI‑assisted development'].map((t, i) => ({ t, bg: i < 5 ? '#E9A93B' : (i < 8 ? '#2A2C31' : '#1E3A3C'), fg: i < 5 ? '#111214' : '#EEEBE4' })),
      trophies,
      aiRef: this.aiRef, lanes,
      reviewScale: A >= 4 ? 1.08 : (A === 3 ? 1.04 : 1), checkOp: A >= 4 ? 1 : 0, ownOp: A >= 5 ? 1 : 0,
      worldsList: W.map((w, i) => ({ ...w, hasFlow: i === 3, hasFloor: i === 3, hasHills: i === 2, hasViews: i === 0,
        views: i === 0 ? viewNames.map((n, k) => ({ label: n, pressed: st.view === k ? 'true' : 'false', bg: st.view === k ? '#111111' : 'transparent', fg: st.view === k ? '#F6F5F1' : '#111111', click: () => this.setState({ view: k }) })) : [],
        capMin: i === 1 ? '9em' : '0', ref: this.secRefs[i], rx: st.seenW[i] ? w.rx : w.rx + 10, ry: st.seenW[i] ? w.ry : w.ry - 50, hid: 'h-' + w.id, open: st.openW[i], expanded: st.openW[i] ? 'true' : 'false', toggleLabel: st.openW[i] ? 'Hide the details' : 'How it works', toggle: () => this.setState((s) => { const o = s.openW.slice(); o[i] = !o[i]; return { openW: o }; }) }))
    };
  }
  render() {
    const v = this.renderVals();
    return html`<div style="position: relative; width: 100%; background: #111214; color: #EEEBE4; font-family: Manrope, sans-serif;">

  <header style="position: relative; overflow: hidden; min-height: 820px; box-sizing: border-box; padding: 0 clamp(20px, 6vw, 80px) 56px; display: flex; flex-direction: column;">
    <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; border-bottom: 1px solid #2A2C31; font-size: 16px;">
      <span><b>Danylo Shelemonchak</b> · Senior Full‑stack</span>
      <span style="display: flex; gap: 18px;">${CONTACT.telegram ? html`<a href=${CONTACT.telegram} style="display: inline-flex; align-items: center; min-height: 48px;">Telegram</a>` : null}<a href="https://www.linkedin.com/in/danylo-shelemonchak" style="display: inline-flex; align-items: center; min-height: 48px;">LinkedIn</a><a href="mailto:shelemonchakdanil@gmail.com" style="display: inline-flex; align-items: center; min-height: 48px;">Email</a></span>
    </div>

    <div style="flex: 1; display: flex; flex-wrap: wrap; align-items: center; gap: 40px; padding-top: 40px;">
      <div style="flex: 1 1 540px; min-width: 0; display: flex; flex-direction: column; gap: 22px; animation: rise .6s both;">
        <span style="align-self: flex-start; padding: 6px 12px; border: 1px solid #3A3D44; border-radius: 4px; font-weight: 700; font-size: 15px; color: #D3CFC6;">Senior · 6 years of commercial SaaS · Remote from Ukraine</span>
        <h1 style="margin: 0; font-weight: 800; font-size: clamp(42px, 7.4vw, 86px); line-height: 0.98; letter-spacing: -0.035em;">Full‑stack engineer.<br /><span style="color: #E9A93B;">Java Spring Boot</span> + Angular.</h1>
        <p style="margin: 0; max-width: 31em; font-size: 21px; line-height: 1.6; color: #D3CFC6;">I build business‑critical SaaS end to end: Angular interfaces, Spring Boot APIs and security, and the data underneath. Fintech, healthcare, education.</p>
        <ul aria-label="Core stack" style="margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px;">
          ${(v.chips || []).map((c) => html`
            <li style="padding: 8px 12px; border-radius: 4px; background: ${c.bg}; color: ${c.fg}; font-weight: 700; font-size: 15px;">${c.t}</li>
          `)}
        </ul>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 4px;">
          ${CONTACT.telegram ? html`
          <a href=${CONTACT.telegram} style="display: flex; align-items: center; min-height: 56px; padding: 0 26px; border-radius: 6px; background: #E9A93B; color: #111214; text-decoration: none; font-weight: 800; font-size: 18px;">Message me on Telegram</a>
          <a href=${'mailto:' + CONTACT.email} style="display: flex; align-items: center; min-height: 56px; padding: 0 24px; border-radius: 6px; border: 2px solid #4A4D55; text-decoration: none; font-weight: 700; font-size: 18px;">Email</a>` : html`
          <a href=${'mailto:' + CONTACT.email} style="display: flex; align-items: center; min-height: 56px; padding: 0 26px; border-radius: 6px; background: #E9A93B; color: #111214; text-decoration: none; font-weight: 800; font-size: 18px;">Email me</a>
          <a href=${CONTACT.linkedin} style="display: flex; align-items: center; min-height: 56px; padding: 0 24px; border-radius: 6px; border: 2px solid #4A4D55; text-decoration: none; font-weight: 700; font-size: 18px;">LinkedIn</a>`}
          <a href="#studio" style="display: flex; align-items: center; min-height: 56px; padding: 0 12px; text-decoration: underline; text-underline-offset: 4px; font-weight: 600; font-size: 17px; color: #D3CFC6;">See the stack ↓</a>
        </div>
      </div>

      <figure class="fig" style="flex: 1 1 460px; min-width: 0; height: 560px; margin: 0; padding-bottom: 56px; box-sizing: border-box; position: relative; display: grid; place-items: center;">
        <div class="stage" style="width: 420px; height: 520px; perspective: 1600px; display: grid; place-items: center;">
          <div role="img" aria-label="A 3D stack of five layers: frontend on top, then network, security, backend and data" style="position: relative; width: 300px; height: 300px; transform-style: preserve-3d; transform: rotateX(${v.rx}deg) rotateY(${v.ry}deg); transition: transform 1.8s cubic-bezier(.2,.8,.2,1);">
            ${(v.slabs || []).map((s) => html`
              <div style="position: absolute; left: 0; top: 0; width: 300px; height: 300px; transform-style: preserve-3d; transform: translateY(${s.y}px); transition: transform 1.6s cubic-bezier(.2,.8,.2,1); transition-delay: ${s.d};">
                <span style="position: absolute; left: 0; top: 0; width: 300px; height: 300px; background: ${s.top}; transform: rotateX(90deg) translateZ(18px); box-shadow: inset 0 0 0 1px rgba(255,255,255,.12);"></span>
                <span style="position: absolute; left: 0; top: 132px; width: 300px; height: 36px; background: ${s.front}; transform: translateZ(150px); display: flex; align-items: center; padding: 0 14px; box-sizing: border-box; font-family: ${s.font}; font-weight: 700; font-size: 18px; color: ${s.fg};">${s.label}</span>
                <span style="position: absolute; left: 0; top: 132px; width: 300px; height: 36px; background: ${s.side}; transform: rotateY(90deg) translateZ(150px);"></span>
                <span style="position: absolute; left: 0; top: 132px; width: 300px; height: 36px; background: ${s.side}; transform: rotateY(-90deg) translateZ(150px);"></span>
                <span style="position: absolute; left: 0; top: 132px; width: 300px; height: 36px; background: ${s.front}; transform: rotateY(180deg) translateZ(150px); display: flex; align-items: center; padding: 0 14px; box-sizing: border-box; font-family: ${s.font}; font-weight: 700; font-size: 18px; color: ${s.fg};">${s.label}</span>
              </div>
            `)}
          </div>
        </div>
        <figcaption style="position: absolute; bottom: 0; left: 0; right: 0; display: flex; justify-content: center; gap: 10px;">
          <button type="button" onClick="${v.spinL}" disabled="${v.spinLDis}" aria-label="Rotate the stack left" style="opacity: ${v.spinLOp}; width: 48px; height: 48px; border-radius: 50%; border: 1px solid #3A3D44; background: #1B1D21; color: #EEEBE4; font-size: 18px; cursor: pointer;"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style="display:block;margin:auto;transform:scaleX(1)"><path d="M5 12a7 7 0 1 0 2.3-5.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"></path><path d="M4 3v5h5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          <button type="button" onClick="${v.toggleExplode}" style="min-height: 48px; padding: 0 18px; border-radius: 24px; border: 1px solid #3A3D44; background: #1B1D21; color: #EEEBE4; font: inherit; font-weight: 700; font-size: 15px; cursor: pointer;">${v.explodeLabel}</button>
          <button type="button" onClick="${v.spinR}" disabled="${v.spinRDis}" aria-label="Rotate the stack right" style="opacity: ${v.spinROp}; width: 48px; height: 48px; border-radius: 50%; border: 1px solid #3A3D44; background: #1B1D21; color: #EEEBE4; font-size: 18px; cursor: pointer;"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style="display:block;margin:auto;transform:scaleX(-1)"><path d="M5 12a7 7 0 1 0 2.3-5.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"></path><path d="M4 3v5h5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        </figcaption>
      </figure>
    </div>

    <dl aria-label="Achievements" style="margin: 32px 0 0; display: flex; flex-wrap: wrap; gap: 16px; padding-top: 24px; border-top: 1px solid #2A2C31;">
      ${(v.trophies || []).map((t) => html`
        <div style="flex: ${t.flex}; min-width: min(240px, 100%); box-sizing: border-box; display: flex; align-items: center; gap: 22px; padding: 22px 24px; border-radius: 14px; background: #1B1D21;">
          <span aria-hidden="true" style="flex: none; position: relative; width: ${t.bs}px; height: ${t.bs}px; transform: scale(${t.sc}); transition: transform .6s cubic-bezier(.3,1.6,.5,1);">
            <span style="position: absolute; inset: 0; background: ${t.bb}; clip-path: ${t.clip}; transition: background .4s;"></span>
            <span style="position: absolute; inset: 22%; background: #1B1D21; clip-path: ${t.clip};"></span>
            <span style="position: absolute; inset: 38%; background: ${t.bb}; clip-path: ${t.clip}; transition: background .4s;"></span>
          </span>
          <div style="min-width: 0; display: flex; flex-direction: column-reverse; gap: 6px;">
            <dt style="font-size: 16px; line-height: 1.4; color: #B9B5AC;">${t.label}<span style="display: block; margin-top: 4px; font-weight: 700; font-size: 15px; color: ${t.nc};">${t.status}</span></dt>
            <dd style="margin: 0; font-weight: 800; font-size: ${t.nsz}; line-height: 1; letter-spacing: -0.02em; color: ${t.nc}; transition: color .4s;">${t.big}</dd>
          </div>
        </div>
      `)}
    </dl>
  </header>

  <section id="ai" aria-labelledby="h-ai" style="position: relative; overflow: hidden; min-height: 640px; box-sizing: border-box; padding: 96px clamp(20px, 6vw, 80px); background: #1E3A3C; color: #F4EDE0; display: flex; flex-direction: column; gap: 48px;">
    <div style="position: relative; display: flex; flex-direction: column; gap: 22px; max-width: 40em;">
      <span style="font-weight: 700; font-size: 16px; color: #E8C890;">AI‑assisted development</span>
      <h2 id="h-ai" style="margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; font-variation-settings: 'opsz' 96; font-size: clamp(40px, 6.2vw, 78px); line-height: 1.02; letter-spacing: -0.02em;">AI makes me faster.<br /><span style="color: #F0C979;">I stay accountable.</span></h2>
      <p style="margin: 0; font-size: 21px; line-height: 1.6; color: #E9E1D2;">I use a range of AI tools to speed up investigation and implementation. Security, code quality and maintainability stay my responsibility, so every result goes through me.</p>
    </div>

    <div style="position: relative; display: flex; flex-direction: column; gap: 28px;">
      <div ref="${v.aiRef}" role="img" aria-label="Three AI helpers, an investigator, an implementer and an option scout, hand their notes, diff and options to a human review step. I ask for changes to the diff once, then approve everything." class="aigrid">
        <div aria-hidden="true" style="display: flex; flex-direction: column; gap: 14px; min-width: 0;">
          ${(v.lanes || []).map((a) => html`
            <div style="display: grid; grid-template-columns: minmax(130px, 170px) minmax(0, 1fr); gap: 14px; align-items: start;">
              <span style="margin-top: 12px; display: flex; align-items: center; gap: 12px; font-size: 18px; font-weight: 700; color: #E9E1D2;"><span style="flex: none; width: 20px; height: 20px; background: ${a.color}; border-radius: ${a.radius}; transform: rotate(${a.rot});"></span>${a.agent}</span>
              <span style="position: relative; display: block; height: 64px;">
                <span style="position: absolute; left: 0; right: 0; top: 23px; height: 3px; border-radius: 2px; background: rgba(240,201,121,.25);"></span>
                <span style="position: absolute; top: 24px; left: ${a.left}; transform: translate(${a.tx}, -50%); transition: left 1.1s cubic-bezier(.3,.8,.3,1) ${a.delay}, transform 1.1s cubic-bezier(.3,.8,.3,1) ${a.delay}, opacity .5s, background .5s; opacity: ${a.op}; padding: 7px 16px; border-radius: 22px; background: ${a.bg}; color: ${a.fg}; box-shadow: ${a.ring}; font-weight: 700; font-size: 17px; white-space: nowrap;">${a.chip}</span>
                <span style="position: absolute; left: 0; top: 44px; font-size: 16px; font-weight: 700; color: #F0C979; opacity: ${a.noteOp}; transition: opacity .4s;">${a.note}</span>
              </span>
            </div>
          `)}
        </div>
        <svg class="aicon" aria-hidden="true" width="56" height="220" viewBox="0 0 56 220" style="display: block;"><path d="M0 24 C 28 24, 28 110, 54 110 M0 102 C 20 102, 30 110, 54 110 M0 180 C 28 180, 28 110, 54 110" fill="none" stroke="#F0C979" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"></path></svg>
        <svg class="aidown" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40"><path d="M20 6 V32 M10 22 L20 33 L30 22" fill="none" stroke="#F0C979" stroke-opacity=".6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <div class="aicirc" aria-hidden="true" style="width: 190px; height: 190px; border-radius: 50%; background: #F0C979; color: #1E3A3C; display: grid; place-items: center; text-align: center; transform: scale(${v.reviewScale}); transition: transform .7s cubic-bezier(.3,1.4,.4,1);">
          <span style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
            <svg width="64" height="64" viewBox="0 0 64 64" style="opacity: ${v.checkOp}; transition: opacity .5s;"><path d="M14 34 L27 47 L51 17" fill="none" stroke="#1E3A3C" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <b style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 800; font-size: 26px; line-height: 1.05;">Human<br />review</b>
          </span>
        </div>
      </div>
      <p style="margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; font-size: clamp(28px, 3.6vw, 44px); line-height: 1.1; color: #F0C979; opacity: ${v.ownOp}; transition: opacity .8s;">Reviewed and owned by me.</p>
    </div>
  </section>

  ${(v.worldsList || []).map((w) => html`
    <section ref="${w.ref}" id="${w.id}" aria-labelledby="${w.hid}" style="position: relative; overflow: hidden; min-height: 680px; box-sizing: border-box; padding: 88px clamp(20px, 6vw, 80px); background: ${w.bg}; color: ${w.fg}; display: flex; flex-wrap: wrap; gap: 48px; align-items: center;">
      <div style="position: relative; flex: 1 1 480px; min-width: 0; max-width: 34em; display: flex; flex-direction: column; gap: 18px; padding: ${w.panelPad}; background: ${w.panelBg};">
        <span style="font-weight: 700; font-size: 16px; color: ${w.kicker};">${w.no} · ${w.layer}</span>
        <h2 id="${w.hid}" style="margin: 0; font-family: ${w.font}; font-weight: 700; font-size: clamp(36px, 5.6vw, 64px); line-height: 1.02; text-shadow: ${w.hShadow};">${w.title}</h2>
        <p style="margin: 0; font-size: 20px; line-height: 1.6;">${w.sell}</p>
        <ul aria-label="Skills" style="margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px;">
          ${(w.skills || []).map((k) => html`<li style="padding: 7px 11px; border-radius: 4px; background: ${w.chipBg}; color: ${w.chipFg}; font-weight: 700; font-size: 15px;">${k}</li>`)}
        </ul>
        ${w.hasFlow ? html`
          <p style="margin: 0; font-family: 'Pixelify Sans', monospace; font-weight: 600; font-size: 18px; line-height: 1.4; color: ${w.kicker};">request ▸ controller ▸ service ▸ repository ▸ response</p>
        ` : null}
        <button type="button" onClick="${w.toggle}" aria-expanded="${w.expanded}" style="align-self: flex-start; min-height: 48px; padding: 0 16px; border: 1.5px solid currentColor; border-radius: 6px; background: transparent; color: inherit; font: inherit; font-weight: 700; font-size: 16px; cursor: pointer;">${w.toggleLabel}</button>
        ${w.open ? html`
          <ul style="margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; font-size: 17px; line-height: 1.55; opacity: .92; animation: rise .35s both;">
            ${(w.details || []).map((d) => html`<li>${d}</li>`)}
          </ul>
        ` : null}
      </div>

      <figure style="position: relative; flex: 1 1 460px; min-width: 0; margin: 0; display: flex; flex-direction: column; align-items: center; gap: 12px;">
        ${w.hasHills ? html`
          <svg aria-hidden="true" viewBox="0 0 460 520" preserveAspectRatio="xMidYMax slice" style="position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; pointer-events: none;"><path d="M0 330 L70 250 L130 300 L210 215 L290 300 L350 245 L460 330 L460 520 L0 520Z" fill="#E7DAB9"></path><path d="M0 400 C 80 340, 160 360, 240 390 S 400 350, 460 380 L460 520 L0 520Z" fill="#DFD0A8"></path><path d="M0 460 C 100 415, 200 445, 300 435 S 420 425, 460 445 L460 520 L0 520Z" fill="#D6C697"></path></svg>
        ` : null}
        ${w.hasFloor ? html`
          <svg aria-hidden="true" width="100%" height="200" style="position: absolute; left: 0; bottom: 0; opacity: .14; pointer-events: none;"><defs><pattern id="bench" width="60" height="34" patternUnits="userSpaceOnUse"><path d="M0 17 30 0 60 17 30 34z" fill="none" stroke="#F0C979" stroke-width="1.2"></path></pattern></defs><rect width="100%" height="200" fill="url(#bench)"></rect></svg>
        ` : null}
        <div class="stagebox" style="position: relative; width: 100%; height: 440px; display: grid; place-items: center;">
          <div class="stage" style="width: 460px; height: 440px; perspective: 1400px; display: grid; place-items: center;">
            <div role="img" aria-label="${w.artLabel}" style="position: relative; width: 260px; height: 260px; transform-style: preserve-3d; transform: rotateX(${w.rx}deg) rotateY(${w.ry}deg); transition: transform 1.2s cubic-bezier(.2,.8,.2,1);">
              ${(w.cubes || []).map((c) => html`
                <div style="position: absolute; left: ${c.x}px; top: ${c.y}px; width: ${c.w}px; height: ${c.h}px; transform-style: preserve-3d; transform: translateZ(${c.z}px); transition: left ${c.td} cubic-bezier(.2,.8,.2,1), top ${c.td} cubic-bezier(.2,.8,.2,1), transform ${c.td} cubic-bezier(.2,.8,.2,1);">
                  <span style="opacity: ${c.o}; transition: opacity .9s; position: absolute; left: 0; top: 0; width: ${c.w}px; height: ${c.h}px; background: ${c.front}; transform: translateZ(${c.dz}px); display: grid; place-items: center; text-align: center; padding: ${c.pad}px; box-sizing: border-box; line-height: 1.1; font-family: ${c.font}; font-weight: 700; font-size: ${c.fs}px; color: ${c.fg};">${c.t}</span>
                  <span style="opacity: ${c.o}; transition: opacity .9s; position: absolute; left: 0; top: 0; width: ${c.w}px; height: ${c.h}px; background: ${c.front}; transform: rotateY(180deg) translateZ(${c.dz}px);"></span>
                  <span style="opacity: ${c.o}; transition: opacity .9s; position: absolute; left: ${c.sl}px; top: 0; width: ${c.d}px; height: ${c.h}px; background: ${c.side}; transform: rotateY(90deg) translateZ(${c.wz}px);"></span>
                  <span style="opacity: ${c.o}; transition: opacity .9s; position: absolute; left: ${c.sl}px; top: 0; width: ${c.d}px; height: ${c.h}px; background: ${c.side}; transform: rotateY(-90deg) translateZ(${c.wz}px);"></span>
                  <span style="opacity: ${c.o}; transition: opacity .9s; position: absolute; left: 0; top: ${c.tt}px; width: ${c.w}px; height: ${c.d}px; background: ${c.top}; transform: rotateX(90deg) translateZ(${c.hz}px);"></span>
                  <span style="opacity: ${c.o}; transition: opacity .9s; position: absolute; left: 0; top: ${c.tt}px; width: ${c.w}px; height: ${c.d}px; background: ${c.side}; transform: rotateX(-90deg) translateZ(${c.hz}px);"></span>
                </div>
              `)}
            </div>
          </div>
        </div>
        <figcaption style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; min-height: ${w.capMin}; gap: 12px; padding: 0 8px; text-align: center; font-size: 16px; line-height: 1.45;">
          ${w.hasViews ? html`
            <div role="group" aria-label="Choose a screen" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;">
              ${(w.views || []).map((vw) => html`
                <button type="button" onClick="${vw.click}" aria-pressed="${vw.pressed}" style="min-height: 48px; min-width: 48px; padding: 0 18px; border: 1.5px solid #111111; border-radius: 24px; background: ${vw.bg}; color: ${vw.fg}; font: inherit; font-weight: 700; font-size: 16px; cursor: pointer;">${vw.label}</button>
              `)}
            </div>
          ` : null}
          <span style="max-width: 30em;">${w.caption}</span>
        </figcaption>
      </figure>
    </section>
  `)}

  <footer id="contact" style="position: relative; min-height: 520px; box-sizing: border-box; padding: 88px clamp(20px, 6vw, 80px); background: #F6F5F1; border-top: 1px solid #CFC9BD; color: #111111; display: flex; flex-direction: column; justify-content: center; gap: 22px;">
    <span style="font-weight: 700; font-size: 16px; color: #55555A;">Hiring a full‑stack engineer for Java Spring Boot and Angular?</span>
    <h2 style="margin: 0; font-weight: 800; font-size: clamp(38px, 6.4vw, 76px); line-height: 1; letter-spacing: -0.03em;">Let’s talk about your product.</h2>
    <p style="margin: 0; max-width: 34em; font-size: 20px; line-height: 1.6; color: #2E2E33;">Senior, six years of SaaS, remote from Ukraine, English B2. Pick a door${CONTACT.telegram ? '; Telegram is the quickest' : ''}.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr)); gap: 20px; padding-top: 12px; max-width: 980px;">
      ${CONTACT.telegram ? html`<a class="cc" href=${CONTACT.telegram} style="--tilt: -2.5deg; background: #E9A93B; color: #111111;">
        <span aria-hidden="true" style="display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: #111111; color: #E9A93B; font-weight: 800; font-size: 20px;">T</span>
        <span style="font-weight: 800; font-size: 24px;">Telegram</span>
        <span style="font-weight: 600; font-size: 18px;">@dshelemonchak · quickest reply</span>
      </a>` : null}
      <a class="cc" href="mailto:shelemonchakdanil@gmail.com" style="--tilt: 2deg; background: #111111; color: #F6F5F1;">
        <span aria-hidden="true" style="display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: #F6F5F1; color: #111111; font-weight: 800; font-size: 20px;">@</span>
        <span style="font-weight: 800; font-size: 24px;">Email</span>
        <span style="font-weight: 600; font-size: 18px; overflow-wrap: anywhere;">shelemonchakdanil@gmail.com</span>
      </a>
      <a class="cc" href="https://www.linkedin.com/in/danylo-shelemonchak" style="--tilt: -1.5deg; background: #C9D3E6; color: #111111;">
        <span aria-hidden="true" style="display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: #111111; color: #C9D3E6; font-weight: 800; font-size: 18px;">in</span>
        <span style="font-weight: 800; font-size: 24px;">LinkedIn</span>
        <span style="font-weight: 600; font-size: 18px; overflow-wrap: anywhere;">danylo-shelemonchak</span>
      </a>
    </div>
  </footer>
</div>`;
  }
}

render(html`<${App} />`, document.getElementById('app'));
