import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, getProject } from "@/lib/projects";
import HapticFindingsVisual from "@/components/HapticFindingsVisual";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Noah Henry`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section className={`${project.cardColor} pt-32 pb-20 px-6`}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0a0a0a]/60 hover:text-[#0a0a0a] transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M13 7H1M6 2L1 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Projects
            </Link>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.categories.map(cat => (
                <span key={cat} className="text-xs font-semibold px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-[#0a0a0a]">
                  {cat}
                </span>
              ))}
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0a0a0a] leading-[0.95] mb-5"
              style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
            >
              {project.title}
            </h1>
            <p className="text-lg text-[#0a0a0a]/70 max-w-2xl leading-relaxed">
              {project.tagline}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Meta bar ── */}
      <section className="border-b border-zinc-100 px-6 py-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Role",       value: project.role },
            { label: "Client",     value: project.client ?? "Academic / Personal" },
            { label: "Date",       value: project.date },
            { label: "Categories", value: project.categories.join(", ") },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1">{label}</div>
              <div className="text-sm text-[#0a0a0a] leading-snug">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* ── Overview ── */}
        <AnimatedSection>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">{project.overview}</p>
        </AnimatedSection>

        {/* ── HMW ── */}
        <AnimatedSection>
          <SectionLabel>The Challenge</SectionLabel>
          <blockquote
            className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] leading-snug max-w-4xl border-l-4 pl-6"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif", borderColor: "currentColor", opacity: 0.85 }}
          >
            {project.hmw}
          </blockquote>
        </AnimatedSection>

        {/* ── Process ── */}
        <AnimatedSection>
          <SectionLabel>Process</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.process.map((step, i) => (
              <AnimatedSection key={step.phase} delay={i * 0.07}>
                <div className={`${project.cardColor} rounded-2xl p-6 h-full`}>
                  <div className="text-xs font-bold text-[#0a0a0a]/50 uppercase tracking-widest mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="text-base font-bold text-[#0a0a0a] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                  >
                    {step.phase}
                  </div>
                  <p className="text-sm text-[#0a0a0a]/70 leading-relaxed">{step.summary}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Metrics ── */}
        <AnimatedSection>
          <SectionLabel>Outcomes</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 0.06}>
                <div className="border border-zinc-100 rounded-2xl p-6">
                  <div
                    className={`text-3xl font-black mb-1 ${m.placeholder ? "text-zinc-300" : "text-[#0a0a0a]"}`}
                    style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs text-zinc-400 leading-snug">{m.label}</div>
                  {m.placeholder && (
                    <div className="text-xs text-zinc-300 mt-1">— add your data</div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Design sections ── */}
        <AnimatedSection>
          <SectionLabel>Design</SectionLabel>
          <div className="space-y-16">
            {project.sections.map((section, i) => (
              <AnimatedSection key={section.heading} delay={i * 0.05}>
                {section.wide ? (
                  /* Stacked layout: text row then full-width image */
                  <div className="flex flex-col gap-6">
                    <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 items-center">
                      <div>
                        <h3
                          className="text-xl font-bold text-[#0a0a0a] mb-3 uppercase tracking-wide"
                          style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                        >
                          {section.heading}
                        </h3>
                        <p className="text-zinc-500 leading-relaxed text-sm">{section.body}</p>
                      </div>
                    </div>
                    {section.media && section.media.type === "image" && (
                      <div className={`relative rounded-2xl overflow-hidden ${project.cardColor}`}>
                        <Image
                          src={section.media.src}
                          alt={section.heading}
                          width={1600}
                          height={900}
                          className="w-full h-auto object-contain"
                          sizes="100vw"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  /* Side-by-side layout */
                  <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 items-center">
                    <div>
                      <h3
                        className="text-xl font-bold text-[#0a0a0a] mb-3 uppercase tracking-wide"
                        style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                      >
                        {section.heading}
                      </h3>
                      <p className="text-zinc-500 leading-relaxed text-sm">{section.body}</p>
                    </div>
                    {section.visual === "haptic-findings" ? (
                      <HapticFindingsVisual />
                    ) : section.media ? (
                      section.media.type === "video" ? (
                        <div className="rounded-2xl overflow-hidden flex justify-center">
                          <video
                            src={section.media.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-auto rounded-2xl"
                            style={{ maxHeight: "560px", width: "auto", maxWidth: "100%" }}
                          />
                        </div>
                      ) : (
                        <div className={`relative rounded-2xl overflow-hidden ${project.cardColor}`}>
                          <Image
                            src={section.media.src}
                            alt={section.heading}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                        </div>
                      )
                    ) : (
                      <div className="rounded-2xl aspect-video flex flex-col items-center justify-center gap-2 text-[#0a0a0a]/25 bg-zinc-50">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                          <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="11" cy="13" r="3" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M2 22l7-5 5 4 4-3 10 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-xs font-medium">Add mockup image</span>
                      </div>
                    )}
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Athlete quotes (XTrack only) ── */}
        {project.quotes && (
          <AnimatedSection>
            <SectionLabel>Asking the Athletes</SectionLabel>
            <p className="text-zinc-600 leading-relaxed max-w-3xl mb-10">
              To deeply understand athlete needs, I conducted interviews with both amateur and
              professional skiers and snowboarders. These conversations continuously influenced
              my design decisions throughout the project.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {project.quotes.map(q => (
                <div key={q.name} className={`${project.cardColor} rounded-2xl p-6`}>
                  <p className="text-sm text-[#0a0a0a] leading-relaxed mb-4 italic">{q.text}</p>
                  <div className="text-sm font-bold text-[#0a0a0a]">{q.name}</div>
                  <div className="text-xs text-[#0a0a0a]/60">{q.title}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* ── Key Learnings ── */}
        <AnimatedSection>
          <SectionLabel>Key Learnings</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-6">
            {project.learnings.map((l, i) => (
              <AnimatedSection key={l.title} delay={i * 0.07}>
                <div className="border border-zinc-100 rounded-2xl p-6 h-full">
                  <div
                    className="text-base font-bold text-[#0a0a0a] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                  >
                    {l.title}
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">{l.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Bottom nav ── */}
        <AnimatedSection className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link href="/projects" className="text-sm font-medium text-zinc-400 hover:text-[#0a0a0a] transition-colors">
            ← All projects
          </Link>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
          >
            Start a conversation →
          </Link>
        </AnimatedSection>
      </div>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">
      {children}
    </p>
  );
}
