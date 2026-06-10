import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Noah Henry",
  description: "UX case studies and selected work by Noah Henry.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <h1
            className="text-5xl sm:text-6xl font-black tracking-tight text-[#0a0a0a] mb-4"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Recent Work
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl">
            Explore my projects to see how my design skills can help you succeed
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.07}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid md:grid-cols-[340px_1fr] rounded-3xl overflow-hidden border border-zinc-100 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 bg-white"
              >
                {/* Color swatch / cover image */}
                <div className={`${project.cardColor} min-h-48 relative flex flex-col justify-between p-8 overflow-hidden`}>
                  {project.coverImage && (
                    <>
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover object-center pointer-events-none"
                        sizes="340px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </>
                  )}
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {project.categories.map(cat => (
                      <span
                        key={cat}
                        className="text-xs font-semibold px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-[#0a0a0a]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <p className={`relative z-10 text-sm font-medium ${project.coverImage ? "text-white/80" : "text-[#0a0a0a]/60"}`}>{project.date}</p>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2">
                      {project.role}
                      {project.client && ` · ${project.client}`}
                    </div>
                    <h2
                      className="text-3xl font-bold text-[#0a0a0a] mb-3 group-hover:opacity-70 transition-opacity"
                      style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">{project.subtitle}</p>
                  </div>
                  <div className="mt-6 text-sm font-semibold text-[#0a0a0a] flex items-center gap-1 group-hover:gap-2 transition-all">
                    View project <span aria-hidden>→</span>
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
