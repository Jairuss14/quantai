/* ============================================================
   QuantAI Demo App — Router + Pages
   ============================================================ */

// ─── Data ───────────────────────────────────────────────────
const DATA = {
  stocks: [
    { symbol:'NVDA', name:'Nvidia',    price:181.74, change:+2.31, changePct:+1.29 },
    { symbol:'META', name:'Meta',      price:471.22, change:-3.10, changePct:-0.65 },
    { symbol:'TSLA', name:'Tesla',     price:177.90, change:+4.55, changePct:+2.62 },
    { symbol:'AAPL', name:'Apple',     price:145.93, change:-1.20, changePct:-0.81 },
    { symbol:'AMD',  name:'AMD',       price:112.44, change:+1.88, changePct:+1.70 },
    { symbol:'MSFT', name:'Microsoft', price:336.05, change:+2.11, changePct:+0.63 },
  ],
  watchlist: [
    { symbol:'AMZN', name:'Amazon.com, Inc.',       change:+1.02, changePct:+1.02 },
    { symbol:'KO',   name:'Coca-Cola Co',            change:-0.48, changePct:-0.48 },
    { symbol:'BMW',  name:'Bayerische Motoren Werke',change:+3.98, changePct:+3.98 },
    { symbol:'MSFT', name:'Microsoft Corp',          change:+0.16, changePct:+0.16 },
    { symbol:'UPS',  name:'United Parcel Service',   change:+2.99, changePct:+2.99 },
    { symbol:'MA',   name:'Mastercard Inc.',         change:-1.24, changePct:-1.24 },
  ],
  gainers: [
    { symbol:'AAPL', name:'Apple',     price:125, pct:+6.36 },
    { symbol:'JPM',  name:'JPM Chase', price:121, pct:+21.75 },
    { symbol:'UBER', name:'Uber',      price:80,  pct:+3.84 },
    { symbol:'NVDA', name:'Nvidia',    price:435, pct:+5.85 },
    { symbol:'GOOG', name:'Alphabet',  price:234, pct:+6.45 },
    { symbol:'MSFT', name:'Microsoft', price:436, pct:+9.54 },
    { symbol:'TGT',  name:'Target',    price:89,  pct:+11.85 },
    { symbol:'NFLX', name:'Netflix',   price:123, pct:+4.90 },
    { symbol:'AMZN', name:'Amazon',    price:467, pct:+5.98 },
    { symbol:'META', name:'Meta Apps', price:123, pct:+18.94 },
  ],
  news: [
    { headline:'La Caída en Ventas Minoristas Golpea las Acciones de Consumo',          time:'hace 10 min' },
    { headline:'Los Resultados del Gigante Tech Disparan la Acción a Máximos Históricos',time:'hace 2 min' },
    { headline:'Una OPV de Alto Perfil No Cumple las Expectativas',                      time:'hace 12 hrs' },
    { headline:'Las Acciones de Vehículos Eléctricos se Disparan con Nuevos Subsidios',  time:'hace 22 hrs' },
    { headline:'El Mercado se Vuelve Bajista ante el Temor al Alza de Tasas',            time:'hace 2 hrs' },
    { headline:'La Escasez de Chips Continúa Lastrando la Producción Global',            time:'hace 3 días' },
    { headline:'La Fed Señala una Pausa en las Tasas para su Próxima Reunión',           time:'hace 3 días' },
    { headline:'El Sector Biotecnológico Repunta tras un Ensayo Clínico Revolucionario', time:'hace 3 días' },
  ],
  holdings: [
    { symbol:'TSLA', name:'Tesla',     shares:12,  avgCost:142.50, current:177.90, value:2134.80, gain:+424.80, gainPct:+24.8 },
    { symbol:'AAPL', name:'Apple',     shares:28,  avgCost:131.20, current:145.93, value:4085.84, gain:+412.36, gainPct:+11.2 },
    { symbol:'NVDA', name:'Nvidia',    shares:8,   avgCost:145.00, current:181.74, value:1453.92, gain:+293.92, gainPct:+25.3 },
    { symbol:'AMZN', name:'Amazon',    shares:5,   avgCost:98.40,  current:124.80, value:624.00,  gain:+132.00, gainPct:+26.8 },
    { symbol:'MSFT', name:'Microsoft', shares:10,  avgCost:290.00, current:336.05, value:3360.50, gain:+460.50, gainPct:+15.9 },
    { symbol:'META', name:'Meta',      shares:6,   avgCost:310.00, current:471.22, value:2827.32, gain:+967.32, gainPct:+52.0 },
  ],
  research: [
    { cat:'IA Y TECNOLOGÍA', title:'El Superciclo de la IA: Cómo la IA Generativa Transforma los Mercados de Capitales',    excerpt:"A medida que los grandes modelos de lenguaje pasan de los laboratorios a las mesas de trading, el capital institucional los sigue. Analizamos el cambio estructural en curso...",              date:'27 ene 2023', readTime:'8 min' },
    { cat:'MACRO',           title:'Perspectivas de la Reserva Federal 2024: Tasa Terminal y el Camino a los Recortes',      excerpt:"Nuestro equipo macro modela tres escenarios para la política de la Fed en 2024, con implicaciones para renta variable, renta fija y activos alternativos...",                         date:'25 ene 2023', readTime:'6 min' },
    { cat:'SECTORIAL',       title:'Cadenas de Suministro de Semiconductores: Recuperación y Estrategia de Inversión',       excerpt:"Tras dos años de disrupciones, las cadenas de suministro de chips se normalizan. Identificamos ganadores y rezagados en toda la cadena de valor...",                                 date:'22 ene 2023', readTime:'10 min' },
    { cat:'CUANTITATIVO',    title:'El Modelo de Factores de QuantAI: Atribución Q4 y Posicionamiento 2024',                 excerpt:"Nuestro modelo de renta variable multifactor generó un alfa del 18,4% en el Q4. Análisis completo de atribución y ajustes de factores para el Q1 2024...",                        date:'20 ene 2023', readTime:'12 min' },
    { cat:'ESG',             title:'Integración ESG en Estrategias Cuantitativas: Un Marco Práctico',                        excerpt:"Más allá de los filtros de exclusión, exploramos cómo los datos ESG pueden integrarse sistemáticamente en la construcción de carteras basadas en factores...",                      date:'18 ene 2023', readTime:'7 min' },
  ],
  aiSignals: [
    { signal:'COMPRAR', ticker:'NVDA', confidence:87, desc:'Fuerte impulso con vientos de cola en infraestructura de IA. El modelo detecta un patrón de acumulación durante 14 sesiones.' },
    { signal:'MANTENER', ticker:'TSLA', confidence:61, desc:'Señales mixtas. Los datos de entregas a corto plazo son positivos, pero persisten las presiones macro. Mantener posición, revisar semanalmente.' },
    { signal:'COMPRAR', ticker:'META', confidence:79, desc:'La monetización de Reels supera expectativas. La aceleración de ingresos publicitarios anticipa una probable sorpresa positiva en resultados.' },
    { signal:'VENDER', ticker:'NFLX', confidence:72, desc:'Se detecta estancamiento en el crecimiento de suscriptores. El impacto de las medidas contra el uso compartido puede decepcionar el consenso del Q2.' },
  ],
};

// ─── SVGs ────────────────────────────────────────────────────
const LOGO_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm14 0v3h-3v-4h4zm0 4h-3v3h3v-3z"/></svg>`;

const GOOGLE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style="flex-shrink:0"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;
const APPLE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="flex-shrink:0"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`;
const SUN_ICON  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="7.05" y2="7.05"/><line x1="16.95" y1="16.95" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="7.05" y2="16.95"/><line x1="16.95" y1="7.05" x2="19.78" y2="4.22"/></svg>`;
const MOON_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

const ICONS = {
  dashboard: '⊞',
  portfolio: '◈',
  trading:   '◉',
  research:  '◧',
  account:   '◕',
  logout:    '⇦',
  bell:      '🔔',
  search:    '⌕',
  chevronR:  '›',
  plus:      '+',
  arrow:     '→',
  check:     '✓',
  x:         '✗',
  eye:       '◠',
};

// ─── Router ──────────────────────────────────────────────────
const routes = {
  '/':          renderLanding,
  '/register':  renderRegister,
  '/login':     renderLogin,
  '/dashboard': renderDashboard,
  '/trading':   renderTrading,
  '/portfolio': renderPortfolio,
  '/research':  renderResearch,
  '/account':   renderAccount,
  '/pricing':   renderPricing,
};

let currentCharts = [];

function navigate(path) {
  location.hash = path;
}

function getPath() {
  const hash = location.hash.replace(/^#/, '');
  return hash || '/';
}

function render() {
  destroyCharts();
  const path = getPath();
  const fn = routes[path] || renderLanding;
  const app = document.getElementById('app');
  app.innerHTML = fn();
  app.classList.remove('page-fade-in');
  void app.offsetWidth;
  app.classList.add('page-fade-in');
  afterRender(path);
}

function destroyCharts() {
  currentCharts.forEach(c => { try { c.destroy(); } catch(e){} });
  currentCharts = [];
  Object.keys(chartRegistry).forEach(k => delete chartRegistry[k]);
}

function afterRender(path) {
  bindNavLinks();
  if (path === '/' || path === '')    initLandingCharts();
  if (path === '/dashboard') initDashboardCharts();
  if (path === '/trading')   initTradingCharts();
  if (path === '/portfolio') initPortfolioCharts();
  bindToggleSwitches();
  bindPricingToggle();
  bindAuthSocial();
  bindSidebarItems(path);
  bindChartTabs();
  bindWatchlistItems();
  bindNotifications();
  bindResearchFilters();
  bindResearchReadMore();
  bindAccountNav();
  bindThemeToggle();
  bindAddPosition();
  bindAuthForgotPassword();
  bindNewsItems();
  bindSearch();
  bindSettingsBtn();
  bindAvatarBtn();
  bindTickerItems();
}

window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
  const uiSize = localStorage.getItem('uiSize');
  if (uiSize === 'S') document.body.classList.add('ui-sm');
  if (uiSize === 'L') document.body.classList.add('ui-lg');
  if (localStorage.getItem('compact') === 'true') document.body.classList.add('compact');
  if (localStorage.getItem('reduceMotion') === 'true') document.body.classList.add('reduce-motion');
  if (localStorage.getItem('highContrast') === 'true') document.body.classList.add('high-contrast');
  render();
  const cbFilter = localStorage.getItem('cbFilter');
  if (cbFilter && cbFilter !== 'None') applyColorblindFilter(cbFilter);
  const savedAccent = localStorage.getItem('accent');
  if (savedAccent) { const p = ACCENT_PRESETS.find(x => x.name === savedAccent); if (p) applyAccentColor(p); }
});

// ─── Bind helpers ────────────────────────────────────────────
function bindNavLinks() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigate(el.dataset.nav);
    });
  });
}

function bindSidebarItems(current) {
  document.querySelectorAll('.sidebar-item[data-nav]').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === current);
  });
}

function bindToggleSwitches() {
  document.querySelectorAll('.toggle-switch').forEach(sw => {
    sw.addEventListener('click', () => {
      sw.classList.toggle('on');
    });
  });
}

function bindPricingToggle() {
  document.querySelectorAll('.toggle-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.toggle-opt').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });
}

function bindAuthSocial() {
  document.querySelectorAll('.btn-social').forEach(b => {
    b.addEventListener('click', () => navigate('/dashboard'));
  });
  const submitBtns = document.querySelectorAll('.auth-submit');
  submitBtns.forEach(b => {
    b.addEventListener('click', () => navigate('/dashboard'));
  });
}

// ─── Chart helpers ────────────────────────────────────────────
function sparkLine(ctx, data, color, fill=false) {
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map((_,i) => i),
      datasets: [{
        data,
        borderColor: color,
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.4,
        fill: fill ? { target: 'origin', above: color + '22' } : false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false } },
      animation: { duration: 600 },
    }
  });
  currentCharts.push(chart);
  return chart;
}

function lineChart(ctx, labels, datasets, opts = {}) {
  const defaults = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { display: opts.legend || false }, tooltip: { enabled: true, backgroundColor: '#1A1B28', titleColor: '#A0A0C0', bodyColor: '#fff', borderColor: '#22233A', borderWidth: 1 } },
    scales: {
      x: { display: opts.xDisplay !== false, grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#5A5A80', font: { size: 10 } } },
      y: { display: opts.yDisplay !== false, grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#5A5A80', font: { size: 10 }, callback: opts.yFormat || (v => v) } },
    },
    animation: { duration: 800 },
  };
  const chart = new Chart(ctx, { type: 'line', data: { labels, datasets }, options: defaults });
  chartRegistry[ctx.id] = chart;
  currentCharts.push(chart);
  return chart;
}

function doughnutChart(ctx, labels, data, colors) {
  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 4 }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: { backgroundColor: '#1A1B28', titleColor: '#A0A0C0', bodyColor: '#fff', borderColor: '#22233A', borderWidth: 1 },
      },
    }
  });
  currentCharts.push(chart);
  return chart;
}

function genPrices(base, n, vol) {
  const arr = [base];
  for (let i = 1; i < n; i++) arr.push(Math.max(arr[i-1] + (Math.random()-0.48)*vol, base * 0.7));
  return arr;
}

const TSLA_PRICES = [164,161,158,163,168,172,175,171,169,174,177,176,178,177];
const PORT_PRICES  = [9200,9800,10100,9700,10500,11200,11000,11800,12400,13100,12800,13500,13900,14032];
const PORT_LABELS  = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm'];

const chartRegistry = {};

const TF_TSLA = {
  '1D':  { labels:['9am','10am','11am','12pm','1pm','2pm','3pm','4pm'], data:[173,171,169,172,174,175,176,178] },
  '5D':  { labels:['Mon','Tue','Wed','Thu','Fri'], data:[168,172,169,175,178] },
  '1M':  { labels:['Jan 1','Jan 8','Jan 15','Jan 22','Jan 27'], data:[150,158,165,172,178] },
  '6M':  { labels:['Aug','Sep','Oct','Nov','Dec','Jan'], data:[122,130,140,155,167,178] },
  'YTD': { labels:['Jan'], data:[178] },
};
const TF_PORT = {
  '1D':  { labels:PORT_LABELS, data:PORT_PRICES },
  '5D':  { labels:['Mon','Tue','Wed','Thu','Fri'], data:[12800,13100,12950,13500,14032] },
  '1M':  { labels:['Jan 1','Jan 8','Jan 15','Jan 22','Jan 27'], data:[11200,11800,12500,13200,14032] },
  '6M':  { labels:['Aug','Sep','Oct','Nov','Dec','Jan'], data:[9400,10100,10800,11600,12800,14032] },
  'YTD': { labels:['Jan'], data:[14032] },
  'Max': { labels:['2021','2022','2023','2024','2025','2026'], data:[4200,6000,8500,10200,12000,14032] },
};
const TF_PERF = {
  '1D':  { labels:PORT_LABELS, data:PORT_PRICES },
  '1W':  { labels:['Mon','Tue','Wed','Thu','Fri'], data:[13200,13400,13100,13700,14032] },
  '1M':  { labels:['Jan 1','Jan 8','Jan 15','Jan 22','Jan 27'], data:[11200,11800,12400,13100,14032] },
  '3M':  { labels:['Nov','Dec','Jan'], data:[10500,12800,14032] },
  '1Y':  { labels:['Feb','Apr','Jun','Aug','Oct','Jan'], data:[8000,9200,10500,11800,12500,14032] },
  'All': { labels:['2021','2022','2023','2024','2025','2026'], data:[4200,6000,8500,10200,12000,14032] },
};
const TF_MAP = { 'price-chart':TF_TSLA, 'portfolio-chart':TF_PORT, 'perf-chart':TF_PERF };

