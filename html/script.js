// Icons (inline SVG paths from lucide)
const icons = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19 7 22l3-5"/><path d="M14.5 5.5 4 16v4h4L18.5 9.5"/><path d="m14.5 5.5 3-3a2.12 2.12 0 1 1 3 3l-3 3"/><path d="M12 8 4 16"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/></svg>',
};

const services = [
  { icon: 'code', title: 'Criação de Sites', desc: 'Sites institucionais e corporativos com performance, SEO e design premium para construir autoridade.' },
  { icon: 'refresh', title: 'Redesign & Atualização', desc: 'Modernizamos seu site atual com nova identidade, novas tecnologias e foco em conversão.' },
  { icon: 'layout', title: 'Landing Pages', desc: 'Páginas de alta conversão para campanhas, tráfego pago e captação de leads qualificados.' },
  { icon: 'rocket', title: 'Lançamentos Digitais', desc: 'Estrutura completa para lançar infoprodutos: páginas, automações e ambiente de vendas.' },
];

const benefits = [
  { icon: 'zap', title: 'Performance Real', desc: 'Sites rápidos com Core Web Vitals otimizados e nota máxima no Google.' },
  { icon: 'shield', title: 'Tecnologia de Ponta', desc: 'Stack moderno, código limpo e segurança em cada linha entregue.' },
  { icon: 'trending', title: 'Foco em Conversão', desc: 'Copy, design e UX pensados para transformar visitas em clientes.' },
  { icon: 'sparkles', title: 'Design Premium', desc: 'Visual sofisticado que comunica autoridade e diferencia sua marca.' },
];

const portfolio = [
  { img: 'assets/portfolio-1.jpg', tag: 'SaaS', title: 'Plataforma B2B', desc: 'Site institucional + dashboard' },
  { img: 'assets/portfolio-2.jpg', tag: 'E-commerce', title: 'Loja Premium', desc: 'Catálogo e checkout otimizado' },
  { img: 'assets/portfolio-3.jpg', tag: 'Lançamento', title: 'Produto Digital', desc: 'Landing + funil completo' },
];

const processSteps = [
  { icon: 'search', step: '01', title: 'Descoberta', desc: 'Entendemos seu negócio, objetivos, público e concorrência.' },
  { icon: 'pen', step: '02', title: 'Design & UX', desc: 'Criamos a identidade visual digital com foco em conversão.' },
  { icon: 'wrench', step: '03', title: 'Desenvolvimento', desc: 'Codificamos com performance, SEO e tecnologias modernas.' },
  { icon: 'rocket', step: '04', title: 'Lançamento', desc: 'Publicamos, otimizamos e acompanhamos os resultados.' },
];

const brands = ['Ateliê Rosinha Luna','Alexsandra Pereira Nutricionista','Marcelino Consultor','Ednalva Feitosa Advogada'];

function renderServices() {
  document.getElementById('services-grid').innerHTML = services.map(s => `
    <div class="card">
      <div class="card-icon">${icons[s.icon]}</div>
      <div class="card-title">${s.title}</div>
      <div class="card-desc">${s.desc}</div>
    </div>
  `).join('');
}

function renderBenefits() {
  document.getElementById('benefits-grid').innerHTML = benefits.map(b => `
    <div class="card">
      <div class="benefit-icon">${icons[b.icon]}</div>
      <div class="card-title">${b.title}</div>
      <div class="card-desc">${b.desc}</div>
    </div>
  `).join('');
}

function renderPortfolio() {
  document.getElementById('portfolio-grid').innerHTML = portfolio.map(p => `
    <article class="portfolio-card">
      <div class="portfolio-img"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
      <div class="portfolio-body">
        <span class="portfolio-tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    </article>
  `).join('');
}

function renderProcess() {
  document.getElementById('process-grid').innerHTML = processSteps.map(p => `
    <div class="card rel">
      <span class="step-num">${p.step}</span>
      <div class="benefit-icon">${icons[p.icon]}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
    </div>
  `).join('');
}

function renderBrands() {
  const row = [...brands, ...brands];
  document.getElementById('marquee-track').innerHTML = row.map(b => `<span class="marquee-item">${b}</span>`).join('');
}

document.getElementById('year').textContent = new Date().getFullYear();
renderServices();
renderBenefits();
renderPortfolio();
renderProcess();
renderBrands();