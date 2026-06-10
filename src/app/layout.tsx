import type { Metadata } from "next";
import { League_Spartan, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noah Henry — UX Designer",
  description:
    "UX Designer and Researcher crafting thoughtful, user-centered digital experiences.",
  openGraph: {
    title: "Noah Henry — UX Designer",
    description:
      "UX Designer and Researcher crafting thoughtful, user-centered digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${figtree.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-[#0a0a0a] antialiased"
        style={{ fontFamily: "var(--font-figtree), system-ui, sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
