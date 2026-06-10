export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyPhase {
  phase: string;
  description: string;
  activities: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  tools: string[];
  tags: string[];
  gradient: string;
  overview: string;
  problem: string;
  process: CaseStudyPhase[];
  outcome: string;
  metrics: CaseStudyMetric[];
  nextSteps: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mobile-banking-redesign",
    title: "Mobile Banking Redesign",
    subtitle: "Rebuilding trust through a simplified transaction experience",
    category: "Mobile App",
    year: "2024",
    duration: "4 months",
    role: "Lead UX Designer",
    team: "2 UX designers, 1 UX researcher, 3 engineers, 1 PM",
    tools: ["Figma", "Maze", "Hotjar", "FigJam"],
    tags: ["Mobile", "Fintech", "Research", "Interaction Design"],
    gradient: "from-indigo-100 via-violet-50 to-white",
    overview:
      "A regional bank's mobile app had a 2.1-star rating and a 68% task failure rate on core transaction flows. I led the end-to-end redesign — from discovery through high-fidelity handoff — in close collaboration with engineering and the product team.",
    problem:
      "Users couldn't confidently complete basic tasks like transferring funds or paying bills. Exit surveys pointed to confusing navigation, unclear error states, and a lack of feedback during multi-step flows. The bank was losing customers to digital-first competitors.",
    process: [
      {
        phase: "Discover",
        description:
          "I ran 12 moderated usability sessions with current and churned customers to map where and why people were dropping off, supplemented by 6 months of support ticket analysis and Hotjar session recordings.",
        activities: [
          "12 moderated usability sessions",
          "Support ticket analysis (n=400)",
          "Heatmap and session recording review",
          "Competitive audit of 6 banking apps",
        ],
      },
      {
        phase: "Define",
        description:
          "Research synthesis revealed three core failure modes: disorienting navigation, absent progress indicators in multi-step flows, and cryptic error messages that left users stranded. I created a problem statement and prioritized opportunities against business constraints.",
        activities: [
          "Affinity mapping with cross-functional team",
          "Journey map for 3 key user archetypes",
          "HMW workshop with stakeholders",
          "Prioritization matrix (impact vs. effort)",
        ],
      },
      {
        phase: "Ideate",
        description:
          "The team ran two design studios to generate concepts for the transaction flow. I facilitated diverge/converge sessions and synthesized ideas into three distinct navigation models for evaluation.",
        activities: [
          "Design studio (2 sessions)",
          "Navigation model sketches × 3",
          "Card sorting with 20 participants",
          "Information architecture revision",
        ],
      },
      {
        phase: "Prototype",
        description:
          "I built a high-fidelity Figma prototype covering the full transfer, bill pay, and transaction history flows — including edge cases like insufficient funds and network errors.",
        activities: [
          "Mid-fidelity wireframes × 40 screens",
          "High-fidelity prototype in Figma",
          "Component library with 80+ components",
          "Annotated specs for engineering",
        ],
      },
      {
        phase: "Test",
        description:
          "Unmoderated usability testing via Maze with 45 participants revealed a 91% task success rate — up from 32% on the key transfer flow. Two more iteration rounds followed before final handoff.",
        activities: [
          "Unmoderated testing via Maze (n=45)",
          "A/B test on two CTA patterns",
          "Accessibility audit (WCAG 2.1 AA)",
          "Developer QA walkthrough",
        ],
      },
    ],
    outcome:
      "The redesigned app launched to 200k users across two test markets. Early data showed a 44% reduction in support contacts and a jump in the App Store rating from 2.1 to 4.6 stars.",
    metrics: [
      { label: "Task success rate", value: "91%" },
      { label: "Support contacts", value: "−44%" },
      { label: "App Store rating", value: "4.6 ★" },
      { label: "Time on task", value: "−38%" },
    ],
    nextSteps:
      "The next phase focuses on personalization — surfacing relevant content based on spending patterns — and a redesigned onboarding flow for new account holders.",
  },
  {
    slug: "health-dashboard",
    title: "Patient Health Dashboard",
    subtitle: "Making complex health data legible and actionable",
    category: "Web App",
    year: "2023",
    duration: "6 months",
    role: "UX Designer & Researcher",
    team: "1 UX designer, 1 visual designer, 2 engineers, 1 clinical advisor",
    tools: ["Figma", "UserTesting.com", "Miro", "Lookback"],
    tags: ["Healthcare", "Data Viz", "Accessibility", "Web"],
    gradient: "from-teal-50 via-cyan-50 to-white",
    overview:
      "A healthcare startup needed a patient-facing dashboard that translated raw lab results, vitals, and appointment data into a clear, anxiety-reducing experience. I owned research, IA, and interaction design across a 6-month engagement.",
    problem:
      "Patients were logging in and immediately calling their doctor for clarification — raw clinical numbers with no context caused confusion and anxiety. The goal was to make health data meaningful without requiring clinical training to interpret.",
    process: [
      {
        phase: "Discover",
        description:
          "Contextual inquiries with 8 patients across different health literacy levels and interviews with 4 nurses revealed a clear mental model mismatch between clinical data formats and patient expectations.",
        activities: [
          "8 contextual inquiries (in-home + remote)",
          "4 nurse interviews",
          "Health literacy assessment (REALM-R)",
          "Existing portal heuristic evaluation",
        ],
      },
      {
        phase: "Define",
        description:
          "Two distinct user archetypes emerged: the Vigilant Patient (high engagement, high anxiety) and the Reluctant Patient (low engagement, avoidance behavior). Each required a different information hierarchy.",
        activities: [
          "2 user archetypes with scenario maps",
          "Information needs prioritization",
          "Clinical advisor workshop on safe simplification",
          "Content strategy guidelines",
        ],
      },
      {
        phase: "Ideate",
        description:
          "I explored three different visualization approaches for lab results — traffic-light systems, range indicators, and trend lines — with clinical advisor review to validate which simplifications were medically safe.",
        activities: [
          "Data visualization explorations × 3",
          "Clinical safety review",
          "Low-fi concept testing (n=12)",
          "Content plain-language rewrite",
        ],
      },
      {
        phase: "Prototype",
        description:
          "The final design used a modular card system with color-coded context bands, plain-language summaries, and optional drill-down for users who wanted more detail.",
        activities: [
          "Modular card component system",
          "Responsive layout (desktop + mobile)",
          "Accessibility-first color system (WCAG AAA)",
          "Prototype in Figma (60+ screens)",
        ],
      },
      {
        phase: "Test",
        description:
          "Moderated testing showed patients could accurately interpret their own data in under 2 minutes — compared to 8 minutes with errors on the old portal. Anxiety self-report scores dropped measurably.",
        activities: [
          "Moderated remote testing (n=18)",
          "Comprehension accuracy scoring",
          "Anxiety self-report surveys",
          "Screen reader compatibility testing",
        ],
      },
    ],
    outcome:
      "The redesigned dashboard reduced post-login support calls by 52% in the first quarter after launch. Patient satisfaction scores for the portal increased from 3.2 to 4.7 out of 5.",
    metrics: [
      { label: "Support call reduction", value: "−52%" },
      { label: "Patient satisfaction", value: "4.7 / 5" },
      { label: "Comprehension accuracy", value: "94%" },
      { label: "Time to insight", value: "< 2 min" },
    ],
    nextSteps:
      "Planned enhancements include proactive health nudges, appointment scheduling integration, and a provider-facing view mirroring the patient dashboard for aligned conversations.",
  },
  {
    slug: "checkout-optimization",
    title: "E-commerce Checkout Optimization",
    subtitle: "Cutting friction to recover $2.3M in abandoned revenue",
    category: "Web",
    year: "2023",
    duration: "3 months",
    role: "UX Designer",
    team: "1 UX designer, 1 data analyst, 2 engineers, 1 PM",
    tools: ["Figma", "FullStory", "Optimizely", "Hotjar"],
    tags: ["E-commerce", "Conversion", "A/B Testing", "Funnel Optimization"],
    gradient: "from-amber-50 via-orange-50 to-white",
    overview:
      "A mid-market e-commerce retailer had a 78% checkout abandonment rate — well above the 70% industry average. I was brought in to diagnose friction points and redesign the checkout funnel using data and qualitative research.",
    problem:
      "The checkout flow had 6 steps, required account creation, and revealed shipping costs only at the final step. FullStory data showed rage-clicks spiking at the account creation gate and 40% drop-off at first sight of the shipping cost.",
    process: [
      {
        phase: "Discover",
        description:
          "Two weeks deep in data — FullStory funnels, Hotjar exit polls, and a competitive audit of 10 checkout flows — surfaced three high-impact drop-off points with actionable signals.",
        activities: [
          "Funnel analysis in FullStory",
          "Exit poll analysis (n=1,200)",
          "Competitive audit × 10 retailers",
          "Customer support ticket mining",
        ],
      },
      {
        phase: "Define",
        description:
          "The three biggest friction points were the mandatory account gate, late cost revelation, and a non-linear form that broke mobile auto-fill. I defined success metrics and secured stakeholder alignment on guest checkout.",
        activities: [
          "Friction point prioritization",
          "Stakeholder alignment workshop",
          "Success metrics definition",
          "Technical constraint mapping",
        ],
      },
      {
        phase: "Ideate",
        description:
          "Three checkout concepts ranging from minimal changes (add guest checkout) to a full one-page redesign were evaluated against business constraints and development cost.",
        activities: [
          "3 checkout flow concepts",
          "Cost/impact matrix",
          "Internal stakeholder review",
          "Progressive disclosure explorations",
        ],
      },
      {
        phase: "Prototype",
        description:
          "I redesigned checkout from 6 steps to 3, moved shipping cost estimation to the cart page, and made account creation optional with clear value framing for signing up.",
        activities: [
          "Wireframes → high-fidelity in Figma",
          "Desktop + mobile responsive designs",
          "Error state and edge case coverage",
          "Micro-interaction specs",
        ],
      },
      {
        phase: "Test",
        description:
          "A/B testing via Optimizely showed the new flow increasing conversion by 23% after 3 weeks. A second mobile-specific iteration added another 8% lift.",
        activities: [
          "A/B test setup in Optimizely",
          "Statistical significance monitoring",
          "Mobile-specific iteration",
          "Post-launch usability check",
        ],
      },
    ],
    outcome:
      "The redesigned checkout increased conversion from 2.1% to 2.7% — recovering an estimated $2.3M in previously abandoned revenue annually. Mobile conversion saw the largest single improvement.",
    metrics: [
      { label: "Conversion rate lift", value: "+29%" },
      { label: "Recovered revenue", value: "$2.3M / yr" },
      { label: "Abandonment rate", value: "−18 pts" },
      { label: "Mobile conversion", value: "+41%" },
    ],
    nextSteps:
      "Next phase includes a saved cart and wishlist feature, post-purchase upsell testing, and loyalty program integration into the checkout flow.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