const TICKER_SPARKS = {
  NVDA: [175.2,176.8,175.9,177.3,176.5,178.1,177.8,179.2,180.1,179.6,181.0,181.7],
  META: [474.5,473.2,474.8,472.9,473.5,472.1,471.8,472.5,471.0,471.8,471.2,471.2],
  TSLA: [170.1,171.5,173.2,172.0,174.3,175.8,174.5,176.1,175.9,177.2,177.5,177.9],
  AAPL: [147.2,146.8,147.5,146.2,146.9,146.1,146.5,145.8,146.2,145.6,146.0,145.9],
  AMD:  [109.5,110.2,111.0,110.5,111.3,112.0,111.5,112.2,112.5,112.1,112.4,112.4],
  MSFT: [332.1,333.4,332.8,334.1,333.5,334.8,335.2,334.9,335.5,336.0,335.8,336.1],
};

function staticSparkSVG(values, color) {
  const w = 40, h = 24;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = ((i / (values.length - 1)) * w).toFixed(1);
    const y = (h - ((v - min) / range) * (h - 4) - 2).toFixed(1);
    return `${x},${y}`;
  }).join(' ');
  return `<svg class="ticker-mini-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}
const SP_PRICES    = genPrices(509, 20, 4);
const DOW_PRICES   = genPrices(30000, 20, 120);
const NAS_PRICES   = genPrices(452, 20, 6);
const MARKET_LABELS = Array.from({length:20}, (_,i) => `${9+Math.floor(i/4)}:${String((i%4)*15).padStart(2,'0')}`);

// ─── Layout wrappers ────────────────────────────────────────
function appShell(activePath, content) {
  return `
<div class="app-shell">
  ${sidebar(activePath)}
  <div class="app-main">
    ${topbar()}
    ${tickerBar()}
    <div class="page-content">${content}</div>
  </div>
</div>`;
}

function sidebar(active) {
  const items = [
    { icon:'⊞', path:'/dashboard', label:'Panel' },
    { icon:'◈', path:'/portfolio', label:'Cartera' },
    { icon:'◉', path:'/trading',   label:'Trading' },
    { icon:'◧', path:'/research',  label:'Investigación' },
    { icon:'◕', path:'/account',   label:'Cuenta' },
  ];
  return `
<aside class="sidebar">
  <div class="sidebar-logo" data-nav="/" style="cursor:pointer">${LOGO_SVG}</div>
  <nav class="sidebar-nav">
    ${items.map(it => `<div class="sidebar-item${it.path===active?' active':''}" data-nav="${it.path}" title="${it.label}">${it.icon}</div>`).join('')}
  </nav>
  <div class="sidebar-bottom">
    <div class="sidebar-item" data-nav="/" title="Cerrar sesión" style="color:var(--text-3)">⇦</div>
    <div class="sidebar-avatar">J</div>
  </div>
</aside>`;
}

function topbar() {
  const isLight = document.body.classList.contains('light');
  return `
<header class="topbar">
  <span class="topbar-logo" data-nav="/" style="cursor:pointer">QUANTAI</span>
  <div class="topbar-search" style="position:relative">
    <span class="search-icon">⌕</span>
    <input type="text" id="search-input" placeholder="Buscar acciones y más..." autocomplete="off"/>
  </div>
  <div class="topbar-actions">
    <div class="topbar-icon-btn" title="Notificaciones">🔔<span class="notif-dot"></span></div>
    <button class="topbar-icon-btn" id="theme-toggle" title="Cambiar tema">${isLight ? MOON_ICON : SUN_ICON}</button>
    <button class="topbar-icon-btn" id="settings-btn" title="Configuración" style="font-size:16px">⚙</button>
    <div class="topbar-avatar" id="topbar-avatar" title="Cuenta" style="cursor:pointer">J</div>
  </div>
</header>`;
}

function tickerItemHTML(s) {
  return `<div class="ticker-item" data-symbol="${s.symbol}" title="${s.name}" style="cursor:pointer">
    <div class="ticker-logo">${s.symbol.slice(0,2)}</div>
    <div class="ticker-info">
      <div class="ticker-name">${s.name}</div>
      <div class="ticker-symbol">${s.symbol}</div>
    </div>
    <div class="ticker-price-wrap">
      <div class="ticker-price">$${s.price.toFixed(2)}</div>
      <div class="ticker-change ${s.change>=0?'positive':'negative'}">${s.change>=0?'+':''}${s.changePct.toFixed(2)}%</div>
    </div>
    ${staticSparkSVG(TICKER_SPARKS[s.symbol] || [], s.change >= 0 ? '#00E5A0' : '#FF4444')}
  </div>`;
}

function tickerBar() {
  const items = DATA.stocks.map(tickerItemHTML).join('');
  return `
<div class="ticker-bar">
  <div class="ticker-track">
    <div class="ticker-belt">${items}${items}</div>
  </div>
</div>`;
}

function navLogoHTML(dark=false) {
  return `<div class="nav-logo" data-nav="/" style="cursor:pointer">
    <div class="nav-logo-icon">${LOGO_SVG}</div>
    QUANTAI
  </div>`;
}

// ─── LANDING ─────────────────────────────────────────────────
function renderLanding() {
  return `
<div class="landing">
  <nav class="landing-nav">
    ${navLogoHTML()}
    <div class="nav-links">
      <a href="#features">Características</a>
      <a href="#" data-nav="/pricing">Precios</a>
      <a href="#" data-nav="/research">Investigación</a>
      <a href="#" data-nav="/trading">Mercados</a>
    </div>
    <div class="nav-actions">
      <button class="btn btn-ghost" data-nav="/login">Iniciar sesión</button>
      <button class="btn btn-primary" data-nav="/register">Registrarse</button>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge"><span class="hero-badge-dot"></span>Inteligencia de Trading con IA</div>
      <h1>Opera más inteligente con <span>QuantAI</span></h1>
      <p>QuantAI combina modelos cuantitativos de nivel institucional con datos de mercado en tiempo real e insights de IA generativa — para que cada operación esté respaldada por datos, no por suposiciones.</p>
      <div class="hero-actions">
        <button class="btn btn-primary btn-lg" data-nav="/register">Iniciar prueba gratuita</button>
        <button class="btn btn-outline btn-lg" data-nav="/dashboard">Ver Demo</button>
      </div>
      <div class="hero-stats">
        <div>
          <div class="hero-stat-value">$2.4B+</div>
          <div class="hero-stat-label">Activos Rastreados</div>
        </div>
        <div>
          <div class="hero-stat-value">142K+</div>
          <div class="hero-stat-label">Traders Activos</div>
        </div>
        <div>
          <div class="hero-stat-value">18.4%</div>
          <div class="hero-stat-label">Alfa Promedio Q4</div>
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-card">
        <div class="hero-card-header">
          <div class="hero-card-dot" style="background:#FF5F57"></div>
          <div class="hero-card-dot" style="background:#FEBC2E"></div>
          <div class="hero-card-dot" style="background:#28C840"></div>
          <span style="font-size:12px;color:var(--text-3);margin-left:8px">Analítica de Cartera</span>
        </div>
        <div style="margin-bottom:12px">
          <div style="font-size:11px;color:var(--text-3)">Balance Total</div>
          <div style="font-size:26px;font-weight:800">$14,032.56 <span style="font-size:13px;color:var(--positive);font-weight:600">+5.61%</span></div>
        </div>
        <div class="hero-mini-chart"><canvas id="hero-chart"></canvas></div>
        <div class="hero-ticker-row">
          ${DATA.stocks.slice(0,4).map(s=>`
          <div class="hero-ticker">
            <div class="hero-ticker-name">${s.name}</div>
            <div class="hero-ticker-price">$${s.price}</div>
            <div class="hero-ticker-change ${s.change>=0?'positive':'negative'}">${s.change>=0?'+':''}${s.changePct.toFixed(2)}%</div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="trust-section">
    <div class="trust-label">Confiado por las Mejores Empresas del Mundo</div>
    <div class="trust-logos">
      ${['Goldman', 'BlackRock', 'Citadel', 'Bridgewater', 'Two Sigma', 'Renaissance'].map(n=>`<div class="trust-logo">${n}</div>`).join('')}
    </div>
  </section>

  <section class="features-section" id="features">
    <div class="section-label">Por qué QuantAI</div>
    <div class="section-title">Cada ventaja, en una plataforma.</div>
    <div class="section-sub">Desde datos de mercado en tiempo real hasta señales alfa generadas por IA, QuantAI ofrece herramientas de nivel institucional para traders minoristas.</div>
    <div class="features-grid">
      ${[
        { icon:'🤖', title:'Motor de Señales IA',        desc:'Nuestros modelos ML propietarios analizan más de 10.000 datos por segundo para detectar señales de trading de alta confianza antes que el mercado.' },
        { icon:'📊', title:'Analítica de Mercado en Vivo', desc:'Mapas de calor, superposiciones de mercados globales, seguimiento de índices y rotación sectorial — todo actualizado en tiempo real.' },
        { icon:'📰', title:'Portal de Investigación',    desc:'Informes de investigación cuantitativa, perspectivas macro y resúmenes de noticias curados por IA, entregados diariamente.' },
        { icon:'⚡', title:'Ejecución Instantánea',      desc:'Acceso directo al mercado con enrutamiento de submilisegundos. Nunca pierdas una señal por una ejecución lenta.' },
        { icon:'🔒', title:'Gestión de Riesgos',         desc:'Dimensionamiento de posiciones integrado, automatización de stop-loss y pruebas de estrés de cartera para proteger tu capital.' },
        { icon:'🌐', title:'Cobertura Global',            desc:'Opera en acciones, ETFs, cripto y forex en más de 40 mercados globales desde un solo panel.' },
      ].map(f=>`
      <div class="feature-card">
        <div class="feature-icon">${f.icon}</div>
        <div class="feature-title">${f.title}</div>
        <div class="feature-desc">${f.desc}</div>
      </div>`).join('')}
    </div>
  </section>

  <section class="cta-section">
    <h2>¿Listo para <span>comenzar?</span></h2>
    <p>Únete a más de 142.000 traders que usan QuantAI para generar alfa consistente. Tus primeros 14 días son gratis.</p>
    <div class="cta-actions">
      <button class="btn btn-primary btn-lg" data-nav="/register">Iniciar prueba gratuita</button>
      <button class="btn btn-outline btn-lg" data-nav="/pricing">Ver Precios</button>
    </div>
  </section>

  <footer class="landing-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        ${navLogoHTML()}
        <p>Inteligencia de trading con IA para el inversor moderno. Creado por quants, para todos.</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Producto</div>
        <a href="#" data-nav="/dashboard">Panel</a>
        <a href="#" data-nav="/trading">Mercados</a>
        <a href="#" data-nav="/research">Investigación</a>
        <a href="#" data-nav="/pricing">Precios</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2010 — 2026 QuantAI Inc. Todos los derechos reservados.</span>
    </div>
  </footer>
</div>`;
}

function initLandingCharts() {
  const heroCtx = document.getElementById('hero-chart');
  if (heroCtx) {
    lineChart(heroCtx, PORT_LABELS, [{
      data: PORT_PRICES,
      borderColor: '#00E5FF',
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      fill: { target:'origin', above:'rgba(0,229,255,0.08)' },
    }], { xDisplay: false, yDisplay: false });
  }
}

// ─── REGISTER ────────────────────────────────────────────────
function renderRegister() {
  return `
<div class="auth-page">
  <nav class="auth-nav">
    ${navLogoHTML()}
    <div class="nav-links">
      <a href="#" data-nav="/">Inicio</a>
      <a href="#" data-nav="/pricing">Precios</a>
    </div>
    <div class="nav-actions">
      <span style="font-size:13px;color:var(--text-3)">¿Ya tienes una cuenta?</span>
      <button class="btn btn-outline" data-nav="/login">Iniciar sesión</button>
    </div>
  </nav>
  <div class="auth-body">
    <div class="auth-card">
      <div class="auth-title">Regístrate Gratis</div>
      <div class="auth-subtitle">14 días de acceso gratuito a recursos ilimitados</div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Nombre</label>
          <input class="form-input" type="text" placeholder="Juan" />
        </div>
        <div class="form-group">
          <label class="form-label">Apellido</label>
          <input class="form-input" type="text" placeholder="García" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Correo electrónico</label>
        <input class="form-input" type="email" placeholder="juan@ejemplo.com" />
      </div>
      <div class="form-group">
        <label class="form-label">Contraseña</label>
        <div class="form-input-wrap">
          <input class="form-input" type="password" placeholder="Mín. 8 caracteres" />
          <span class="input-icon">◠</span>
        </div>
      </div>
      <div class="form-check">
        <input type="checkbox" id="tos" />
        <label for="tos">Acepto los <a href="#" style="color:var(--accent)">Términos de Servicio</a> y la <a href="#" style="color:var(--accent)">Política de Privacidad</a></label>
      </div>
      <button class="btn btn-primary w-full auth-submit" style="width:100%;padding:13px">Crear Cuenta</button>
      <div class="auth-divider">O regístrate con</div>
      <div class="social-buttons">
        <button class="btn-social">${GOOGLE_ICON} Google</button>
        <button class="btn-social">${APPLE_ICON} Apple</button>
        <button class="btn-social">𝕏 Twitter</button>
      </div>
      <div class="auth-footer-text">¿Ya tienes una cuenta? <a href="#" data-nav="/login">Iniciar sesión</a></div>
    </div>
  </div>
</div>`;
}

// ─── LOGIN ───────────────────────────────────────────────────
function renderLogin() {
  return `
<div class="auth-page">
  <nav class="auth-nav">
    ${navLogoHTML()}
    <div class="nav-links">
      <a href="#" data-nav="/">Inicio</a>
      <a href="#" data-nav="/pricing">Precios</a>
    </div>
    <div class="nav-actions">
      <span style="font-size:13px;color:var(--text-3)">¿Nuevo en QuantAI?</span>
      <button class="btn btn-primary" data-nav="/register">Regístrate Gratis</button>
    </div>
  </nav>
  <div class="auth-body">
    <div class="auth-card">
      <div class="auth-title">Bienvenido de nuevo</div>
      <div class="auth-subtitle">Inicia sesión en tu cuenta de QuantAI</div>
      <div class="form-group">
        <label class="form-label">Correo electrónico</label>
        <input class="form-input" type="email" placeholder="juan@ejemplo.com" />
      </div>
      <div class="form-group">
        <label class="form-label">Contraseña</label>
        <div class="form-input-wrap">
          <input class="form-input" type="password" placeholder="Ingresa tu contraseña" />
          <span class="input-icon">◠</span>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
        <div class="form-check" style="margin-bottom:0">
          <input type="checkbox" id="remember" checked />
          <label for="remember">Recordarme</label>
        </div>
        <a href="#" class="forgot-password-link" style="font-size:13px;color:var(--accent)">¿Olvidaste tu contraseña?</a>
      </div>
      <button class="btn btn-primary w-full auth-submit" style="width:100%;padding:13px">Iniciar sesión</button>
      <div class="auth-divider">O continúa con</div>
      <div class="social-buttons">
        <button class="btn-social">${GOOGLE_ICON} Google</button>
        <button class="btn-social">${APPLE_ICON} Apple</button>
        <button class="btn-social">𝕏 Twitter</button>
      </div>
      <div class="auth-footer-text">¿No tienes una cuenta? <a href="#" data-nav="/register">Regístrate gratis</a></div>
    </div>
  </div>
</div>`;
}

// ─── DASHBOARD ───────────────────────────────────────────────
function renderDashboard() {
  const wl = DATA.watchlist.map(s => `
  <div class="watchlist-item" data-symbol="${s.symbol}" style="cursor:pointer">
    <div class="watchlist-identity">
      <div class="watchlist-icon">${s.symbol.slice(0,2)}</div>
      <div>
        <div class="watchlist-name">${s.name.split(',')[0]}</div>
        <div class="watchlist-ticker">${s.symbol}</div>
      </div>
    </div>
    <div class="watchlist-change-pill ${s.change>=0?'pill-positive':'pill-negative'}">${s.change>=0?'+':''}${s.changePct.toFixed(2)}%</div>
  </div>`).join('');

  return appShell('/dashboard', `
<div class="dashboard-grid">
  <!-- IZQUIERDA -->
  <div class="flex-col">
    <div class="balance-card">
      <div class="balance-label">Balance</div>
      <div class="balance-amount">$14,032.56</div>
      <div class="balance-change">▲ +5.61%</div>
    </div>
    <div class="invested-card" data-nav="/portfolio" style="cursor:pointer">
      <div>
        <div class="balance-label" style="color:rgba(0,0,0,0.55)">Invertido</div>
        <div class="balance-amount" style="color:var(--bg-0);font-size:22px">$7,532.21</div>
      </div>
      <div class="invested-arrow">→</div>
    </div>
    <div class="top-stock-card">
      <div class="top-stock-label">Mejor Acción</div>
      <div class="top-stock-row">
        <div class="stock-identity">
          <div class="stock-icon">TS</div>
          <div>
            <div class="stock-name">Tesla Inc</div>
            <div class="stock-ticker">TSLA</div>
          </div>
        </div>
        <div class="stock-values">
          <div class="stock-price">$177.90</div>
          <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:4px">
            <span class="stock-basis" style="font-size:10px;color:var(--text-3)">Costo $129.34</span>
            <span class="positive" style="font-size:11px">+$48.56</span>
          </div>
        </div>
      </div>
    </div>
    <div class="withdraw-card">
      <div>
        <div style="font-size:11px;color:var(--text-3)">Disponible para Retirar</div>
        <div style="font-size:18px;font-weight:700;margin-top:4px">$6,500.35</div>
      </div>
    </div>
  </div>

  <!-- CENTRO -->
  <div class="flex-col">
    <div class="price-chart-card" style="margin-bottom:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div>
          <div style="font-size:11px;color:var(--text-3)">Tesla Inc · TSLA</div>
          <div style="font-size:22px;font-weight:800">$177.90 <span style="font-size:13px;color:var(--positive)">+2.62%</span></div>
        </div>
        <div class="chart-tabs" data-chart="price-chart">
          ${['1D','5D','1M','6M','YTD'].map((t,i)=>`<div class="chart-tab${i===0?' active':''}">${t}</div>`).join('')}
        </div>
      </div>
      <div class="chart-meta">
        <div class="chart-meta-item">Máx. <div class="chart-meta-value">$179.44</div></div>
        <div class="chart-meta-item">Mín. <div class="chart-meta-value">$171.28</div></div>
        <div class="chart-meta-item">Apertura <div class="chart-meta-value">$173.55</div></div>
        <div class="chart-meta-item">Cierre Ant. (30 Días) <div class="chart-meta-value" style="color:var(--text-2)">$153.41</div></div>
      </div>
      <div class="chart-canvas-wrap"><canvas id="price-chart"></canvas></div>
    </div>

    <div class="portfolio-analytics-card">
      <div class="card-header">
        <span class="card-title">Analítica de Cartera</span>
        <div class="chart-tabs" data-chart="portfolio-chart">
          ${['1D','5D','1M','6M','YTD','Máx'].map((t,i)=>`<div class="chart-tab${i===0?' active':''}">${t}</div>`).join('')}
        </div>
      </div>
      <div class="portfolio-chart-wrap"><canvas id="portfolio-chart"></canvas></div>
      <div class="portfolio-annotation">30 ene, 01:17:19 AM — $14,032.56</div>
    </div>
  </div>

  <!-- DERECHA -->
  <div class="flex-col">
    <div class="snapshot-card" style="margin-bottom:12px">
      <div class="card-header"><span class="card-title">Instantánea · TSLA</span></div>
      <div class="snapshot-pair">
        <div class="snapshot-item"><div class="snapshot-label">Apertura</div><div class="snapshot-value">12,051.48</div></div>
        <div class="snapshot-item"><div class="snapshot-label">Cierre</div><div class="snapshot-value">12,000.21</div></div>
      </div>
      <div class="snapshot-pair">
        <div class="snapshot-item"><div class="snapshot-label">Mín. 52S</div><div class="snapshot-value">11,999.87</div></div>
        <div class="snapshot-item"><div class="snapshot-label">Máx. 52S</div><div class="snapshot-value">12,248.15</div></div>
      </div>
      <div class="snapshot-highlight"><div class="snapshot-label" style="font-size:11px;color:var(--text-3)">Último Precio</div><div class="snapshot-value" style="color:var(--accent)">12,166.60</div></div>
      <div class="snapshot-divider"></div>
      <div class="snapshot-pair">
        <div class="snapshot-item"><div class="snapshot-label">Mín. 52S</div><div class="snapshot-value">10,440.64</div></div>
        <div class="snapshot-item"><div class="snapshot-label">Máx. 52S</div><div class="snapshot-value">15,265.42</div></div>
      </div>
      <div class="snapshot-highlight" style="margin-top:6px"><div class="snapshot-value" style="color:var(--accent)">12,166.60</div></div>
      <div class="snapshot-divider"></div>
      <div class="snapshot-time-row">
        <span>Hora: <strong>05:16 PM</strong></span>
        <span>Fecha: <strong>27/01/23</strong></span>
      </div>
    </div>

    <div class="watchlist-card">
      <div class="card-header">
        <span class="card-title">Lista de Seguimiento</span>
        <span style="color:var(--accent);font-size:20px;cursor:pointer">+</span>
      </div>
      ${wl}
    </div>
  </div>
</div>`);
}

function initDashboardCharts() {
  const priceCtx = document.getElementById('price-chart');
  if (priceCtx) {
    lineChart(priceCtx, ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm'], [{
      label: 'TSLA',
      data: TSLA_PRICES,
      borderColor: '#00E5FF',
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      fill: { target: 'origin', above: 'rgba(0,229,255,0.07)' },
    }], { xDisplay: true, yDisplay: true, yFormat: v => `$${v}` });
  }
  const portCtx = document.getElementById('portfolio-chart');
  if (portCtx) {
    lineChart(portCtx, PORT_LABELS, [{
      label: 'Portfolio',
      data: PORT_PRICES,
      borderColor: '#00E5A0',
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      fill: { target: 'origin', above: 'rgba(0,229,160,0.07)' },
    }], { xDisplay: true, yDisplay: true, yFormat: v => `$${(v/1000).toFixed(0)}k` });
  }
}

