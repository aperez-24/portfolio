export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center overflow-hidden">

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-[120px] -z-10" />

      {/* Available for work badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1f1f25] border border-[#4a4455]/30 rounded-full mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.2em] text-[#ccc3d8]">
          Available for work
        </span>
      </div>

      {/* Main heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 text-gradient">
        Adrián Pérez
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl font-medium text-[#ccc3d8] tracking-tight mb-8">
        Full Stack Web Developer
      </p>

      {/* Description */}
      <p className="max-w-2xl text-[#94a3b8] leading-relaxed mb-12 text-lg">
        Desarrollador junior con 3 proyectos reales entregados, incluyendo una
        plataforma para el Ayuntamiento de Rivas-Vaciamadrid. Construyo
        aplicaciones web limpias, funcionales y mantenibles.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="#projects"
          className="w-full sm:w-auto px-8 py-4 bg-[#7c3aed] text-white font-bold rounded-xl shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:bg-[#a78bfa] transition-all"
        >
          Ver mis proyectos
        </a>
        <a
          href="/cv-adrian-perez.pdf"
          download
          className="w-full sm:w-auto px-8 py-4 bg-[#1f1f25] border border-[#4a4455]/40 text-[#e4e1e9] font-bold rounded-xl hover:bg-[#2a292f] transition-colors flex items-center justify-center gap-2"
        >
          <span>↓</span>
          Descargar CV
        </a>
      </div>

    </section>
  );
}