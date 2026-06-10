import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Accordion from "@/components/Accordion";
import Link from "next/link";

export const metadata = {
  title: "About | Noah Henry",
  description: "About Noah Henry, UX Designer and Researcher.",
};

const experience = [
  {
    role: "UX Designer, Contract",
    company: "Parallel Distribution",
    period: "2025 – 2026",
    detail: "Shipped SwapCut's redesigned onboarding and style-browsing flows in a fast-paced, iterative engagement.",
  },
  {
    role: "Freelance Web & Graphic Designer",
    company: "Self-Employed",
    period: "2023 – 2024",
    detail: "Designed and delivered branding, web, and digital assets for independent clients.",
  },
];

const education = [
  {
    school: "Rochester Institute of Technology",
    degree: "M.S. Human-Computer Interaction · GPA 3.97 / 4.0",
    year: "2024 – 2026",
  },
  {
    school: "Syracuse University",
    degree: "B.S. Industrial and Interaction Design · GPA 3.6 / 4.0 · Dean's List",
    year: "2017 – 2023",
  },
];

const faqs = [
  {
    q: "What kind of designer are you?",
    a: "I'm a research-driven UX designer focused on building intuitive systems. My background in HCI has influenced me to design with intention. I start with understanding the problem deeply before reaching for solutions.",
  },
  {
    q: "How would teammates describe you?",
    a: "Thorough, collaborative, and precise. I care deeply about the quality of my work and communicate clearly to keep the team aligned. I treat feedback as a resource, not a critique.",
  },
  {
    q: "How quickly do you learn new tools or systems?",
    a: "Quickly. Extreme sports trained me to adapt fast. New environments demand rapid pattern recognition and risk assessment. I apply that same mindset to picking up new tools, whether that's a new prototyping method or an unfamiliar tech stack.",
  },
  {
    q: "What is your design process like?",
    a: "Research first, iterate often. I start with deep user understanding, define the core problem clearly, then diverge widely before converging on a solution. I validate assumptions through testing at every stage.",
  },
  {
    q: "Why should someone hire you?",
    a: "I bring both rigor and creativity to UX problems. I hold my work to a high standard, communicate proactively, and care about outcomes, not just deliverables. And I move fast without sacrificing craft.",
  },
];

const interests = [
  {
    label: "Snowboarding",
    description: "Half the inspiration behind my sports tech work came from spending too much time on the mountain thinking about biomechanics.",
    image: "/about/Tremblant.jpg",
  },
  {
    label: "Strength Training",
    description: "Small technique adjustments create massive performance differences. I bring that same precision to design.",
    bg: "bg-[rgb(219,255,235)]",
  },
  {
    label: "Sports Technology",
    description: "Fascinated by how AI and sensors are reshaping how athletes train, compete, and recover.",
    bg: "bg-[rgb(255,221,51)]",
  },
];

const photos = [
  { src: "/about/Bills.JPG",        alt: "Bills game" },
  { src: "/about/Celtics.JPG",      alt: "Celtics game" },
  { src: "/about/Grand Canyon.JPG", alt: "Grand Canyon" },
  { src: "/about/Miami.JPG",        alt: "Miami" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Bio ── */}
        <AnimatedSection className="mb-28">
          <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <h1
                className="text-5xl sm:text-6xl font-black tracking-tight text-[#0a0a0a] mb-8 leading-[0.95]"
                style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
              >
                Noah Henry
              </h1>
              <div className="space-y-5 text-[#0a0a0a] text-lg leading-relaxed">
                <p>
                  Design, for me, is about turning abstract ideas into tangible experiences. My
                  background in extreme sports and strength training has shaped how I approach UX:
                  I value precision, timing, and feedback.
                </p>
                <p>
                  I consider myself a perfectionist, holding my work to a high standard. In
                  strength training, small adjustments in technique create massive differences in
                  performance. I bring that same mindset to UX.
                </p>
                <p>
                  Extreme sports trained me to learn fast. New environments demand rapid
                  adaptation, pattern recognition, and risk assessment. I quickly catch on to new
                  tools and systems, whether it&apos;s prototyping with emerging hardware or
                  picking up new design skills.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="btn-primary inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
                >
                  View work →
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

            {/* Headshot */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/about/Hero.PNG"
                alt="Noah Henry"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* ── Work Experience ── */}
        <AnimatedSection className="mb-28">
          <h2
            className="text-3xl font-bold text-[#0a0a0a] mb-8"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Work Experiences
          </h2>
          <div className="space-y-0">
            {experience.map((job, i) => (
              <AnimatedSection key={job.company} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 py-6 border-b border-zinc-100">
                  <div className="flex-1">
                    <div
                      className="text-base font-bold text-[#0a0a0a]"
                      style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                    >
                      {job.role}
                    </div>
                    <div className="text-sm text-zinc-500 mt-0.5">{job.company}</div>
                    <div className="text-sm text-zinc-400 mt-2 leading-relaxed max-w-lg">{job.detail}</div>
                  </div>
                  <div className="text-sm font-medium text-zinc-400 whitespace-nowrap shrink-0">
                    {job.period}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Education ── */}
        <AnimatedSection className="mb-28">
          <h2
            className="text-3xl font-bold text-[#0a0a0a] mb-8"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Education
          </h2>
          {education.map(edu => (
            <div key={edu.school} className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 py-6 border-b border-zinc-100">
              <div>
                <div
                  className="text-base font-bold text-[#0a0a0a]"
                  style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                >
                  {edu.school}
                </div>
                <div className="text-sm text-zinc-500 mt-0.5">{edu.degree}</div>
              </div>
              <div className="text-sm font-medium text-zinc-400 whitespace-nowrap shrink-0">{edu.year}</div>
            </div>
          ))}
        </AnimatedSection>

        {/* ── FAQ accordion ── */}
        <AnimatedSection className="mb-28">
          <h2
            className="text-3xl font-bold text-[#0a0a0a] mb-2"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Typical Questions
          </h2>
          <p className="text-zinc-500 mb-8">Get to know me better!</p>
          <Accordion items={faqs} />
        </AnimatedSection>

        {/* ── Life Outside Work ── */}
        <AnimatedSection>
          <h2
            className="text-3xl font-bold text-[#0a0a0a] mb-8"
            style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
          >
            Life Outside of Work
          </h2>

          {/* Interest cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-5">
            {interests.map(({ label, description, image, bg }) => (
              image ? (
                <div key={label} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div
                      className="text-base font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                    >
                      {label}
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">{description}</p>
                  </div>
                </div>
              ) : (
                <div key={label} className={`${bg} rounded-2xl p-6 aspect-[4/3] flex flex-col justify-end`}>
                  <div
                    className="text-lg font-bold text-[#0a0a0a] mb-2"
                    style={{ fontFamily: "var(--font-league-spartan), system-ui, sans-serif" }}
                  >
                    {label}
                  </div>
                  <p className="text-sm text-[#0a0a0a]/70 leading-relaxed">{description}</p>
                </div>
              )
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {photos.map(({ src, alt }) => (
              <div key={src} className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