// ─── TRADING ─────────────────────────────────────────────────
function renderTrading() {
  const newsHTML = DATA.news.map((n, i) => `
  <div class="news-item news-clickable" data-news-idx="${i}" style="cursor:pointer">
    <div class="news-headline">${n.headline}</div>
    <div class="news-time">${n.time}</div>
  </div>`).join('');

  const gainersHTML = DATA.gainers.map(g => `
  <tr>
    <td><div class="gainers-symbol">${g.symbol}</div><div class="gainers-name">${g.name}</div></td>
    <td class="gainers-price">$${g.price}</td>
    <td class="gainers-change positive">+${g.pct.toFixed(2)}%</td>
  </tr>`).join('');

  const heatmapSectors = [
    { name:'Tecnología de la Información', stocks:[{t:'AAPL',s:52},{t:'MSFT',s:46},{t:'NVDA',s:28},{t:'INTC',s:14},{t:'CSCO',s:12},{t:'CRM',s:10}], color:'#00B47D' },
    { name:'Finanzas', stocks:[{t:'JPM',s:32},{t:'BAC',s:22},{t:'GS',s:18},{t:'WFC',s:14},{t:'C',s:8}], color:'#FF4444' },
    { name:'Consumo Básico', stocks:[{t:'AMZN',s:40},{t:'HD',s:22},{t:'TGT',s:12},{t:'NKE',s:10},{t:'LOW',s:8}], color:'#FF4444' },
  ];

  return appShell('/trading', `
<div class="trading-grid">
  <!-- Índices -->
  <div class="card">
    <div class="card-header"><span class="card-title">Índices</span><span class="card-menu">≡</span></div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
      ${[
        { label:'S&P 500 ETF', price:'509.90', change:'-3.05', pct:'-0.40%', color:'#A78BFA' },
        { label:'Dow Jones ETF', price:'30,000', change:'-3.05', pct:'+0.56%', color:'#22D3EE' },
        { label:'NASDAQ', price:'452.90', change:'-3.05', pct:'-0.96%', color:'#F59E0B' },
      ].map(idx=>`
      <div class="index-item">
        <span class="index-bullet" style="background:${idx.color}"></span>
        <div>
          <div class="index-name">${idx.label}</div>
          <div style="font-size:10px;color:var(--text-3)">${idx.change} <span class="${idx.pct.startsWith('-')?'negative':'positive'}">${idx.pct}</span></div>
        </div>
        <div class="index-price">${idx.price}</div>
      </div>`).join('')}
    </div>
    <div class="index-chart-wrap"><canvas id="index-chart"></canvas></div>
    <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-3);margin-top:6px"><span>09:30</span><span>+1:00</span><span>16:00</span><span>-1:00</span></div>
  </div>

  <!-- Mercados Globales -->
  <div class="card">
    <div class="card-header"><span class="card-title">Mercados Globales</span><span class="card-menu">≡</span></div>
    <div class="global-map">
      <div class="map-bubble bubble-neg" style="width:52px;height:52px;left:22%;top:38%">S&P<br/>-0.56%</div>
      <div class="map-bubble bubble-neg" style="width:44px;height:44px;left:35%;top:28%">FTSE<br/>-0.56%</div>
      <div class="map-bubble bubble-neg" style="width:40px;height:40px;left:28%;top:42%">NASDAQ<br style="display:none"/>-0.56%</div>
      <div class="map-bubble bubble-neg" style="width:48px;height:48px;left:42%;top:36%">Dow<br/>-0.56%</div>
      <div class="map-bubble bubble-neg" style="width:36px;height:36px;left:50%;top:26%">FTSE<br/>-0.56%</div>
      <div class="map-bubble bubble-neg" style="width:40px;height:40px;left:60%;top:32%">S&P<br/>-0.56%</div>
      <div class="map-bubble bubble-neg" style="width:38px;height:38px;left:70%;top:50%">S&P<br/>-0.56%</div>
      <div class="map-bubble bubble-pos" style="width:46px;height:46px;left:80%;top:28%">FTSE<br/>+0.56%</div>
    </div>
  </div>
</div>

<div class="trading-bottom-grid">
  <!-- Mapa de Calor -->
  <div class="card">
    <div class="card-header">
      <span class="card-title">Mapa de Calor</span><span class="card-menu">≡</span>
    </div>
    <div style="display:flex;gap:12px;align-items:center;margin-bottom:12px">
      <select style="background:var(--bg-3);border:1px solid var(--border);color:var(--text-2);border-radius:var(--radius-sm);padding:5px 10px;font-size:12px;outline:none">
        <option>Popular</option><option>Por Volumen</option><option>Por Sector</option>
      </select>
      <span style="font-size:11px;color:var(--text-3)">Marco temporal</span>
      ${['D','W','M','Y'].map((t,i)=>`<div style="width:28px;height:28px;border-radius:50%;background:${i===0?'var(--bg-1)':'transparent'};border:1px solid ${i===0?'var(--border-accent)':'transparent'};display:flex;align-items:center;justify-content:center;font-size:11px;color:${i===0?'var(--accent)':'var(--text-3)'};cursor:pointer">${t}</div>`).join('')}
    </div>
    ${heatmapSectors.map(sec => {
      const cells = sec.stocks.map(s => {
        const positive = Math.random() > 0.45;
        const c = positive ? `rgba(0,180,125,${0.5+Math.random()*0.5})` : `rgba(220,50,50,${0.5+Math.random()*0.5})`;
        const w = Math.max(30, s.s);
        return `<div class="heatmap-cell" style="width:${w}px;height:${Math.max(24,w*0.6)}px;background:${c}" title="${s.t}">${s.t}</div>`;
      }).join('');
      return `<div class="heatmap-sector"><div class="heatmap-sector-name">${sec.name}</div><div class="heatmap-cells">${cells}</div></div>`;
    }).join('')}
  </div>

  <!-- Principales Noticias -->
  <div class="card">
    <div class="card-header"><span class="card-title">Principales Noticias</span><span class="card-menu">≡</span></div>
    <div class="news-list">${newsHTML}</div>
  </div>

  <!-- Mayores Ganadores -->
  <div class="card">
    <div class="card-header"><span class="card-title">Mayores Ganadores</span><span class="card-menu">≡</span></div>
    <table class="gainers-table">
      <thead><tr><th>Símbolo / Nombre</th><th style="text-align:right">Precio</th><th style="text-align:right">% Cambio</th></tr></thead>
      <tbody>${gainersHTML}</tbody>
    </table>
  </div>
</div>`);
}

function initTradingCharts() {
  const idxCtx = document.getElementById('index-chart');
  if (idxCtx) {
    lineChart(idxCtx, MARKET_LABELS, [
      { label:'S&P 500', data: SP_PRICES.map(v => v/5.09), borderColor:'#A78BFA', borderWidth:1.5, pointRadius:0, tension:0.4 },
      { label:'Dow Jones', data: DOW_PRICES.map(v => v/300), borderColor:'#22D3EE', borderWidth:1.5, pointRadius:0, tension:0.4 },
      { label:'NASDAQ', data: NAS_PRICES, borderColor:'#F59E0B', borderWidth:1.5, pointRadius:0, tension:0.4 },
    ], { legend: true, xDisplay: false, yDisplay: false });
  }
}

