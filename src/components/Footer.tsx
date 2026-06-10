import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <span style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}>
          Noah Henry
        </span>
        <div className="flex items-center gap-6">
          <Link href="/projects" className="hover:text-zinc-700 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-zinc-700 transition-colors">
            About
          </Link>
          <Link href="/blog" className="hover:text-zinc-700 transition-colors">
            Blog
          </Link>
          <a
            href="mailto:nnhenry99@gmail.com"
            className="hover:text-zinc-700 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
