import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code2,
  RefreshCw,
  Rocket,
  LayoutTemplate,
  Zap,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Search,
  PenTool,
  Wrench,
  CheckCircle2,
  Star,
  MessageCircle,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1Asset from "@/assets/ednalva.png.asset.json";
import portfolio2Asset from "@/assets/alexsandra.jpeg.asset.json";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4Asset from "@/assets/rosinha-luna.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5581994459345?text=ol%C3%A1%2C%20vim%20pelo%20site%20e%20preciso%20de%20ajuda.";

const services = [
  { icon: Code2, title: "Criação de Sites", desc: "Sites institucionais e corporativos com performance, SEO e design premium para construir autoridade." },
  { icon: RefreshCw, title: "Redesign & Atualização", desc: "Modernizamos seu site atual com nova identidade, novas tecnologias e foco em conversão." },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "Páginas de alta conversão para campanhas, tráfego pago e captação de leads qualificados." },
  { icon: Rocket, title: "Lançamentos Digitais", desc: "Estrutura completa para lançar infoprodutos: páginas, automações e ambiente de vendas." },
];

const benefits = [
  { icon: Zap, title: "Performance Real", desc: "Sites rápidos com Core Web Vitals otimizados e nota máxima no Google." },
  { icon: ShieldCheck, title: "Tecnologia de Ponta", desc: "Stack moderno, código limpo e segurança em cada linha entregue." },
  { icon: TrendingUp, title: "Foco em Conversão", desc: "Copy, design e UX pensados para transformar visitas em clientes." },
  { icon: Sparkles, title: "Design Premium", desc: "Visual sofisticado que comunica autoridade e diferencia sua marca." },
];

const portfolio = [
  { img: portfolio1Asset.url, tag: "Advocacia", title: "Ednalva Feitoza Advogada", desc: "Site institucional + identidade" },
  { img: portfolio2Asset.url, tag: "Nutricionista", title: "Alexsandra Pereira", desc: "Site institucional + presença digital" },
  { img: portfolio3, tag: "Lançamento", title: "Produto Digital", desc: "Landing + funil completo" },
];

const process = [
  { icon: Search, step: "01", title: "Descoberta", desc: "Entendemos seu negócio, objetivos, público e concorrência." },
  { icon: PenTool, step: "02", title: "Design & UX", desc: "Criamos a identidade visual digital com foco em conversão." },
  { icon: Wrench, step: "03", title: "Desenvolvimento", desc: "Codificamos com performance, SEO e tecnologias modernas." },
  { icon: Rocket, step: "04", title: "Lançamento", desc: "Publicamos, otimizamos e acompanhamos os resultados." },
];

const testimonials = [
  { name: "Rafael Mendes", role: "CEO, Studio M", text: "Trocamos nosso site antigo pelo trabalho da Zion e em 2 meses dobramos os leads. Profissionalismo absurdo." },
  { name: "Carla Souza", role: "Founder, Bloom Beauty", text: "Entregaram muito além do esperado. Design impecável e atendimento de altíssimo nível, sem enrolação." },
  { name: "Diego Almeida", role: "Infoprodutor", text: "Estruturaram meu lançamento do zero. Página, integrações, tudo redondo. Faturei 6 dígitos na primeira semana." },
];