// ─── PORTFOLIO ───────────────────────────────────────────────
function renderPortfolio() {
  const alloc = [
    { name:'Tecnología', pct:48, color:'#00E5FF' },
    { name:'Consumo',    pct:22, color:'#A78BFA' },
    { name:'Salud',      pct:12, color:'#22D3EE' },
    { name:'Finanzas',   pct:10, color:'#F59E0B' },
    { name:'Energía',    pct:8,  color:'#FF4444' },
  ];

  const holdingsHTML = DATA.holdings.map(h => `
  <tr>
    <td><div class="holding-symbol">${h.symbol}</div><div class="holding-name">${h.name}</div></td>
    <td>${h.shares}</td>
    <td>$${h.avgCost.toFixed(2)}</td>
    <td>$${h.current.toFixed(2)}</td>
    <td>$${h.value.toFixed(2)}</td>
    <td class="${h.gain>=0?'positive':'negative'}">${h.gain>=0?'+':''}$${Math.abs(h.gain).toFixed(2)}</td>
    <td class="${h.gainPct>=0?'positive':'negative'}">${h.gainPct>=0?'+':''}${h.gainPct.toFixed(1)}%</td>
  </tr>`).join('');

  return appShell('/portfolio', `
<div class="portfolio-header">
  <div>
    <div style="font-size:24px;font-weight:800">Cartera <span style="color:var(--text-3);font-weight:400;font-size:16px">· 6 posiciones</span></div>
    <div style="font-size:13px;color:var(--text-2);margin-top:4px">Valor Total: <strong style="color:var(--positive)">$14,486.38</strong> &nbsp;|&nbsp; G/P del día: <strong class="positive">+$312.54 (+2.2%)</strong></div>
  </div>
  <button class="btn btn-primary" id="add-position-btn">+ Añadir Posición</button>
</div>

<div class="portfolio-grid">
  <!-- Distribución donut -->
  <div class="card">
    <div class="card-title" style="margin-bottom:16px">Asignación</div>
    <div class="portfolio-chart-wrap"><canvas id="alloc-chart"></canvas></div>
    <div style="margin-top:20px;display:flex;flex-direction:column;gap:0">
      ${alloc.map(a => `
      <div class="allocation-item">
        <div class="allocation-dot" style="background:${a.color}"></div>
        <div class="allocation-name">${a.name}</div>
        <div class="allocation-pct">${a.pct}%</div>
        <div class="allocation-bar-wrap"><div class="allocation-bar" style="width:${a.pct}%;background:${a.color}"></div></div>
      </div>`).join('')}
    </div>
  </div>

  <!-- Gráfico de rendimiento -->
  <div class="card">
    <div class="card-header">
      <span class="card-title">Rendimiento de Cartera</span>
      <div class="chart-tabs" data-chart="perf-chart">
        ${['1D','1S','1M','3M','1A','Todo'].map((t,i)=>`<div class="chart-tab${i===0?' active':''}">${t}</div>`).join('')}
      </div>
    </div>
    <div style="margin:8px 0 4px">
      <div style="font-size:28px;font-weight:800">$14,486.38</div>
      <div style="font-size:13px;color:var(--positive);margin-top:4px">▲ +$5,286.38 (+57.6%) total</div>
    </div>
    <div style="height:200px"><canvas id="perf-chart"></canvas></div>
  </div>
</div>

<!-- Tabla de posiciones -->
<div class="card" style="margin-top:16px">
  <div class="card-title" style="margin-bottom:16px">Posiciones</div>
  <div class="holdings-wrap">
  <table class="holdings-table" style="width:100%">
    <thead><tr>
      <th>Símbolo</th><th>Acciones</th><th>Costo Prom.</th><th>Actual</th><th>Valor de Mercado</th><th>Ganancia / Pérdida</th><th>% Cambio</th>
    </tr></thead>
    <tbody>${holdingsHTML}</tbody>
  </table>
  </div>
</div>`);
}

function initPortfolioCharts() {
  const allocCtx = document.getElementById('alloc-chart');
  if (allocCtx) {
    doughnutChart(allocCtx,
      ['Tecnología','Consumo','Salud','Finanzas','Energía'],
      [48,22,12,10,8],
      ['#00E5FF','#A78BFA','#22D3EE','#F59E0B','#FF4444']
    );
  }
  const perfCtx = document.getElementById('perf-chart');
  if (perfCtx) {
    lineChart(perfCtx, PORT_LABELS, [{
      label:'Portfolio',
      data: PORT_PRICES,
      borderColor:'#00E5A0',
      borderWidth:2,
      pointRadius:0,
      tension:0.4,
      fill: { target:'origin', above:'rgba(0,229,160,0.07)' },
    }], { xDisplay:true, yDisplay:true, yFormat: v=>`$${(v/1000).toFixed(0)}k` });
  }
}

// ─── RESEARCH ────────────────────────────────────────────────
const RESEARCH_FILTER_MAP = { 'IA Y TECNOLOGÍA':'Tec', 'MACRO':'Macro', 'SECTORIAL':'Tec', 'CUANTITATIVO':'Cuant', 'ESG':'ESG' };

function renderResearch() {
  return appShell('/research', `
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
  <div>
    <div style="font-size:22px;font-weight:800">Portal de Investigación</div>
    <div style="font-size:13px;color:var(--text-2);margin-top:4px">Insights curados por IA & reportes cuantitativos</div>
  </div>
  <div style="display:flex;gap:8px">
    ${[{l:'Todo',c:'Todo'},{l:'Macro',c:'Macro'},{l:'Cuant',c:'Cuant'},{l:'Tec',c:'Tec'},{l:'ESG',c:'ESG'}].map((item,i)=>`<div class="chart-tab research-filter${i===0?' active':''}" data-cat="${item.c}" style="cursor:pointer;border:1px solid var(--border);border-radius:99px;padding:6px 14px">${item.l}</div>`).join('')}
  </div>
</div>

<div class="research-grid">
  <!-- Artículos -->
  <div class="card">
    <div class="card-title" style="margin-bottom:0">Últimas Investigaciones</div>
    ${DATA.research.map((r, i) => `
    <div class="research-item" data-filter-cat="${RESEARCH_FILTER_MAP[r.cat]||''}">
      <div class="research-category">${r.cat}</div>
      <div class="research-title research-title-link" data-idx="${i}" style="cursor:pointer">${r.title}</div>
      <div class="research-excerpt">${r.excerpt}</div>
      <div class="research-meta">${r.date} &nbsp;·&nbsp; ${r.readTime} de lectura &nbsp;·&nbsp; <span class="research-read-more" data-idx="${i}" style="color:var(--accent);cursor:pointer">Leer reporte →</span></div>
    </div>`).join('')}
  </div>

  <!-- Panel de Señales IA -->
  <div>
    <div style="font-size:13px;font-weight:700;margin-bottom:12px;color:var(--text-2);text-transform:uppercase;letter-spacing:1px">Señales IA</div>
    ${DATA.aiSignals.map(s => {
      const badgeClass = s.signal==='COMPRAR'?'badge-buy':s.signal==='VENDER'?'badge-sell':'badge-hold';
      return `
      <div class="ai-signal-card">
        <div class="signal-header">
          <span class="signal-badge ${badgeClass}">${s.signal}</span>
          <span class="signal-ticker">${s.ticker}</span>
          <span class="signal-confidence">Confianza: <span>${s.confidence}%</span></span>
        </div>
        <div class="signal-bar-wrap"><div class="signal-bar" style="width:${s.confidence}%;background:${s.signal==='COMPRAR'?'var(--positive)':s.signal==='VENDER'?'var(--negative)':'var(--warn)'}"></div></div>
        <div class="signal-desc">${s.desc}</div>
      </div>`;
    }).join('')}

    <div class="card" style="margin-top:12px">
      <div class="card-title" style="margin-bottom:12px">Sentimiento del Mercado</div>
      <div style="display:flex;justify-content:space-between;margin-bottom:8px">
        <span style="font-size:12px;color:var(--positive)">Alcista 58%</span>
        <span style="font-size:12px;color:var(--negative)">Bajista 42%</span>
      </div>
      <div style="height:6px;background:var(--bg-3);border-radius:99px;overflow:hidden">
        <div style="width:58%;height:100%;background:linear-gradient(90deg,var(--positive),var(--accent));border-radius:99px"></div>
      </div>
      <div style="font-size:12px;color:var(--text-3);margin-top:10px">Basado en 2,4M señales sociales + análisis de flujo de opciones</div>
    </div>
  </div>
</div>`);
}

// ─── ACCOUNT ─────────────────────────────────────────────────
function renderAccount() {
  const toggle = (on) => `<div class="toggle-switch${on?' on':''}"><div class="toggle-knob"></div></div>`;
  const row = (label, desc, on) => `<div class="settings-row"><div><div class="settings-row-label">${label}</div><div class="settings-row-desc">${desc}</div></div>${toggle(on)}</div>`;

  const panels = {
    profile: `
      <div class="settings-section-title">Configuración de Cuenta</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">
        <div class="form-group"><label class="form-label">Nombre</label><input class="form-input" type="text" value="Jairo"/></div>
        <div class="form-group"><label class="form-label">Apellido</label><input class="form-input" type="text" value="Hernandez"/></div>
        <div class="form-group"><label class="form-label">Correo electrónico</label><input class="form-input" type="email" value="jhernnog@myuax.com"/></div>
        <div class="form-group"><label class="form-label">Teléfono</label><input class="form-input" type="tel" value="+1 (555) 000-0000"/></div>
      </div>
      <button class="btn btn-primary" style="margin-bottom:28px">Guardar Cambios</button>
      <div class="settings-section-title" style="margin-top:8px">Preferencias</div>
      ${row('Notificaciones por correo','Recibir alertas de precios objetivo y noticias',true)}
      ${row('Notificaciones push','Alertas móviles para confirmaciones de operaciones',true)}
      ${row('Autenticación de dos factores','Asegura tu cuenta con 2FA',false)}
      ${row('Modo oscuro','Usar tema oscuro en toda la plataforma',true)}
      ${row('Alertas de Señales IA','Recibir notificaciones de señales de alta confianza',true)}`,

    notifications: `
      <div class="settings-section-title">Tipos de Alerta</div>
      ${row('Alertas de Señales IA','Notificar cuando se detecten señales de alta confianza',true)}
      ${row('Alertas de Precio Objetivo','Alerta cuando una acción vigilada alcance tu precio objetivo',true)}
      ${row('Recordatorios de Resultados','Recordatorios 24h y 1h antes de la publicación de resultados',true)}
      ${row('Resumen Diario de Cartera','Resumen diario del rendimiento de la cartera enviado a las 18h',false)}
      ${row('Apertura/Cierre del Mercado','Notificar en la apertura (9:30am) y cierre del mercado (16h)',false)}
      ${row('Resumen de Noticias','Resumen matutino curado de las principales noticias financieras',true)}
      <div class="settings-section-title" style="margin-top:24px">Canal de Entrega</div>
      ${row('Notificaciones en la app','Mostrar alertas dentro de la plataforma QuantAI',true)}
      ${row('Notificaciones por correo','Enviar alertas a jhernnog@myuax.com',true)}
      ${row('Notificaciones push','Push móvil a través de la app QuantAI iOS/Android',false)}`,

    security: `
      <div class="settings-section-title">Cambiar Contraseña</div>
      <div style="max-width:420px">
        <div class="form-group"><label class="form-label">Contraseña Actual</label><input class="form-input" type="password" placeholder="Ingresa tu contraseña actual"/></div>
        <div class="form-group"><label class="form-label">Nueva Contraseña</label><input class="form-input" type="password" placeholder="Mín. 8 caracteres"/></div>
        <div class="form-group"><label class="form-label">Confirmar Nueva Contraseña</label><input class="form-input" type="password" placeholder="Repite la nueva contraseña"/></div>
        <button class="btn btn-primary" style="margin-bottom:28px">Actualizar Contraseña</button>
      </div>
      <div class="settings-section-title">Autenticación de Dos Factores</div>
      ${row('App Autenticadora (TOTP)','Usa Google Authenticator o Authy para generar códigos',false)}
      ${row('Verificación por SMS','Recibir un código por mensaje de texto al +1 (555) 000-0000',true)}
      <div class="settings-section-title" style="margin-top:24px">Sesiones Activas</div>
      <table class="holdings-table" style="width:100%">
        <thead><tr><th>Dispositivo</th><th>Ubicación</th><th>Última Actividad</th><th></th></tr></thead>
        <tbody>
          <tr><td><div style="font-weight:600">Chrome — macOS</div><div style="font-size:11px;color:var(--accent)">Sesión actual</div></td><td style="color:var(--text-2)">Nueva York, EE.UU.</td><td style="color:var(--text-2)">Ahora</td><td></td></tr>
          <tr><td><div style="font-weight:600">Safari — iPhone 15</div></td><td style="color:var(--text-2)">Nueva York, EE.UU.</td><td style="color:var(--text-2)">hace 2 hrs</td><td><button style="border:1px solid var(--negative);color:var(--negative);background:none;border-radius:var(--radius-sm);padding:4px 10px;font-size:11px;cursor:pointer">Revocar</button></td></tr>
          <tr><td><div style="font-weight:600">Firefox — Windows</div></td><td style="color:var(--text-2)">Miami, EE.UU.</td><td style="color:var(--text-2)">hace 3 días</td><td><button style="border:1px solid var(--negative);color:var(--negative);background:none;border-radius:var(--radius-sm);padding:4px 10px;font-size:11px;cursor:pointer">Revocar</button></td></tr>
        </tbody>
      </table>`,

    billing: `
      <div class="settings-section-title">Plan Actual</div>
      <div style="background:var(--bg-3);border:1px solid var(--border-accent);border-radius:var(--radius-md);padding:20px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between">
        <div><div style="font-size:16px;font-weight:700;color:var(--accent)">Plan Pro</div><div style="font-size:13px;color:var(--text-2);margin-top:4px">$49/mes · Se renueva el 27 feb 2026</div></div>
        <button class="btn btn-outline">Actualizar a Institucional</button>
      </div>
      <div class="settings-section-title">Método de Pago</div>
      <div style="display:flex;align-items:center;gap:14px;background:var(--bg-3);border:1px solid var(--border);border-radius:var(--radius-md);padding:16px;margin-bottom:24px">
        <div style="font-size:22px">💳</div>
        <div><div style="font-weight:600">Visa terminada en 4242</div><div style="font-size:12px;color:var(--text-3)">Vence 08/2027</div></div>
        <button class="btn btn-outline" style="margin-left:auto;padding:6px 14px;font-size:12px">Actualizar</button>
      </div>
      <div class="settings-section-title">Historial de Facturas</div>
      <table class="holdings-table" style="width:100%">
        <thead><tr><th>Fecha</th><th>Descripción</th><th>Monto</th><th>Estado</th></tr></thead>
        <tbody>
          ${[['27 ene 2026','Plan Pro — Mensual','$49.00'],['27 dic 2025','Plan Pro — Mensual','$49.00'],['27 nov 2025','Plan Pro — Mensual','$49.00'],['27 oct 2025','Plan Pro — Mensual','$49.00']].map(([d,desc,amt])=>`
          <tr><td style="color:var(--text-2)">${d}</td><td>${desc}</td><td style="color:var(--text-2)">${amt}</td><td><span style="background:rgba(0,229,160,0.15);color:var(--positive);padding:2px 8px;border-radius:99px;font-size:11px;font-weight:600">Pagado</span></td></tr>`).join('')}
        </tbody>
      </table>`,

    appearance: `
      <div class="settings-section-title">Tema</div>
      <div style="display:flex;gap:12px;margin-bottom:28px">
        ${[{l:'Dark',i:'🌙',d:'Oscuro'},{l:'Light',i:'☀️',d:'Claro'},{l:'System',i:'💻',d:'Sistema'}].map(t=>`
        <div class="theme-option-btn" data-theme-val="${t.l}" style="flex:1;background:var(--bg-3);border:1px solid var(--border);border-radius:var(--radius-md);padding:16px;text-align:center;cursor:pointer;transition:all 0.2s">
          <div style="font-size:24px;margin-bottom:8px">${t.i}</div>
          <div style="font-size:13px;font-weight:600;color:var(--text-2)">${t.d}</div>
        </div>`).join('')}
      </div>
      <div class="settings-section-title">Pantalla</div>
      ${row('Vista Compacta','Reducir relleno y tamaño de fuente para mayor densidad de datos',false)}
      ${row('Animaciones','Habilitar transiciones de página y animaciones de gráficos',true)}
      ${row('Mostrar Símbolo de Moneda','Mostrar el símbolo $ junto a todos los precios',true)}
      <div class="settings-section-title" style="margin-top:24px">Idioma y Región</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div class="form-group"><label class="form-label">Idioma</label><select class="form-input"><option>Español</option><option>Inglés (EE.UU.)</option><option>Francés</option><option>Alemán</option></select></div>
        <div class="form-group"><label class="form-label">Formato de Número</label><select class="form-input"><option>1.234,56 (UE)</option><option>1,234.56 (EE.UU.)</option></select></div>
      </div>`,

    apikeys: `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px">
        <div class="settings-section-title" style="border:none;padding:0;margin:0">Claves API</div>
        <button class="btn btn-primary" style="padding:8px 16px;font-size:13px">+ Generar Nueva Clave</button>
      </div>
      <table class="holdings-table" style="width:100%">
        <thead><tr><th>Name</th><th>Key</th><th>Created</th><th>Last Used</th><th></th></tr></thead>
        <tbody>
          ${[{n:'App de Producción',k:'qai_pk_•••••••••3f2a',c:'15 ene 2026',u:'hace 2 hrs'},{n:'Algo Bot v2',k:'qai_pk_•••••••••8c91',c:'3 dic 2025',u:'hace 1 día'},{n:'Backtester',k:'qai_pk_•••••••••1e44',c:'20 nov 2025',u:'hace 5 días'}].map(k=>`
          <tr><td style="font-weight:600">${k.n}</td><td><code style="background:var(--bg-3);padding:3px 8px;border-radius:4px;font-size:12px;color:var(--text-2)">${k.k}</code></td><td style="color:var(--text-2)">${k.c}</td><td style="color:var(--text-2)">${k.u}</td><td><button style="border:1px solid var(--negative);color:var(--negative);background:none;border-radius:var(--radius-sm);padding:4px 10px;font-size:11px;cursor:pointer">Revocar</button></td></tr>`).join('')}
        </tbody>
      </table>
      <div style="margin-top:16px;padding:12px 16px;background:var(--bg-3);border-radius:var(--radius-sm);border:1px solid var(--border)">
        <div style="font-size:12px;color:var(--text-3)">Plan Pro: 3 claves API · 10.000 llamadas/día · Límite: 100 req/min</div>
      </div>`,
  };

  return appShell('/account', `
<div class="account-grid">
  <div>
    <div class="profile-card">
      <div class="profile-avatar-lg">J</div>
      <div class="profile-name">Jairo</div>
      <div class="profile-email">jhernnog@myuax.com</div>
      <div class="profile-plan">✦ Plan Pro</div>
    </div>
    <div style="margin-top:8px">
      ${[
        { icon:'◕', label:'Perfil',         panel:'profile',       active:true },
        { icon:'🔔', label:'Notificaciones', panel:'notifications', active:false },
        { icon:'🔒', label:'Seguridad',      panel:'security',      active:false },
        { icon:'💳', label:'Facturación',    panel:'billing',       active:false },
        { icon:'🎨', label:'Apariencia',     panel:'appearance',    active:false },
        { icon:'◧',  label:'Claves API',     panel:'apikeys',       active:false },
      ].map(it=>`
      <div class="settings-nav-item${it.active?' active':''}" data-panel="${it.panel}" style="cursor:pointer">
        <span class="settings-icon">${it.icon}</span>${it.label}
      </div>`).join('')}
    </div>
  </div>
  <div>
    ${Object.entries(panels).map(([key, content], i) =>
      `<div class="account-panel card" data-panel="${key}"${i>0?' style="display:none"':''}>${content}</div>`
    ).join('')}
  </div>
</div>`);
}

