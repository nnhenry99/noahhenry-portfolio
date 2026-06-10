import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { caseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Work — Noah Henry",
  description: "UX case studies and selected projects by Noah Henry.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-5">
            Selected Work
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
            A collection of projects spanning mobile apps, dashboards, and web
            experiences — each grounded in research and driven by measurable outcomes.
          </p>
        </AnimatedSection>

        {/* Case study list */}
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <AnimatedSection key={study.slug} delay={i * 0.08}>
              <Link
                href={`/work/${study.slug}`}
                className="group grid md:grid-cols-[1fr_2fr] gap-0 bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Colour swatch */}
                <div
                  className={`h-52 md:h-auto bg-gradient-to-br ${study.gradient} flex flex-col justify-between p-6`}
                >
                  <span className="self-start text-xs font-medium px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-zinc-600">
                    {study.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                      <span>{study.year}</span>
                      <span>·</span>
                      <span>{study.duration}</span>
                      <span>·</span>
                      <span>{study.role}</span>
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-zinc-500 leading-relaxed mb-5">{study.subtitle}</p>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-zinc-50 text-zinc-500 rounded-full border border-zinc-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics preview */}
                  <div className="mt-6 pt-6 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {study.metrics.map(({ label, value }) => (
                      <div key={label}>
                        <div className="text-lg font-semibold text-zinc-900">{value}</div>
                        <div className="text-xs text-zinc-400 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