const brands = [
  "Ateliê Rosinha Luna",
  "Alexsandra Pereira Nutricionista",
  "Marcelino Consultor",
  "Ednalva Feitosa Advogada",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Benefits />
        <Process />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 mt-4">
        <nav className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-elegant">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-gradient-primary shadow-glow" />
            <span className="font-bold tracking-tight">Zion Criative</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
            <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
            <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-glow hover:opacity-90 transition-opacity"
          >
            Falar agora <ArrowRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const slides = [
    { img: portfolio1Asset.url, title: "Ednalva Feitoza Advogada" },
    { img: portfolio2Asset.url, title: "Alexsandra Pereira" },
    { img: portfolio3, title: "Lançamento Produto Digital" },
    { img: portfolio4Asset.url, title: "Ateliê Rosinha Luna" },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover opacity-30 mix-blend-screen pointer-events-none"
        width={1920}
        height={1280}
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          Agência digital • Atendemos todo o Brasil
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Sites institucionais premium que transmitem
          <span className="block text-gradient">autoridade e credibilidade.</span>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Criação, redesign e lançamentos digitais para empresas que querem
          autoridade no online. Design impecável, tecnologia de ponta e foco
          real em conversão.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow hover:opacity-90 transition-opacity"
          >
            Solicitar orçamento <ArrowRight className="size-4" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-card transition-colors"
          >
            Ver projetos
          </a>
        </div>

        <div className="relative mt-20 mx-auto max-w-5xl animate-float">
          <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-3xl" />
          <div className="relative glass rounded-2xl overflow-hidden shadow-elegant">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-accent/70" />
              <span className="size-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 text-xs text-muted-foreground">zioncriative.com</span>
            </div>
            <div className="relative w-full p-4 bg-background">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {slides.map((s, i) => (
                  <button
                    key={s.img}
                    onClick={() => setCurrent(i)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all duration-500 ${
                      i === current
                        ? "ring-2 ring-primary scale-[1.02] shadow-lg"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute bottom-0 inset-x-0 py-2 px-3 text-xs font-semibold text-white bg-gradient-to-t from-black/70 to-transparent transition-opacity ${
                      i === current ? "opacity-100" : "opacity-0"
                    }`}>
                      {s.title}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Ir para slide ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const row = [...brands, ...brands];
  return (
    <section className="py-12 border-y border-border/60 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Empresas que confiam no nosso trabalho
      </p>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {row.map((b, i) => (
            <span key={i} className="text-2xl font-bold text-muted-foreground/50 tracking-widest">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, desc }: { tag: string; title: React.ReactNode; desc: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-16">
      <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-5">
        {tag}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <p className="mt-5 text-muted-foreground">{desc}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Serviços"
          title={<>Tudo que sua marca precisa <span className="text-gradient">no digital</span></>}
          desc="Do site institucional ao lançamento de produto digital — entregamos com padrão premium."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group relative glass rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              <div className="relative">
                <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-5">
                  <s.icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Portfólio"
          title={<>Resultados que <span className="text-gradient">falam por nós</span></>}
          desc="Uma seleção dos projetos que já entregamos para marcas em todo o Brasil."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((p) => (
            <article key={p.title} className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-accent">{p.tag}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Por que Zion"
          title={<>Não é só um site. É <span className="text-gradient">posicionamento.</span></>}
          desc="Trabalhamos para PMEs e profissionais liberais que querem competir no nível das grandes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="glass rounded-2xl p-7">
              <b.icon className="size-7 text-accent mb-5" />
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {[
            { n: "+120", l: "Projetos entregues" },
            { n: "98%", l: "Clientes satisfeitos" },
            { n: "5x", l: "Mais leads em média" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Processo"
          title={<>Um método <span className="text-gradient">claro e previsível</span></>}
          desc="Do briefing à entrega, você sabe exatamente em que etapa o projeto está."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p) => (
            <div key={p.step} className="relative glass rounded-2xl p-7">
              <span className="absolute top-5 right-5 text-xs font-mono text-muted-foreground">{p.step}</span>
              <p.icon className="size-7 text-accent mb-5" />
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tag="Depoimentos"
          title={<>O que dizem <span className="text-gradient">nossos clientes</span></>}
          desc="Quem trabalha com a Zion volta. E indica."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-7 flex flex-col">
              <div className="flex gap-0.5 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90 flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-primary grid place-items-center text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const items = [
    "Reunião de descoberta gratuita",
    "Orçamento sob medida em 24h",
    "Atendimento humano em todo Brasil",
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative glass rounded-3xl p-12 md:p-16 overflow-hidden text-center shadow-elegant">
          <div className="absolute inset-0 bg-hero opacity-80 pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Pronto pra ter um site à altura
              <span className="block text-gradient">da sua ambição?</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Fale agora com nosso time pelo WhatsApp e receba uma proposta personalizada.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {items.map((i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-accent" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 text-base font-semibold shadow-glow hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="size-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-gradient-primary shadow-glow" />
          <span className="font-bold tracking-tight">Zion Criative</span>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zion Criative. Todos os direitos reservados.
        </div>
        <div className="flex gap-5 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center size-14 rounded-full bg-gradient-primary shadow-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-6 text-primary-foreground" />
    </a>
  );
}
