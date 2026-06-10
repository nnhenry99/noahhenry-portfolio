import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { articles, getArticle, type BodyBlock } from "@/lib/blog";

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Noah Henry`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-[#0a0a0a] transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M13 7H1M6 2L1 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Articles
          </Link>

          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.topics.map(t => (
              <span
                key={t}
                className="text-xs font-semibold px-3 py-1 bg-[rgb(226,219,255)] rounded-full text-[#0a0a0a]"
              >
                {t}
              </span>
            ))}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight text-[#0a0a0a] leading-[1] mb-5"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-zinc-400 mb-12 pb-8 border-b border-zinc-100">
            <span className="font-medium text-[#0a0a0a]">{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>

          {/* Body */}
          <div className="space-y-6">
            {article.body.map((block, i) =>
              typeof block === "string" ? (
                <p key={i} className="text-[#0a0a0a] leading-relaxed text-lg">
                  {block}
                </p>
              ) : block.type === "linkedin" ? (
                <div key={i} className="flex justify-center my-4">
                  <iframe
                    src={block.src}
                    height={block.height ?? 600}
                    width={504}
                    frameBorder={0}
                    allowFullScreen
                    title="Embedded LinkedIn post"
                    className="rounded-xl max-w-full"
                  />
                </div>
              ) : null
            )}
          </div>
        </AnimatedSection>

        {/* Back */}
        <AnimatedSection className="mt-16 pt-8 border-t border-zinc-100">
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-400 hover:text-[#0a0a0a] transition-colors"
          >
            ← Back to Blog
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