// ─── PRICING ─────────────────────────────────────────────────
function renderPricing() {
  const plans = [
    {
      name:'Básico', price:0, period:'/mes',
      features:[
        { t:'5 señales IA por día',              ok:true },
        { t:'Seguimiento básico de cartera',      ok:true },
        { t:'Cotizaciones en tiempo real (15m)',  ok:true },
        { t:'Acceso al foro de la comunidad',     ok:true },
        { t:'Analítica avanzada',                 ok:false },
        { t:'Portal de investigación',            ok:false },
        { t:'Soporte prioritario',                ok:false },
      ],
      cta:'Comenzar', outline:true,
    },
    {
      name:'Pro', price:49, period:'/mes', featured:true, badge:'Más Popular',
      features:[
        { t:'Señales IA ilimitadas',              ok:true },
        { t:'Analítica completa de cartera',      ok:true },
        { t:'Datos en tiempo real y Nivel II',    ok:true },
        { t:'Acceso al portal de investigación',  ok:true },
        { t:'Listas de seguimiento personalizadas', ok:true },
        { t:'Cobertura de mercados globales',     ok:true },
        { t:'Soporte prioritario',                ok:false },
      ],
      cta:'Iniciar prueba gratuita', outline:false,
    },
    {
      name:'Institucional', price:299, period:'/mes',
      features:[
        { t:'Todo lo incluido en Pro',            ok:true },
        { t:'Acceso API (10k llamadas/día)',       ok:true },
        { t:'Modelos de factores personalizados', ok:true },
        { t:'Gestor de cuenta dedicado',          ok:true },
        { t:'Opciones de marca blanca',           ok:true },
        { t:'Garantía SLA y tiempo de actividad', ok:true },
        { t:'Soporte prioritario 24/7',           ok:true },
      ],
      cta:'Contactar ventas', outline:true,
    },
  ];

  return `
<div class="pricing-page">
  <nav class="landing-nav">
    ${navLogoHTML()}
    <div class="nav-links">
      <a href="#" data-nav="/">Inicio</a>
      <a href="#" data-nav="/dashboard">Panel</a>
      <a href="#" data-nav="/research">Investigación</a>
    </div>
    <div class="nav-actions">
      <button class="btn btn-ghost" data-nav="/login">Iniciar sesión</button>
      <button class="btn btn-primary" data-nav="/register">Registrarse</button>
    </div>
  </nav>

  <div class="pricing-hero">
    <h1>Precios <span>simples y transparentes</span></h1>
    <p>Sin cargos ocultos. Sin sorpresas. Comienza gratis, escala a tu ritmo.</p>
    <div class="pricing-toggle">
      <div class="toggle-opt active">Mensual</div>
      <div class="toggle-opt">Anual <span style="color:var(--positive);font-size:11px;font-weight:700"> Ahorra 20%</span></div>
    </div>
  </div>

  <div class="pricing-cards">
    ${plans.map(p => `
    <div class="pricing-card${p.featured?' featured':''}">
      ${p.badge ? `<div class="pricing-badge">${p.badge}</div>` : '<div style="height:22px"></div>'}
      <div class="pricing-plan">${p.name}</div>
      <div class="pricing-amount"><sup>$</sup>${p.price}</div>
      <div class="pricing-period">${p.period}</div>
      <ul class="pricing-features">
        ${p.features.map(f=>`<li><span class="${f.ok?'feature-check':'feature-x'}">${f.ok?'✓':'✗'}</span>${f.t}</li>`).join('')}
      </ul>
      <button class="btn ${p.outline?'btn-outline':'btn-primary'} w-full" style="width:100%;padding:12px" data-nav="/register">${p.cta}</button>
    </div>`).join('')}
  </div>
</div>`;
}

// ─── Stock modal data ─────────────────────────────────────────
const STOCK_DETAILS = {
  AMZN:{ name:'Amazon.com, Inc.',       price:186.34, change:+1.87, changePct:+1.02, high:189.20, low:183.10, vol:'42.1M', cap:'$1.93T',
    news:[{ headline:'Amazon AWS revenue surges 17% YoY on cloud demand', time:'1 hr ago' },{ headline:'Amazon expands same-day delivery to 15 new metros', time:'4 hrs ago' },{ headline:'Analysts raise AMZN price target to $220', time:'1 day ago' }]},
  KO:{   name:'Coca-Cola Co.',           price:61.52,  change:-0.30, changePct:-0.48, high:62.10, low:61.05, vol:'15.3M', cap:'$265B',
    news:[{ headline:'Coca-Cola Q4 organic revenue growth beats estimates', time:'3 hrs ago' },{ headline:'KO raises dividend for 61st consecutive year', time:'2 days ago' },{ headline:'Consumer staples face headwinds as rates stay elevated', time:'3 days ago' }]},
  BMW:{  name:'Bayerische Motoren Werke',price:94.40,  change:+3.63, changePct:+3.98, high:95.80, low:91.20, vol:'3.2M',  cap:'$60B',
    news:[{ headline:'BMW EV sales up 74% in Q4 globally', time:'2 hrs ago' },{ headline:'German auto sector boosted by new EV subsidies', time:'8 hrs ago' },{ headline:'BMW unveils next-gen Neue Klasse platform', time:'2 days ago' }]},
  MSFT:{ name:'Microsoft Corp.',         price:336.05, change:+2.11, changePct:+0.63, high:337.80, low:332.40, vol:'22.7M', cap:'$2.50T',
    news:[{ headline:'Microsoft Copilot adoption hits 1M enterprise seats', time:'30 min ago' },{ headline:'Azure cloud growth accelerates to 28%', time:'5 hrs ago' },{ headline:'MSFT partners with OpenAI on next-gen deployment', time:'1 day ago' }]},
  UPS:{  name:'United Parcel Service',   price:148.20, change:+4.36, changePct:+2.99, high:149.80, low:143.50, vol:'5.8M',  cap:'$127B',
    news:[{ headline:'UPS Q4 volume recovery ahead of expectations', time:'1 hr ago' },{ headline:'UPS expands drone delivery pilot to 3 cities', time:'6 hrs ago' },{ headline:'Logistics sector rebound signals improving demand', time:'2 days ago' }]},
  MA:{   name:'Mastercard Inc.',          price:489.50, change:-6.10, changePct:-1.24, high:498.20, low:487.10, vol:'4.1M',  cap:'$462B',
    news:[{ headline:'Mastercard cross-border volume rises 12%', time:'2 hrs ago' },{ headline:'Payments sector faces BNPL competition headwinds', time:'9 hrs ago' },{ headline:'Mastercard partners with 3 banks for digital wallet', time:'3 days ago' }]},
};

// ─── Notifications data ───────────────────────────────────────
const NOTIFICATIONS = [
  { icon:'🤖', title:'Señal IA: COMPRAR NVDA',          desc:'Confianza del 87% — patrón de acumulación detectado en las últimas 14 sesiones.', time:'hace 2 min',  unread:true },
  { icon:'📈', title:'TSLA alcanzó el precio objetivo',  desc:'Tesla superó tu objetivo de seguimiento de $175,00.',                             time:'hace 18 min', unread:true },
  { icon:'📰', title:'Publicadas las Actas de la Fed',   desc:'Perspectivas macro clave — dirección de la política de tasas actualizada.',       time:'hace 1 hr',   unread:true },
  { icon:'✅', title:'Orden ejecutada: AAPL ×28',        desc:'Orden de compra ejecutada a $145,93 por acción.',                                  time:'hace 3 hrs',  unread:false },
  { icon:'📊', title:'Informe Semanal de Cartera',       desc:'Tu cartera ganó un +2,1% esta semana. Ver informe completo.',                      time:'hace 1 día',  unread:false },
];

