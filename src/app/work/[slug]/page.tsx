import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Noah Henry`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className={`pt-32 pb-20 px-6 bg-gradient-to-br ${study.gradient}`}
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M13 7H1M6 2L1 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Work
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-medium px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-zinc-600">
                {study.category}
              </span>
              <span className="text-xs text-zinc-400">{study.year}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
              {study.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Project meta ── */}
      <section className="border-b border-zinc-100 px-6 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Role", value: study.role },
            { label: "Duration", value: study.duration },
            { label: "Team", value: study.team },
            { label: "Tools", value: study.tools.join(", ") },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">{label}</div>
              <div className="text-sm text-zinc-700 leading-snug">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        {/* ── Overview ── */}
        <AnimatedSection>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">{study.overview}</p>
        </AnimatedSection>

        {/* ── Problem ── */}
        <AnimatedSection>
          <SectionLabel>The Problem</SectionLabel>
          <blockquote className="border-l-4 border-indigo-200 pl-6 text-xl text-zinc-700 leading-relaxed italic max-w-3xl">
            {study.problem}
          </blockquote>
        </AnimatedSection>

        {/* ── Process ── */}
        <AnimatedSection>
          <SectionLabel>Process</SectionLabel>
          <div className="space-y-12 mt-6">
            {study.process.map((phase, i) => (
              <AnimatedSection key={phase.phase} delay={i * 0.07}>
                <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                  <div className="flex md:flex-col items-start gap-3">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-900">{phase.phase}</h3>
                  </div>
                  <div>
                    <p className="text-zinc-600 leading-relaxed mb-4">{phase.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {phase.activities.map((a) => (
                        <li
                          key={a}
                          className="flex items-center gap-2 text-sm text-zinc-500"
                        >
                          <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Outcome ── */}
        <AnimatedSection>
          <SectionLabel>Outcome</SectionLabel>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl mb-10">{study.outcome}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.metrics.map(({ label, value }) => (
              <div
                key={label}
                className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100"
              >
                <div className="text-3xl font-semibold text-zinc-900 mb-1">{value}</div>
                <div className="text-sm text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Next steps ── */}
        <AnimatedSection>
          <SectionLabel>What&apos;s Next</SectionLabel>
          <p className="text-zinc-600 leading-relaxed max-w-3xl">{study.nextSteps}</p>
        </AnimatedSection>

        {/* ── Navigation ── */}
        <AnimatedSection className="pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link
            href="/work"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            ← All projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
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
    <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-4">
      {children}
    </p>
  );
}
