import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Resume — Noah Henry",
  description: "Experience, skills, and education — Noah Henry, UX Designer.",
};

const experience = [
  {
    company: "Company Name",
    role: "Senior UX Designer",
    period: "2023 – Present",
    location: "Remote",
    bullets: [
      "Led end-to-end redesign of core transaction flows, increasing task success rate from 32% to 91%.",
      "Established a shared component library of 80+ components used across 3 product teams.",
      "Facilitated bi-weekly design critiques and mentored 2 junior designers.",
      "Partnered with engineering and PM to define quarterly roadmap priorities.",
    ],
  },
  {
    company: "Previous Company",
    role: "UX Designer",
    period: "2021 – 2023",
    location: "City, ST",
    bullets: [
      "Designed and shipped a patient health dashboard that reduced support calls by 52%.",
      "Conducted 30+ moderated and unmoderated usability studies across web and mobile.",
      "Created research reports that directly influenced product strategy for two feature releases.",
      "Collaborated with brand and marketing teams to ensure design system consistency.",
    ],
  },
  {
    company: "Agency / Studio",
    role: "UX / Product Design Intern",
    period: "2020 – 2021",
    location: "City, ST",
    bullets: [
      "Contributed UX design and wireframes across 5 client projects spanning fintech, healthcare, and retail.",
      "Assisted in user research planning, recruiting, and note-taking for 4 client engagements.",
    ],
  },
];

const skillGroups = [
  {
    category: "Research",
    skills: [
      "Usability Testing",
      "User Interviews",
      "Contextual Inquiry",
      "Survey Design",
      "Card Sorting",
      "Tree Testing",
      "A/B Testing",
      "Heuristic Evaluation",
    ],
  },
  {
    category: "Design",
    skills: [
      "Interaction Design",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Visual Design",
      "Accessibility (WCAG)",
      "Responsive Design",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Figma",
      "FigJam",
      "Maze",
      "Hotjar",
      "FullStory",
      "Optimizely",
      "Miro",
      "UserTesting.com",
    ],
  },
  {
    category: "Collaboration",
    skills: [
      "Design Critiques",
      "Stakeholder Presentations",
      "Cross-functional Workshops",
      "Agile / Scrum",
      "Design Strategy",
      "OKR Planning",
    ],
  },
];

const education = [
  {
    school: "University Name",
    degree: "B.S. / B.F.A. in [Design / HCI / Related Field]",
    year: "20XX",
  },
];

export default function ResumePage() {
  return (
    <div className="pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">
              Resume
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
              Noah Henry
            </h1>
            <p className="text-zinc-500 text-lg">
              UX Designer &amp; Researcher · nnhenry99@gmail.com
            </p>
          </div>
          {/* Download button — replace href with a real PDF URL */}
          <a
            href="/resume.pdf"
            download
            className="self-start sm:self-auto inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 text-sm font-medium px-5 py-3 rounded-full hover:border-zinc-400 hover:text-zinc-900 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v8M3 9l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download PDF
          </a>
        </AnimatedSection>

        <div className="grid md:grid-cols-[2fr_1fr] gap-16">
          {/* Left — Experience */}
          <div>
            <AnimatedSection>
              <SectionLabel>Experience</SectionLabel>
              <div className="space-y-12">
                {experience.map((job, i) => (
                  <AnimatedSection key={job.company} delay={i * 0.07}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                      <div>
                        <h3 className="font-semibold text-zinc-900">{job.role}</h3>
                        <div className="text-sm text-zinc-500">{job.company} · {job.location}</div>
                      </div>
                      <span className="text-xs font-medium text-zinc-400 whitespace-nowrap mt-0.5">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-zinc-300 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Skills + Education */}
          <div className="space-y-14">
            <AnimatedSection>
              <SectionLabel>Skills</SectionLabel>
              <div className="space-y-8">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-3">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 bg-zinc-50 text-zinc-600 rounded-full border border-zinc-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionLabel>Education</SectionLabel>
              {education.map((edu) => (
                <div key={edu.school}>
                  <div className="font-medium text-zinc-900">{edu.school}</div>
                  <div className="text-sm text-zinc-500 mt-0.5">{edu.degree}</div>
                  <div className="text-xs text-zinc-400 mt-1">{edu.year}</div>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection>
              <SectionLabel>Elsewhere</SectionLabel>
              <div className="space-y-2">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
                  { label: "Dribbble", href: "https://dribbble.com/your-profile" },
                  { label: "Read.cv", href: "https://read.cv/your-profile" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-zinc-600 hover:text-indigo-600 transition-colors group"
                  >
                    {label}
                    <svg
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M2 10L10 2M5 2h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-6">
      {children}
    </p>
  );
}