// ─── Article body text ────────────────────────────────────────
const ARTICLE_BODIES = {
  'IA Y TECNOLOGÍA': `La ola de IA generativa ya no está confinada a las aplicaciones de consumo. El capital institucional ha comenzado a fluir hacia apuestas de infraestructura — fabricantes de GPU, REITs de centros de datos y proveedores de nube a gran escala están registrando entradas récord. Nuestro análisis de presentaciones SEC 13F revela un aumento interanual del 34% en posiciones institucionales en valores vinculados a la IA.\n\nLas mesas de trading están desplegando LLMs para análisis de resultados en tiempo real, puntuación de sentimiento y procesamiento de datos alternativos. Los adoptantes tempranos reportan mejoras del 15–20% en la calidad de las señales. El riesgo clave sigue siendo las alucinaciones de los modelos en contextos financieros.\n\nDe cara al futuro, esperamos que la infraestructura de los mercados de capitales sea la próxima ola — los sistemas de prime brokerage, la automatización del cumplimiento normativo y los informes regulatorios son terreno fértil para la transformación con IA.`,
  'MACRO': `Nuestro modelo de la Fed incorpora 47 inputs macroeconómicos y asigna pesos de probabilidad a tres escenarios para 2024. Escenario A (caso base, 58% de probabilidad): dos recortes de 25 pb a partir del Q3. Escenario B (restrictivo, 28%): sin recortes hasta el Q4 o 2025, impulsado por un PCE subyacente persistentemente por encima del 3%. Escenario C (expansivo, 14%): recortes de emergencia motivados por un deterioro del mercado laboral.\n\nEn renta fija mantenemos una modesta sobreponderación de duración con enfoque de barra — letras a corto plazo para liquidez, exposición a largo plazo para apreciación de capital. La renta variable presenta la configuración más asimétrica: un aterrizaje suave impulsa la expansión de múltiplos, mientras que un aterrizaje forzoso comprime los múltiplos tecnológicos pero abre puntos de entrada en cíclicas.\n\nElementos clave a vigilar: datos JOLTS, inflación subyacente y comunicación de la Fed en la rueda de prensa del 20 de marzo.`,
  'SECTORIAL': `El vaciamiento global de inventarios de semiconductores está aproximadamente un 70% completado a fecha del Q1 2024. Los plazos de entrega se han normalizado en la mayoría de categorías lógicas, y los precios spot de DRAM han girado al alza por primera vez desde el Q2 de 2022. Nuestro análisis de la cadena de suministro sugiere un ciclo alcista de 12–18 meses por delante, impulsado por la demanda de aceleradores IA y la reactivación del ciclo de reemplazo de smartphones.\n\nGanadores: TSMC (poder de fijación de precios por capacidad), ASML (monopolio en EUV), fabricantes de memoria. Rezagados: fundiciones heredadas y empresas de semiconductores analógicos que enfrentan sobreoferta en nodos maduros.\n\nNuestro filtro cuantitativo identifica NVDA, AMD y AVGO como las apuestas de mayor convicción, con perfiles de rentabilidad ajustada al riesgo superiores al índice SOX en general.`,
  'CUANTITATIVO': `Nuestro modelo multifactor registró un alfa del 18,4% en el Q4 de 2023, impulsado principalmente por momento (6,2%), calidad (4,8%) y nuestra puntuación propietaria de adopción de IA (5,1%). La concentración en nombres de valor y la reversión a la media en sectores sensibles a tasas restaron un 2,3%.\n\nPara el Q1 de 2024, estamos aumentando el peso del factor de adopción de IA (del 15% al 22% del peso del modelo) en función de su coeficiente de información en mejora, y reduciendo la exposición al factor de rendimiento por dividendo dado el entorno de tasas.\n\nControles de riesgo: peso máximo por nombre del 4%, límite de concentración sectorial del 25% y monitoreo diario de VaR al 95% de confianza.`,
  'ESG': `La integración ESG basada en factores supera a los filtros simples de exclusión tanto en rentabilidades ajustadas al riesgo como en la mejora de métricas ESG. Nuestro marco asigna puntuaciones propietarias en tres dimensiones: eficiencia medioambiental, capital social y calidad de gobierno corporativo.\n\nLos resultados del backtesting muestran que una estrategia long-short de momento ESG genera un alfa anualizado del 4,2% frente al Russell 1000, con un drawdown máximo 180 pb inferior al benchmark. La conclusión clave: el momento de mejora ESG — empresas que pasan de puntuaciones bajas a altas — genera un alfa más sólido que simplemente mantener nombres con puntuaciones ESG elevadas.\n\nRecomendamos integrar nuestra señal de momento ESG con un peso del 10% en estrategias multifactor.`,
};

// ─── Bind: Chart timeframe tabs ────────────────────────────────
function bindChartTabs() {
  document.querySelectorAll('[data-chart]').forEach(group => {
    const chartId = group.dataset.chart;
    const tfMap = TF_MAP[chartId];
    if (!tfMap) return;
    group.querySelectorAll('.chart-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        group.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tf = tab.textContent.trim();
        const entry = tfMap[tf];
        if (!entry) return;
        const chart = chartRegistry[chartId];
        if (!chart) return;
        chart.data.labels = entry.labels;
        chart.data.datasets[0].data = entry.data;
        chart.update('active');
      });
    });
  });
}

// ─── Bind: Ticker bar items ───────────────────────────────────
function bindTickerItems() {
  document.querySelectorAll('.ticker-item[data-symbol]').forEach(item => {
    item.addEventListener('click', () => showStockModal(item.dataset.symbol));
  });
}

// ─── Bind: Watchlist stock modal ──────────────────────────────
function bindWatchlistItems() {
  document.querySelectorAll('.watchlist-item[data-symbol]').forEach(item => {
    item.addEventListener('click', () => showStockModal(item.dataset.symbol));
  });
}

function showStockModal(symbol) {
  const detail = STOCK_DETAILS[symbol];
  const basic  = ALL_STOCKS.find(s => s.symbol === symbol);
  const d = detail || basic;
  if (!d) return;
  const pos = d.change >= 0;
  const inWL = DATA.watchlist.some(w => w.symbol === symbol);
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
<div class="modal-panel stock-modal">
  <div class="modal-header">
    <div>
      <div style="font-size:24px;font-weight:800;letter-spacing:-0.5px">${symbol}</div>
      <div style="font-size:13px;color:var(--text-3);margin-top:2px">${d.name}</div>
    </div>
    <button class="modal-close">✕</button>
  </div>
  <div style="display:flex;align-items:baseline;gap:14px;margin:20px 0">
    <div style="font-size:34px;font-weight:800">$${d.price.toFixed(2)}</div>
    <div class="${pos?'positive':'negative'}" style="font-size:15px;font-weight:600">${pos?'+':''}${d.change.toFixed(2)} (${pos?'+':''}${d.changePct.toFixed(2)}%)</div>
  </div>
  ${detail ? `<div class="modal-stats-row">
    <div class="modal-stat"><div class="modal-stat-label">Máx. del Día</div><div class="modal-stat-value">$${detail.high.toFixed(2)}</div></div>
    <div class="modal-stat"><div class="modal-stat-label">Mín. del Día</div><div class="modal-stat-value">$${detail.low.toFixed(2)}</div></div>
    <div class="modal-stat"><div class="modal-stat-label">Volumen</div><div class="modal-stat-value">${detail.vol}</div></div>
    <div class="modal-stat"><div class="modal-stat-label">Cap. Merc.</div><div class="modal-stat-value">${detail.cap}</div></div>
  </div>
  <div class="modal-section-label">Últimas Noticias</div>
  <div class="modal-news-list">
    ${detail.news.map(n=>`
    <div class="modal-news-item">
      <div class="modal-news-headline">${n.headline}</div>
      <div class="modal-news-time">${n.time}</div>
    </div>`).join('')}
  </div>` : ''}
  <div style="display:flex;gap:10px;margin-top:20px">
    <button class="btn btn-outline stock-wl-btn" style="flex:1">${inWL ? '★ En Seguimiento' : '☆ Añadir a Seguimiento'}</button>
    <button class="btn btn-primary stock-alert-btn" style="flex:1">🔔 Establecer Alerta</button>
  </div>
</div>`;
  document.body.appendChild(modal);
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

  const wlBtn = modal.querySelector('.stock-wl-btn');
  wlBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleWatchlist(symbol, d);
    const nowIn = DATA.watchlist.some(w => w.symbol === symbol);
    wlBtn.textContent = nowIn ? '★ En Seguimiento' : '☆ Añadir a Seguimiento';
  });
  modal.querySelector('.stock-alert-btn').addEventListener('click', e => {
    e.stopPropagation();
    showSetAlertModal(symbol, d.price);
  });
}

// ─── Bind: Notifications dropdown ────────────────────────────
function bindNotifications() {
  const btn = document.querySelector('.topbar-icon-btn[title="Notificaciones"]');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const existing = document.getElementById('notif-panel');
    if (existing) { existing.remove(); return; }
    const panel = document.createElement('div');
    panel.id = 'notif-panel';
    panel.className = 'notif-panel';
    panel.innerHTML = `
<div class="notif-header">
  <span style="font-size:14px;font-weight:700">Notificaciones</span>
  <span class="notif-mark-all">Marcar todo como leído</span>
</div>
${NOTIFICATIONS.map(n=>`
<div class="notif-item${n.unread?' unread':''}">
  <div class="notif-icon-wrap">${n.icon}</div>
  <div class="notif-body">
    <div class="notif-item-title">${n.title}</div>
    <div class="notif-item-desc">${n.desc}</div>
    <div class="notif-item-time">${n.time}</div>
  </div>
  ${n.unread?'<div class="notif-unread-dot"></div>':''}
</div>`).join('')}`;
    const rect = btn.getBoundingClientRect();
    panel.style.top   = (rect.bottom + 8) + 'px';
    panel.style.right = (window.innerWidth - rect.right) + 'px';
    document.body.appendChild(panel);
    panel.querySelector('.notif-mark-all').addEventListener('click', () => {
      panel.querySelectorAll('.notif-item').forEach(i => i.classList.remove('unread'));
      panel.querySelectorAll('.notif-unread-dot').forEach(d => d.remove());
    });
    setTimeout(() => {
      const close = () => { const p = document.getElementById('notif-panel'); if (p) p.remove(); document.removeEventListener('click', close); };
      document.addEventListener('click', close);
    }, 0);
  });
}

// ─── Bind: Research filters ────────────────────────────────────
function bindResearchFilters() {
  const filters = document.querySelectorAll('.research-filter');
  if (!filters.length) return;
  const items = document.querySelectorAll('.research-item[data-filter-cat]');
  filters.forEach(f => {
    f.addEventListener('click', () => {
      filters.forEach(x => x.classList.remove('active'));
      f.classList.add('active');
      const cat = f.dataset.cat;
      items.forEach(item => {
        item.style.display = (cat === 'Todo' || item.dataset.filterCat === cat) ? '' : 'none';
      });
    });
  });
}

// ─── Bind: Research read more ─────────────────────────────────
function bindResearchReadMore() {
  document.querySelectorAll('.research-read-more, .research-title-link').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      showArticleModal(DATA.research[parseInt(btn.dataset.idx)]);
    });
  });
}

function showArticleModal(r) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  const body = ARTICLE_BODIES[r.cat] || r.excerpt;
  modal.innerHTML = `
<div class="modal-panel article-modal">
  <div class="modal-header" style="align-items:flex-start">
    <div style="flex:1">
      <div class="research-category" style="margin-bottom:8px">${r.cat}</div>
      <div class="article-title">${r.title}</div>
      <div class="article-meta">${r.date} &nbsp;·&nbsp; ${r.readTime} de lectura</div>
    </div>
    <button class="modal-close" style="margin-left:20px;flex-shrink:0">✕</button>
  </div>
  <div class="article-body">
    ${body.split('\n').filter(p=>p.trim()).map(p=>`<p>${p}</p>`).join('')}
  </div>
</div>`;
  document.body.appendChild(modal);
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

// ─── Bind: Account panel navigation ──────────────────────────
function bindAccountNav() {
  document.querySelectorAll('.settings-nav-item[data-panel]').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.settings-nav-item[data-panel]').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const panel = item.dataset.panel;
      document.querySelectorAll('.account-panel').forEach(p => {
        p.style.display = p.dataset.panel === panel ? '' : 'none';
      });
      bindToggleSwitches();
    });
  });
}

// ─── News article bodies ──────────────────────────────────────
const NEWS_BODIES = [
  `Las ventas minoristas cayeron un 0,8% en enero, el mayor descenso mensual desde marzo de 2023, a medida que los consumidores recortaron el gasto discrecional ante la inflación persistente y los elevados costos de financiamiento. Las acciones de consumo discrecional lideraron la caída, con los grandes minoristas bajando entre un 2 y un 4% en la sesión.\n\nLos analistas de los principales bancos revisaron a la baja las estimaciones del PIB del Q1, con el modelo GDPNow de la Fed de Atlanta cayendo al 1,4% desde el 2,1%. La debilidad fue generalizada — ropa, muebles y electrónica registraron todos descensos.\n\nEl lado positivo: las ventas de alimentos y bebidas se mantuvieron estables, lo que sugiere que la desaceleración se concentra en artículos discrecionales de alto valor y no en un colapso generalizado del consumo.`,

  `Una empresa líder de semiconductores publicó resultados del Q4 que superaron las estimaciones de consenso en un 34%, impulsados por una demanda explosiva de chips aceleradores de IA. Los ingresos crecieron un 122% interanual, y la empresa elevó su guía prospectiva muy por encima de las expectativas del mercado.\n\nLas acciones alcanzaron un máximo histórico en el mercado extrabursátil, añadiendo más de 200.000 millones de dólares a la capitalización bursátil de la empresa en una sola sesión — una de las mayores ganancias en un solo día de la historia del mercado de valores.\n\nEl informe desencadenó compras generalizadas en la cadena de suministro de IA, con nombres relacionados en sistemas de refrigeración, gestión de energía y redes ópticas registrando ganancias significativas.`,

  `La muy esperada OPV de una importante empresa fintech no cumplió las expectativas, ya que las acciones abrieron por debajo de su precio de oferta y continuaron cayendo durante toda la primera sesión de cotización. La empresa había fijado su precio en el extremo inferior de su rango tras un difícil roadshow.\n\nLos analistas señalaron una valoración exigente en relación con los plazos de rentabilidad, combinada con condiciones macro adversas para los valores de crecimiento. A pesar del débil debut, los inversores institucionales a largo plazo expresaron interés a precios más bajos, lo que sugiere un suelo potencial si la empresa puede demostrar un camino hacia la rentabilidad.`,

  `Las acciones de vehículos eléctricos se dispararon entre un 8 y un 15% después de que la administración anunciara un paquete de subsidios de 4.000 millones de dólares dirigido a fabricantes de vehículos eléctricos e infraestructura de carga. El paquete incluye reembolsos directos al consumidor de hasta 7.500 dólares e incentivos de fabricación para la producción nacional.\n\nLa medida representa el mayor apoyo gubernamental al sector de vehículos eléctricos desde la Ley de Reducción de la Inflación. Los analistas revisaron inmediatamente al alza los objetivos de precio en todo el sector. Los fabricantes de baterías y los proveedores de materias primas también subieron por simpatía.\n\nLos subsidios están estructurados para favorecer la fabricación nacional — un factor positivo para los productores con base en EE.UU. y un obstáculo para los competidores extranjeros.`,

  `Los mercados de renta fija enviaron una señal de advertencia cuando el rendimiento del bono del Tesoro a 10 años volvió a superar el 4,6%, su nivel más alto en seis semanas, tras un dato del ISM de servicios mejor de lo esperado. El movimiento desencadenó una rotación fuera de las acciones sensibles a tasas y hacia energía y valores financieros.\n\nLos futuros sobre fondos federales ahora descuentan solo 1,2 recortes de tasas para 2024, frente a los 1,8 de hace una semana. Varios funcionarios de la Fed han subrayado la necesidad de "más evidencia" de desinflación antes de comenzar el ciclo de relajación.\n\nLas mesas de gestión de riesgos están advirtiendo sobre la posibilidad de un escenario de "tasas altas por más tiempo" en el que la Fed mantenga las tasas por encima del 5% hasta bien entrado el Q3, lo que ejercería presión adicional sobre las estrategias de crecimiento y momentum.`,

  `La escasez global de chips, aunque significativamente mejorada desde su pico de 2021–2022, sigue afectando a los semiconductores de nodos heredados utilizados en automoción, industria y electrónica de consumo. Los plazos de entrega para microcontroladores de nodos maduros siguen siendo 20–40 semanas superiores a las normas históricas.\n\nA diferencia de la escasez de chips de IA impulsada por la demanda de nodos de proceso de última generación, esta escasez persistente refleja una subinversión estructural en capacidad de fabricación madura durante la década anterior. Los fabricantes de automóviles informan de restricciones de producción continuadas, mientras que los fabricantes de equipos industriales señalan retrasos en las entregas a clientes hasta el Q2.`,

  `Las actas de la reunión del FOMC de enero de la Reserva Federal revelaron que prácticamente todos los miembros del comité apoyaban mantener la tasa de política actual en su máximo de 23 años, y varios miembros expresaron su preocupación por el hecho de que los mercados hubieran descontado recortes de tasas "de manera demasiado agresiva".\n\nLas actas contenían un lenguaje notablemente restrictivo sobre la necesidad de ver un progreso "sostenido" en la inflación, particularmente en los servicios básicos excluyendo vivienda. Los mercados de bonos cayeron modestamente tras la publicación, con el rendimiento a 2 años tocando brevemente el 4,75%.`,

  `Las acciones biotecnológicas repuntaron con fuerza tras un resultado innovador en un ensayo de Fase 3 de una vacuna contra el cáncer basada en mRNA, que mostró una reducción del 44% en la recurrencia tumoral en comparación con el estándar de atención. Los datos superaron las expectativas de los analistas y desencadenaron mejoras de recomendación en todo el sector.\n\nLa plataforma de vacunas utiliza secuencias de mRNA personalizadas dirigidas a las mutaciones tumorales específicas del paciente — un posible cambio de paradigma en oncología. Los analistas estiman que el mercado potencial podría alcanzar entre 15.000 y 25.000 millones de dólares anuales si las aprobaciones regulatorias progresan según lo previsto.\n\nEl éxito ha revitalizado el interés en las aplicaciones terapéuticas del mRNA más allá de las enfermedades infecciosas.`,
];

// ─── Bind: News item click → article modal ────────────────────
function bindNewsItems() {
  document.querySelectorAll('.news-clickable[data-news-idx]').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.newsIdx);
      const n = DATA.news[idx];
      const body = NEWS_BODIES[idx] || n.headline;
      const modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.innerHTML = `
<div class="modal-panel article-modal">
  <div class="modal-header" style="align-items:flex-start">
    <div style="flex:1">
      <div class="research-category" style="margin-bottom:8px">NOTICIAS DE MERCADO</div>
      <div class="article-title">${n.headline}</div>
      <div class="article-meta">${n.time}</div>
    </div>
    <button class="modal-close" style="margin-left:20px;flex-shrink:0">✕</button>
  </div>
  <div class="article-body">
    ${body.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('')}
  </div>
</div>`;
      document.body.appendChild(modal);
      modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
      modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    });
  });
}

// ─── Bind: Theme toggle ───────────────────────────────────────
function bindThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    btn.innerHTML = isLight ? MOON_ICON : SUN_ICON;
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    document.querySelectorAll('.theme-option-btn').forEach(b => {
      b.classList.toggle('theme-active', b.dataset.themeVal === (isLight ? 'Light' : 'Dark'));
    });
  });
  // Sync appearance panel buttons if present
  document.querySelectorAll('.theme-option-btn').forEach(b => {
    const isLight = document.body.classList.contains('light');
    b.classList.toggle('theme-active', b.dataset.themeVal === (isLight ? 'Light' : 'Dark'));
    b.addEventListener('click', () => {
      const wantLight = b.dataset.themeVal === 'Light';
      const already = document.body.classList.contains('light');
      if (wantLight !== already) btn.click();
    });
  });
}

// ─── Bind: Add Position modal ─────────────────────────────────
function bindAddPosition() {
  const btn = document.getElementById('add-position-btn');
  if (!btn) return;
  btn.addEventListener('click', showAddPositionModal);
}

function showAddPositionModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
<div class="modal-panel" style="max-width:420px;padding:24px">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
    <div style="font-size:20px;font-weight:800">Añadir Posición</div>
    <button class="modal-close">✕</button>
  </div>
  <div class="form-group">
    <label class="form-label">Símbolo de Acción</label>
    <input class="form-input" id="pos-symbol" type="text" placeholder="ej. AAPL" style="text-transform:uppercase"/>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
    <div class="form-group">
      <label class="form-label">Acciones</label>
      <input class="form-input" id="pos-shares" type="number" placeholder="0" min="0.001" step="any"/>
    </div>
    <div class="form-group">
      <label class="form-label">Costo Prom. / Acción ($)</label>
      <input class="form-input" id="pos-cost" type="number" placeholder="0.00" min="0" step="any"/>
    </div>
  </div>
  <div id="pos-preview" style="background:var(--bg-3);border-radius:var(--radius-sm);padding:12px 16px;margin-bottom:20px;display:none">
    <div style="font-size:11px;color:var(--text-3);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px">Valor de Posición</div>
    <div id="pos-preview-value" style="font-size:22px;font-weight:800"></div>
  </div>
  <div style="display:flex;gap:10px">
    <button class="btn btn-outline" id="pos-cancel" style="flex:1">Cancelar</button>
    <button class="btn btn-primary" id="pos-submit" style="flex:1">Añadir Posición</button>
  </div>
</div>`;
  document.body.appendChild(modal);

  const symEl    = modal.querySelector('#pos-symbol');
  const sharesEl = modal.querySelector('#pos-shares');
  const costEl   = modal.querySelector('#pos-cost');
  const preview  = modal.querySelector('#pos-preview');
  const previewV = modal.querySelector('#pos-preview-value');

  symEl.addEventListener('input', () => { symEl.value = symEl.value.toUpperCase(); });

  function updatePreview() {
    const s = parseFloat(sharesEl.value), c = parseFloat(costEl.value);
    if (s > 0 && c > 0) { preview.style.display = ''; previewV.textContent = `$${(s * c).toFixed(2)}`; }
    else { preview.style.display = 'none'; }
  }
  sharesEl.addEventListener('input', updatePreview);
  costEl.addEventListener('input', updatePreview);

  const close = () => modal.remove();
  modal.querySelector('.modal-close').addEventListener('click', close);
  modal.querySelector('#pos-cancel').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  modal.querySelector('#pos-submit').addEventListener('click', () => {
    const symbol = symEl.value.trim().toUpperCase();
    const shares = parseFloat(sharesEl.value);
    const cost   = parseFloat(costEl.value);
    if (!symbol)       { symEl.focus(); return; }
    if (!(shares > 0)) { sharesEl.focus(); return; }
    if (!(cost > 0))   { costEl.focus(); return; }

    const current = parseFloat((cost * (1 + (Math.random() * 0.1 - 0.02))).toFixed(2));
    const value   = parseFloat((shares * current).toFixed(2));
    const gain    = parseFloat(((current - cost) * shares).toFixed(2));
    const gainPct = parseFloat(((current - cost) / cost * 100).toFixed(1));
    DATA.holdings.push({ symbol, name: symbol, shares, avgCost: cost, current, value, gain, gainPct });
    close();
    navigate('/portfolio');
  });
}

