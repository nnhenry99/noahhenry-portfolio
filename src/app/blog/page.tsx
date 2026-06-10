import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { articles } from "@/lib/blog";

export const metadata = {
  title: "Blog — Noah Henry",
  description: "Writing on design, sports technology, and UX research.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <h1
            className="text-5xl sm:text-6xl font-black tracking-tight text-[#0a0a0a] mb-4"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Take a look at my interests!
          </h1>
        </AnimatedSection>

        <AnimatedSection>
          <h2
            className="text-2xl font-bold text-[#0a0a0a] mb-8"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Latest Articles
          </h2>
          <div className="space-y-5">
            {articles.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col sm:flex-row rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white"
                >
                  {article.coverImage && (
                    <div className="relative w-full sm:w-64 h-48 sm:h-auto shrink-0">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 256px"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.topics.map(t => (
                          <span
                            key={t}
                            className="text-xs font-semibold px-3 py-1 bg-[rgb(226,219,255)] rounded-full text-[#0a0a0a]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3
                        className="text-xl font-bold text-[#0a0a0a] mb-2 group-hover:opacity-70 transition-opacity"
                        style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>{article.author} · {article.date}</span>
                      <span className="font-semibold text-[#0a0a0a] group-hover:gap-2 flex items-center gap-1 transition-all">
                        Read article <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
