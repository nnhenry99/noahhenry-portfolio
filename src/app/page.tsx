import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import RotatingText from "@/components/RotatingText";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroGradient from "@/components/HeroGradient";
import ToolMarquee from "@/components/ToolMarquee";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden bg-white">
        {/* Shader gradient background */}
        <div aria-hidden="true" className="absolute inset-0">
          <HeroGradient />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1
            className="animate-fade-up text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#0a0a0a] leading-[0.95] mb-4"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Hi! I&apos;m Noah Henry!
          </h1>

          {/* Rotating subtitle — min-h prevents layout shift on long strings */}
          <div
            className="animate-fade-up delay-200 text-2xl sm:text-3xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-figtree), system-ui, sans-serif", minHeight: "2.5rem", color: "rgb(0,153,255)" }}
          >
            <RotatingText />
          </div>

          {/* Value statement */}
          <p className="animate-fade-up delay-300 text-base sm:text-lg text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
            Research-driven designer building digital products people actually enjoy using.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
            >
              View Work →
            </Link>
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
            >
              Book a call
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-up delay-500 absolute bottom-10 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>

      {/* ── Experienced In ── */}
      <ToolMarquee />

      {/* ── Recent Work ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] mb-2"
                style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
              >
                Recent Work
              </h2>
              <p className="text-zinc-500">
                Explore my projects to see how my design skills can help you succeed
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-zinc-500 hover:text-[#0a0a0a] transition-colors whitespace-nowrap"
            >
              All projects →
            </Link>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  {/* Color swatch / cover image */}
                  <div className={`${project.cardColor} h-52 relative flex flex-col justify-between p-6 shrink-0 overflow-hidden`}>
                    {project.coverImage && (
                      <>
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          className="object-cover object-center pointer-events-none"
                          sizes="(max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </>
                    )}
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {project.categories.map(cat => (
                        <span key={cat} className="text-xs font-semibold px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-[#0a0a0a]">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <span className={`relative z-10 text-xs font-medium ${project.coverImage ? "text-white/80" : "text-[#0a0a0a]/60"}`}>{project.date}</span>
                  </div>

                  {/* Info */}
                  <div className="p-6 bg-white flex flex-col flex-1">
                    <h3
                      className="text-xl font-bold text-[#0a0a0a] mb-2 group-hover:opacity-70 transition-opacity"
                      style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    {/* Outcome-focused tagline */}
                    <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                      {project.tagline}
                    </p>
                    <div className="mt-4 text-sm font-semibold text-[#0a0a0a] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read case study <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