// ─── Bind: Forgot password ────────────────────────────────────
function bindAuthForgotPassword() {
  const link = document.querySelector('.forgot-password-link');
  if (!link) return;
  link.addEventListener('click', e => {
    e.preventDefault();
    const card = document.querySelector('.auth-card');
    if (!card) return;
    card.innerHTML = `
<div class="auth-title">Restablecer Contraseña</div>
<div class="auth-subtitle">Ingresa tu correo y te enviaremos un enlace de restablecimiento</div>
<div class="form-group" style="margin-top:8px">
  <label class="form-label">Dirección de Correo Electrónico</label>
  <input class="form-input" id="reset-email" type="email" placeholder="juan@ejemplo.com" autofocus/>
</div>
<button class="btn btn-primary" id="reset-submit" style="width:100%;padding:13px;margin-bottom:16px">Enviar Enlace de Restablecimiento</button>
<div style="text-align:center">
  <a href="#" id="back-to-login" style="font-size:13px;color:var(--accent)">← Volver al Inicio de Sesión</a>
</div>`;
    card.querySelector('#reset-submit').addEventListener('click', () => {
      const email = card.querySelector('#reset-email').value.trim();
      if (!email) { card.querySelector('#reset-email').focus(); return; }
      card.innerHTML = `
<div style="text-align:center;padding:16px 0">
  <div style="font-size:48px;margin-bottom:20px">📧</div>
  <div class="auth-title" style="margin-bottom:8px">Revisa tu bandeja de entrada</div>
  <div class="auth-subtitle">Te enviamos un enlace de restablecimiento a <strong>${email}</strong>. Sigue las instrucciones del correo para establecer una nueva contraseña.</div>
  <button class="btn btn-outline" id="back-login-btn" style="margin-top:28px;width:100%;padding:12px">Volver al Inicio de Sesión</button>
</div>`;
      card.querySelector('#back-login-btn').addEventListener('click', () => navigate('/login'));
    });
    card.querySelector('#back-to-login').addEventListener('click', e => { e.preventDefault(); navigate('/login'); });
  });
}

// ─── Bind: Avatar dropdown ───────────────────────────────────
function bindAvatarBtn() {
  const btn = document.getElementById('topbar-avatar');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const existing = document.getElementById('avatar-panel');
    if (existing) { existing.remove(); return; }

    const panel = document.createElement('div');
    panel.id = 'avatar-panel';
    panel.className = 'avatar-panel';
    panel.innerHTML = `
<div class="avatar-panel-top">
  <div class="avatar-panel-circle">J</div>
  <div class="avatar-panel-info">
    <div class="avatar-panel-username">jhernnog</div>
    <div class="avatar-panel-name">Jairo Hernandez</div>
    <div class="avatar-panel-email">jhernnog@myuax.com</div>
  </div>
</div>
<div class="avatar-panel-divider"></div>
<div class="avatar-panel-item" id="avatar-account">
  <span style="font-size:14px">◕</span> Configuración de Cuenta
</div>
<div class="avatar-panel-item" id="avatar-logout" style="color:var(--negative)">
  <span style="font-size:14px">⇦</span> Cerrar Sesión
</div>`;

    const rect = btn.getBoundingClientRect();
    panel.style.top   = (rect.bottom + 8) + 'px';
    panel.style.right = (window.innerWidth - rect.right) + 'px';
    document.body.appendChild(panel);

    panel.querySelector('#avatar-account').addEventListener('click', () => {
      panel.remove();
      navigate('/account');
    });
    panel.querySelector('#avatar-logout').addEventListener('click', () => {
      panel.remove();
      navigate('/');
    });

    setTimeout(() => {
      const close = () => {
        const p = document.getElementById('avatar-panel');
        if (p) p.remove();
        document.removeEventListener('click', close);
      };
      document.addEventListener('click', close);
    }, 0);
  });
}

// ─── Stock search data ────────────────────────────────────────
const ALL_STOCKS = [
  { symbol:'AAPL', name:'Apple Inc.',               price:145.93, change:-1.20, changePct:-0.81 },
  { symbol:'MSFT', name:'Microsoft Corp.',           price:336.05, change:+2.11, changePct:+0.63 },
  { symbol:'NVDA', name:'Nvidia Corp.',              price:181.74, change:+2.31, changePct:+1.29 },
  { symbol:'AMZN', name:'Amazon.com, Inc.',          price:186.34, change:+1.87, changePct:+1.02 },
  { symbol:'TSLA', name:'Tesla, Inc.',               price:177.90, change:+4.55, changePct:+2.62 },
  { symbol:'META', name:'Meta Platforms, Inc.',      price:471.22, change:-3.10, changePct:-0.65 },
  { symbol:'GOOG', name:'Alphabet Inc.',             price:173.54, change:+1.24, changePct:+0.72 },
  { symbol:'AMD',  name:'Advanced Micro Devices',    price:112.44, change:+1.88, changePct:+1.70 },
  { symbol:'NFLX', name:'Netflix, Inc.',             price:612.30, change:-4.50, changePct:-0.73 },
  { symbol:'JPM',  name:'JPMorgan Chase',            price:198.40, change:+2.10, changePct:+1.07 },
  { symbol:'V',    name:'Visa Inc.',                 price:275.60, change:+1.40, changePct:+0.51 },
  { symbol:'MA',   name:'Mastercard Inc.',           price:489.50, change:-6.10, changePct:-1.24 },
  { symbol:'KO',   name:'Coca-Cola Co.',             price:61.52,  change:-0.30, changePct:-0.48 },
  { symbol:'UPS',  name:'United Parcel Service',     price:148.20, change:+4.36, changePct:+2.99 },
  { symbol:'BMW',  name:'Bayerische Motoren Werke',  price:94.40,  change:+3.63, changePct:+3.98 },
  { symbol:'UBER', name:'Uber Technologies',         price:80.15,  change:+2.90, changePct:+3.75 },
  { symbol:'BABA', name:'Alibaba Group',             price:73.80,  change:-1.20, changePct:-1.60 },
  { symbol:'PYPL', name:'PayPal Holdings',           price:62.40,  change:+0.85, changePct:+1.38 },
  { symbol:'DIS',  name:'Walt Disney Co.',           price:111.30, change:-0.70, changePct:-0.63 },
  { symbol:'BA',   name:'Boeing Co.',                price:178.50, change:+3.20, changePct:+1.83 },
  { symbol:'GS',   name:'Goldman Sachs Group',       price:489.20, change:+5.60, changePct:+1.16 },
  { symbol:'COIN', name:'Coinbase Global',           price:214.50, change:+8.20, changePct:+3.97 },
  { symbol:'PLTR', name:'Palantir Technologies',     price:23.80,  change:+0.90, changePct:+3.93 },
  { symbol:'SHOP', name:'Shopify Inc.',              price:73.40,  change:+1.10, changePct:+1.52 },
  { symbol:'SNOW', name:'Snowflake Inc.',            price:152.30, change:-2.40, changePct:-1.55 },
];

// ─── Watchlist helpers ────────────────────────────────────────
function toggleWatchlist(symbol, data) {
  const idx = DATA.watchlist.findIndex(w => w.symbol === symbol);
  if (idx >= 0) {
    DATA.watchlist.splice(idx, 1);
    showToast(`${symbol} eliminado del seguimiento`);
  } else {
    DATA.watchlist.push({ symbol, name: data.name, change: data.change, changePct: data.changePct });
    showToast(`${symbol} añadido al seguimiento`);
  }
}

