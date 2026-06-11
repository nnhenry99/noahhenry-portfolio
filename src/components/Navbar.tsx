"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/",         label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog",     label: "Blog" },
  { href: "/about",    label: "About" },
  { href: "/contact",  label: "Contact" },
];

const BOOK_CALL_URL = "https://calendly.com/your-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  // Measure the active link and move the pill to it
  useEffect(() => {
    const activeIndex = links.findIndex(({ href }) => isActive(href));
    const el = linkRefs.current[activeIndex];
    if (!el) return;
    setPill({ left: el.offsetLeft, width: el.offsetWidth });
    setReady(true);
  }, [pathname]);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex items-center justify-center px-6">

      {/* ── Desktop pill nav ── */}
      <div className="hidden md:flex items-center gap-3">
        <Link href="/" className="flex items-center justify-center rounded-full bg-white p-[10px] hover:opacity-70 transition-opacity">
          <Image src="/nh logo-01.svg" alt="Noah Henry" width={30} height={30} />
        </Link>

        <nav className="relative flex items-center gap-1 bg-[rgb(238,238,242)] rounded-full px-2 py-2">
          {/* Sliding pill — single element that moves between links */}
          {ready && pill && (
            <motion.span
              className="absolute top-2 bottom-2 rounded-full pointer-events-none"
              initial={false}
              animate={{ left: pill.left, width: pill.width }}
              transition={{ type: "spring", stiffness: 400, damping: 38 }}
              style={{ backgroundColor: "rgb(193,207,255)" }}
            />
          )}

          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              ref={(el) => { linkRefs.current[i] = el; }}
              href={href}
              className="relative z-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors"
              style={{ color: isActive(href) ? "rgb(65,90,210)" : "#0a0a0a" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-full"
        >
          Book a call
        </a>
      </div>

      {/* ── Mobile: logo + hamburger ── */}
      <div className="md:hidden w-full flex items-center justify-between bg-[rgb(238,238,242)] rounded-full px-5 py-3">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/nh logo-01.svg" alt="Noah Henry" width={30} height={30} />
        </Link>

        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span className={`block h-px bg-[#0a0a0a] transition-all duration-200 origin-center ${menuOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-5"}`} />
          <span className={`block h-px bg-[#0a0a0a] transition-all duration-200 ${menuOpen ? "opacity-0 w-5" : "w-4"}`} />
          <span className={`block h-px bg-[#0a0a0a] transition-all duration-200 origin-center ${menuOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-5"}`} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="md:hidden absolute top-[calc(100%+8px)] left-6 right-6 bg-[rgb(238,238,242)] rounded-2xl overflow-hidden shadow-lg"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="relative flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                    style={{ color: isActive(href) ? "rgb(65,90,210)" : "#0a0a0a" }}
                  >
                    {isActive(href) && (
                      <span
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: "rgb(193,207,255)" }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block text-sm font-semibold px-5 py-2.5 rounded-full w-full text-center"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