function showToast(msg) {
  const existing = document.getElementById('quantai-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'quantai-toast';
  toast.className = 'quantai-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-in'));
  setTimeout(() => {
    toast.classList.remove('toast-in');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function showSetAlertModal(symbol, currentPrice) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
<div class="modal-panel" style="max-width:400px;padding:24px">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px">
    <div style="font-size:20px;font-weight:800">Establecer Alerta — ${symbol}</div>
    <button class="modal-close">✕</button>
  </div>
  <div class="form-group">
    <label class="form-label">Tipo de Alerta</label>
    <select class="form-input" id="alert-type">
      <option value="above">Precio sube por encima de</option>
      <option value="below">Precio cae por debajo de</option>
      <option value="pct_up">Sube un % (desde actual)</option>
      <option value="pct_down">Baja un % (desde actual)</option>
    </select>
  </div>
  <div class="form-group">
    <label class="form-label" id="alert-val-label">Precio Objetivo ($)</label>
    <input class="form-input" id="alert-value" type="number" placeholder="${currentPrice ? currentPrice.toFixed(2) : '0.00'}" min="0" step="0.01"/>
  </div>
  <div style="background:var(--bg-3);border-radius:var(--radius-sm);padding:12px 16px;margin-bottom:20px;font-size:12px;color:var(--text-3)">
    Precio actual: <strong style="color:var(--text-1)">$${currentPrice ? currentPrice.toFixed(2) : '—'}</strong>
  </div>
  <div style="display:flex;gap:10px">
    <button class="btn btn-outline" id="alert-cancel" style="flex:1">Cancelar</button>
    <button class="btn btn-primary" id="alert-submit" style="flex:1">Crear Alerta</button>
  </div>
</div>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.querySelector('.modal-close').addEventListener('click', close);
  modal.querySelector('#alert-cancel').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });

  const typeEl  = modal.querySelector('#alert-type');
  const labelEl = modal.querySelector('#alert-val-label');
  typeEl.addEventListener('change', () => {
    labelEl.textContent = typeEl.value.startsWith('pct') ? 'Porcentaje (%)' : 'Precio Objetivo ($)';
  });

  modal.querySelector('#alert-submit').addEventListener('click', () => {
    const val = parseFloat(modal.querySelector('#alert-value').value);
    if (!(val > 0)) { modal.querySelector('#alert-value').focus(); return; }
    const labels = { above:'por encima de $', below:'por debajo de $', pct_up:'+', pct_down:'-' };
    const suffix  = typeEl.value.startsWith('pct') ? '%' : '';
    close();
    showToast(`Alerta creada: ${symbol} ${labels[typeEl.value]}${val}${suffix}`);
  });
}

// ─── Bind: Company search ─────────────────────────────────────
function bindSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim();
    removeSearchDropdown();
    if (q.length < 1) return;
    showSearchDropdown(q, input);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { input.value = ''; removeSearchDropdown(); }
  });
  setTimeout(() => {
    document.addEventListener('click', e => {
      if (!e.target.closest('.topbar-search') && !e.target.closest('#search-dropdown')) {
        removeSearchDropdown();
      }
    });
  }, 0);
}

function removeSearchDropdown() {
  const d = document.getElementById('search-dropdown');
  if (d) d.remove();
}

function showSearchDropdown(query, input) {
  removeSearchDropdown();
  const q = query.toLowerCase();
  const results = ALL_STOCKS.filter(s =>
    s.symbol.toLowerCase().startsWith(q) || s.name.toLowerCase().includes(q)
  ).slice(0, 7);
  if (!results.length) return;

  const dropdown = document.createElement('div');
  dropdown.id = 'search-dropdown';
  dropdown.className = 'search-dropdown';
  dropdown.innerHTML = results.map(s => {
    const pos  = s.change >= 0;
    const inWL = DATA.watchlist.some(w => w.symbol === s.symbol);
    return `
<div class="search-result-item" data-symbol="${s.symbol}">
  <div class="search-result-logo">${s.symbol.slice(0,2)}</div>
  <div class="search-result-info">
    <div class="search-result-symbol">${s.symbol}</div>
    <div class="search-result-name">${s.name}</div>
  </div>
  <div class="search-result-price">
    <div style="font-weight:700">$${s.price.toFixed(2)}</div>
    <div class="${pos?'positive':'negative'}" style="font-size:11px">${pos?'+':''}${s.changePct.toFixed(2)}%</div>
  </div>
  <div class="search-result-actions">
    <button class="search-action-btn search-wl-btn${inWL?' wl-active':''}" data-symbol="${s.symbol}" title="${inWL?'Quitar del seguimiento':'Añadir a seguimiento'}">${inWL?'★':'☆'}</button>
    <button class="search-action-btn search-alert-btn" data-symbol="${s.symbol}" data-price="${s.price}" title="Establecer alerta de precio">🔔</button>
  </div>
</div>`;
  }).join('');

  const wrap = input.closest('.topbar-search');
  const rect = wrap.getBoundingClientRect();
  dropdown.style.top   = (rect.bottom + 4) + 'px';
  dropdown.style.left  = rect.left + 'px';
  dropdown.style.width = rect.width + 'px';
  document.body.appendChild(dropdown);

  dropdown.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.closest('.search-result-actions')) return;
      showStockModal(item.dataset.symbol);
      removeSearchDropdown();
      input.value = '';
    });
  });
  dropdown.querySelectorAll('.search-wl-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const sym   = btn.dataset.symbol;
      const stock = ALL_STOCKS.find(s => s.symbol === sym);
      if (!stock) return;
      toggleWatchlist(sym, stock);
      const nowIn = DATA.watchlist.some(w => w.symbol === sym);
      btn.textContent = nowIn ? '★' : '☆';
      btn.classList.toggle('wl-active', nowIn);
      btn.title = nowIn ? 'Quitar del seguimiento' : 'Añadir a seguimiento';
    });
  });
  dropdown.querySelectorAll('.search-alert-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      showSetAlertModal(btn.dataset.symbol, parseFloat(btn.dataset.price));
    });
  });
}

// ─── Settings drawer ──────────────────────────────────────────
const ACCENT_PRESETS = [
  { name:'Cyan',   value:'#00E5FF', dim:'rgba(0,229,255,0.15)',   glow:'rgba(0,229,255,0.35)',   border:'rgba(0,229,255,0.3)'   },
  { name:'Purple', value:'#A78BFA', dim:'rgba(167,139,250,0.15)', glow:'rgba(167,139,250,0.35)', border:'rgba(167,139,250,0.3)' },
  { name:'Green',  value:'#00E5A0', dim:'rgba(0,229,160,0.15)',   glow:'rgba(0,229,160,0.35)',   border:'rgba(0,229,160,0.3)'   },
  { name:'Orange', value:'#FF8C00', dim:'rgba(255,140,0,0.15)',   glow:'rgba(255,140,0,0.35)',   border:'rgba(255,140,0,0.3)'   },
  { name:'Pink',   value:'#FF4ECD', dim:'rgba(255,78,205,0.15)',  glow:'rgba(255,78,205,0.35)',  border:'rgba(255,78,205,0.3)'  },
  { name:'Blue',   value:'#3B82F6', dim:'rgba(59,130,246,0.15)',  glow:'rgba(59,130,246,0.35)',  border:'rgba(59,130,246,0.3)'  },
];

function applyAccentColor(preset) {
  const root = document.documentElement;
  root.style.setProperty('--accent',        preset.value);
  root.style.setProperty('--accent-dim',    preset.dim);
  root.style.setProperty('--accent-glow',   preset.glow);
  root.style.setProperty('--border-accent', preset.border);
  localStorage.setItem('accent', preset.name);
}

const CB_FILTERS = {
  Protanopia:   `<svg id="cb-svg" style="position:absolute;width:0;height:0"><defs><filter id="cb-filter"><feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/></filter></defs></svg>`,
  Deuteranopia: `<svg id="cb-svg" style="position:absolute;width:0;height:0"><defs><filter id="cb-filter"><feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/></filter></defs></svg>`,
  Tritanopia:   `<svg id="cb-svg" style="position:absolute;width:0;height:0"><defs><filter id="cb-filter"><feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/></filter></defs></svg>`,
};

function applyColorblindFilter(type) {
  const oldSvg = document.getElementById('cb-svg');
  if (oldSvg) oldSvg.remove();
  document.documentElement.style.filter = '';
  if (type === 'None') { localStorage.removeItem('cbFilter'); return; }
  document.body.insertAdjacentHTML('afterbegin', CB_FILTERS[type]);
  document.documentElement.style.filter = 'url(#cb-filter)';
  localStorage.setItem('cbFilter', type);
}

function bindSettingsBtn() {
  const btn = document.getElementById('settings-btn');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const existing = document.getElementById('settings-drawer');
    if (existing) { existing.classList.remove('drawer-open'); setTimeout(() => existing.remove(), 280); return; }
    showSettingsDrawer();
  });
}

function showSettingsDrawer() {
  const currentAccent = localStorage.getItem('accent') || 'Cyan';
  const currentSize   = localStorage.getItem('uiSize')  || 'M';
  const currentCB     = localStorage.getItem('cbFilter') || 'None';
  const compact   = localStorage.getItem('compact')      === 'true';
  const reduceMo  = localStorage.getItem('reduceMotion') === 'true';
  const hc        = localStorage.getItem('highContrast') === 'true';

  const drawer = document.createElement('div');
  drawer.id = 'settings-drawer';
  drawer.className = 'settings-drawer';
  drawer.innerHTML = `
<div class="settings-drawer-header">
  <div style="font-size:16px;font-weight:800">Configuración</div>
  <button class="modal-close" id="settings-close">✕</button>
</div>
<div class="settings-drawer-body">

  <div class="drawer-section-title">Color de Acento</div>
  <div class="accent-swatches">
    ${ACCENT_PRESETS.map(p => `<div class="accent-swatch${p.name===currentAccent?' swatch-active':''}" data-accent="${p.name}" title="${p.name}" style="background:${p.value}"></div>`).join('')}
  </div>

  <div class="drawer-section-title" style="margin-top:20px">Tamaño de UI</div>
  <div class="size-btns">
    ${['S','M','L'].map(s=>`<button class="size-btn${s===currentSize?' size-active':''}" data-size="${s}">${s}</button>`).join('')}
  </div>

  <div class="drawer-section-title" style="margin-top:20px">Filtro para Daltonismo</div>
  <div class="cb-btns">
    ${[{v:'None',l:'Ninguno'},{v:'Protanopia',l:'Protanopia'},{v:'Deuteranopia',l:'Deuteranopía'},{v:'Tritanopia',l:'Tritanopía'}].map(t=>`<button class="cb-btn${t.v===currentCB?' cb-active':''}" data-cb="${t.v}">${t.l}</button>`).join('')}
  </div>

  <div class="drawer-section-title" style="margin-top:20px">Pantalla</div>
  <div class="drawer-toggle-row">
    <div><div class="settings-row-label">Modo Compacto</div><div class="settings-row-desc">Reducir relleno para más densidad de datos</div></div>
    <div class="toggle-switch${compact?' on':''}" id="compact-toggle"><div class="toggle-knob"></div></div>
  </div>
  <div class="drawer-toggle-row">
    <div><div class="settings-row-label">Reducir Movimiento</div><div class="settings-row-desc">Deshabilitar animaciones y transiciones</div></div>
    <div class="toggle-switch${reduceMo?' on':''}" id="motion-toggle"><div class="toggle-knob"></div></div>
  </div>
  <div class="drawer-toggle-row">
    <div><div class="settings-row-label">Alto Contraste</div><div class="settings-row-desc">Aumentar contraste de bordes y texto</div></div>
    <div class="toggle-switch${hc?' on':''}" id="contrast-toggle"><div class="toggle-knob"></div></div>
  </div>

  <div class="drawer-section-title" style="margin-top:20px">Notificaciones</div>
  <div class="drawer-toggle-row">
    <div><div class="settings-row-label">Alertas de Señales IA</div><div class="settings-row-desc">Señales de trading de alta confianza</div></div>
    <div class="toggle-switch on" data-notif="ai"><div class="toggle-knob"></div></div>
  </div>
  <div class="drawer-toggle-row">
    <div><div class="settings-row-label">Alertas de Precio</div><div class="settings-row-desc">Notificaciones de precio objetivo de seguimiento</div></div>
    <div class="toggle-switch on" data-notif="price"><div class="toggle-knob"></div></div>
  </div>
  <div class="drawer-toggle-row">
    <div><div class="settings-row-label">Resumen de Noticias</div><div class="settings-row-desc">Resumen diario matutino del mercado</div></div>
    <div class="toggle-switch" data-notif="news"><div class="toggle-knob"></div></div>
  </div>

  <div class="drawer-divider"></div>

  <button class="btn btn-outline" style="width:100%;margin-bottom:10px" id="goto-account">⚙ Configuración de Cuenta</button>
  <button class="btn" id="drawer-logout" style="width:100%;color:var(--negative);border:1px solid var(--negative);border-radius:var(--radius-md);padding:10px;font-size:14px">⇦ Cerrar Sesión</button>

</div>`;

  document.body.appendChild(drawer);
  requestAnimationFrame(() => drawer.classList.add('drawer-open'));

  const close = () => {
    drawer.classList.remove('drawer-open');
    setTimeout(() => drawer.remove(), 280);
  };

  drawer.querySelector('#settings-close').addEventListener('click', close);
  drawer.querySelector('#goto-account').addEventListener('click', () => { close(); navigate('/account'); });
  drawer.querySelector('#drawer-logout').addEventListener('click', () => { close(); navigate('/'); });

  drawer.querySelectorAll('.accent-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      drawer.querySelectorAll('.accent-swatch').forEach(s => s.classList.remove('swatch-active'));
      sw.classList.add('swatch-active');
      applyAccentColor(ACCENT_PRESETS.find(p => p.name === sw.dataset.accent));
    });
  });

  drawer.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      drawer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('size-active'));
      btn.classList.add('size-active');
      const size = btn.dataset.size;
      document.body.classList.remove('ui-sm','ui-lg');
      if (size === 'S') { document.body.classList.add('ui-sm'); localStorage.setItem('uiSize','S'); }
      else if (size === 'L') { document.body.classList.add('ui-lg'); localStorage.setItem('uiSize','L'); }
      else { localStorage.removeItem('uiSize'); }
    });
  });

  drawer.querySelectorAll('.cb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      drawer.querySelectorAll('.cb-btn').forEach(b => b.classList.remove('cb-active'));
      btn.classList.add('cb-active');
      applyColorblindFilter(btn.dataset.cb);
    });
  });

  const compactToggle = drawer.querySelector('#compact-toggle');
  compactToggle.addEventListener('click', () => {
    compactToggle.classList.toggle('on');
    const on = compactToggle.classList.contains('on');
    document.body.classList.toggle('compact', on);
    localStorage.setItem('compact', on);
  });

  const motionToggle = drawer.querySelector('#motion-toggle');
  motionToggle.addEventListener('click', () => {
    motionToggle.classList.toggle('on');
    const on = motionToggle.classList.contains('on');
    document.body.classList.toggle('reduce-motion', on);
    localStorage.setItem('reduceMotion', on);
  });

  const contrastToggle = drawer.querySelector('#contrast-toggle');
  contrastToggle.addEventListener('click', () => {
    contrastToggle.classList.toggle('on');
    const on = contrastToggle.classList.contains('on');
    document.body.classList.toggle('high-contrast', on);
    localStorage.setItem('highContrast', on);
  });

  drawer.querySelectorAll('.toggle-switch[data-notif]').forEach(sw => {
    sw.addEventListener('click', () => sw.classList.toggle('on'));
  });

  setTimeout(() => {
    const handleOutside = e => {
      if (!e.target.closest('#settings-drawer') && !e.target.closest('#settings-btn')) {
        close();
        document.removeEventListener('click', handleOutside);
      }
    };
    document.addEventListener('click', handleOutside);
  }, 0);
}

