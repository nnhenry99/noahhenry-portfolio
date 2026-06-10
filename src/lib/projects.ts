export interface Metric {
  label: string;
  value: string;
  placeholder?: boolean;
}

export interface ProcessPhase {
  phase: string;
  summary: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
  media?: { type: "image" | "video"; src: string };
  wide?: boolean;
  visual?: string;
}

export interface Quote {
  name: string;
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Outcome-focused one-liner shown on cards */
  tagline: string;
  /** Longer description for detail page overview */
  subtitle: string;
  categories: string[];
  role: string;
  client?: string;
  date: string;
  cardColor: string;
  /** Optional cover image shown on project cards */
  coverImage?: string;
  hmw: string;
  overview: string;
  process: ProcessPhase[];
  sections: ProjectSection[];
  quotes?: Quote[];
  metrics: Metric[];
  learnings: { title: string; body: string }[];
}

// Ordered chronologically: most recent first
export const projects: Project[] = [
  {
    slug: "hapticcoach",
    title: "Haptic Strength Coach",
    tagline: "Built and tested a wrist-mounted haptic wearable achieving 100% rep tempo compliance across all 10 participants in a live gym study.",
    subtitle:
      "A two-phase R.I.T. M.S. HCI capstone combining a custom Arduino-based haptic prototype and three Figma post-workout visualization designs, examining how real-time wearable feedback and adaptive analytics can improve strength training performance.",
    categories: ["Sports Technology", "HCI Research"],
    role: "User Researcher & UX Designer",
    client: "R.I.T. M.S. HCI Capstone",
    date: "Aug 2025 – May 2026",
    cardColor: "bg-[rgb(195,235,228)]",
    coverImage: "/projects/hapticcoach/prototype-view2.png",
    hmw: "How might we provide comprehensible, non-intrusive haptic feedback to strength athletes during lifts, and translate their rep data into meaningful post-workout insights?",
    overview:
      "Controlled rep tempo is essential to strength training performance, yet most athletes rely entirely on memory with no real-time guidance. Camera and screen-based systems are impractical in live gym environments, as they demand attention and create safety risks. This capstone addressed that gap with a self-contained wrist-mounted haptic device paired with a post-workout visualization study, validated across two phases with 10 intermediate-to-advanced athletes in a real gym setting.",
    process: [
      {
        phase: "Research",
        summary: "Reviewed HCI literature on wearable sports feedback, haptic signal design, and personal informatics visualization. Identified the core gap: no low-cost, screen-free pacing solution validated in ecological gym conditions.",
      },
      {
        phase: "Define",
        summary: "Established two research questions: R1, can haptic cues produce comprehensible pacing feedback during lifts? R2, how should rep accuracy data be visualized post-workout? Each drove a separate study phase.",
      },
      {
        phase: "Design",
        summary: "Built a wrist-mounted Arduino Uno R3 prototype with Grove vibration motors and a 3D-printed casing. Mapped the 3-1-X-1 bench press tempo to four vibration phases. Designed three competing Figma visualization prototypes: Hybrid, Qualitative, and Quantitative.",
      },
      {
        phase: "Test",
        summary: "Ran a two-phase study with N=10 intermediate/advanced lifters. Phase 1 tested the haptic prototype during live bench press sets. Phase 2 evaluated all three Figma prototypes on mobile, using thematic analysis with axial coding across both phases.",
      },
    ],
    sections: [
      {
        heading: "Wearable Prototype",
        body: "The device was fully self-contained and battery-powered, with no external computer or camera required during lifts. Built with an Arduino Uno R3, Grove Base Shield, dual vibration motors, a 3-axis accelerometer, and a 3D-printed casing with a velcro strap. Firmware used millis()-based non-blocking delays to ensure precise vibration timing without interrupting sensor reads.",
        media: { type: "image", src: "/projects/hapticcoach/prototype-standalone3.png" },
      },
      {
        heading: "Haptic Pattern Design",
        body: "The 3-1-X-1 tempo notation (3s eccentric, 1s bottom pause, explosive concentric, 1s top pause) was mapped to distinct vibration patterns for each phase. The eccentric phase used 3 pulses at 1/second, the clearest signal window. The concentric phase was silent, relying on the accelerometer to detect upward movement. All 10 participants interpreted the vibration pattern correctly within 1–2 sets.",
        media: { type: "image", src: "/projects/hapticcoach/prototype-view2.png" },
      },
      {
        heading: "Post-Workout Visualization Prototypes",
        body: "Three Figma prototypes explored how rep tempo data should be presented post-set. All three used the same simulated rep tempo dataset to ensure fair, consistent comparisons across all 10 participants.",
      },
      {
        heading: "Hybrid Prototype",
        body: "Combines a circular tempo score with an AI coaching summary, phase averages, and a rep journey visualization. Blends precise numbers with narrative context, giving athletes both a quick glance score and the reasoning behind it.",
        media: { type: "video", src: "/projects/hapticcoach/hybrid.mp4" },
      },
      {
        heading: "Qualitative Prototype",
        body: "Prioritizes narrative coaching feedback, rep highlights, and fatigue notation over raw data. Designed for athletes who prefer language and interpretation, this prototype focuses on what the numbers mean rather than the numbers themselves.",
        media: { type: "video", src: "/projects/hapticcoach/qualitative.mp4" },
      },
      {
        heading: "Quantitative Prototype",
        body: "Full precision data for analytically-minded athletes. Presents per-rep timing charts, trend lines, and a rep-by-rep data table, giving athletes complete visibility into their performance without any narrative framing.",
        media: { type: "video", src: "/projects/hapticcoach/quantitative.mp4" },
      },
      {
        heading: "Study Findings",
        body: "Thematic analysis across both phases produced five themes: signal clarity, behavioral effect, cognitive load, perceived support, and design iteration requirements. 10/10 participants achieved tempo compliance within two sets. No participant described the feedback as intrusive; the dominant characterization was 'supportive, like having a spotter.' For visualization, no single prototype dominated; a layered architecture (glanceable score → narrative coaching → optional rep-by-rep data) best accommodated the full range of athlete preferences.",
        visual: "haptic-findings",
      },
    ],
    metrics: [
      { label: "Participants", value: "10", placeholder: false },
      { label: "Tempo compliance", value: "100%", placeholder: false },
      { label: "Haptic signal accuracy", value: "10 / 10", placeholder: false },
      { label: "Study phases", value: "2", placeholder: false },
    ],
    learnings: [
      {
        title: "Haptic Channels Don't Compete with Focus",
        body: "Unlike camera or screen systems, haptic feedback doesn't occupy the visual or auditory channel. Participants noted it didn't compete with music or require them to look away. This is a fundamental advantage in live gym environments where distraction is a safety risk.",
      },
      {
        title: "Preference is Contextual, Not Universal",
        body: "Athletes didn't uniformly prefer quantitative or qualitative post-workout feedback. Fatigue level, goals, and analytical orientation all shaped which prototype resonated. A layered architecture that lets users choose depth is more effective than optimizing for one profile.",
      },
      {
        title: "Ecological Validity is Achievable on a Low Budget",
        body: "A $40 Arduino setup proved viable in a real gym under real load conditions. Proving feasibility in the actual environment (not a lab) was the most important validation step, and it changed what design constraints actually mattered.",
      },
    ],
  },
  {
    slug: "swapcut",
    title: "SwapCut",
    tagline: "Redesigned AI hairstyle preview flow, cutting onboarding friction and lifting subscription conversions.",
    subtitle:
      "Leveraging AI-powered technology to help users preview haircuts and colors from multiple angles before committing. As the UX designer, I crafted the hairstyle and color selection flow, multi-angle hairstyle visualizations, and a feature that translates selected styles into actionable talking points for their stylist.",
    categories: ["Lifestyle & AI", "UX Design"],
    role: "UX Designer, Contract",
    client: "Parallel Distribution",
    date: "Dec 2025 – Mar 2026",
    cardColor: "bg-[rgb(255,214,235)]",
    coverImage: "/projects/swapcut/swapcut_cover.png",
    hmw: "How might we help individuals confidently explore and choose new hairstyles, reducing uncertainty and miscommunication while enhancing their overall salon experience?",
    overview:
      "Parallel Distribution brought me in to redesign SwapCut's core flows (onboarding, style browsing, and subscription conversion) in a fast-paced, iterative contract engagement. The product uses AI image generation to preview hairstyles on a user's photo.",
    process: [
      { phase: "Research", summary: "Reviewed session recordings and exit surveys to identify the highest-friction points in the existing onboarding and style-selection flows." },
      { phase: "Define", summary: "Mapped the key drop-off moments: a long mandatory question set, costly per-tap image generation, and a subscription paywall with weak value framing." },
      { phase: "Design", summary: "Redesigned onboarding to be optional and GIF-driven. Introduced model preview before photo upload to cut generation costs. Prototyped 3 subscription UX variants for A/B testing." },
      { phase: "Test", summary: "Ran A/B tests on price model, UX writing, and microcopy. Iterated rapidly based on conversion data from each release cycle." },
    ],
    sections: [
      {
        heading: "Onboarding",
        body: "In the first iteration, users were required to answer a long series of questions. Now, after answering some optional questions, the user is guided through how the app works with captivating looped GIFs and short descriptions.",
        media: { type: "video", src: "/projects/swapcut/Onboarding.mp4" },
      },
      {
        heading: "Browsing Styles",
        body: "Users have the option to preview hairstyles on a model before applying the hairstyle to their uploaded photo. Previously, users would generate a new style when selecting the style's image card. This method significantly cut costs on image generation.",
        media: { type: "video", src: "/projects/swapcut/HairSelect.mp4" },
      },
      {
        heading: "Further Hairstyle Insights",
        body: "Users can receive precise, technical hairstyle instructions to easily share with their stylist. They can also view their hairstyle from 4 different views, simulating a 360 degree view of their new look.",
        media: { type: "video", src: "/projects/swapcut/Stylist.mp4" },
      },
      {
        heading: "A/B Testing: Subscription UI & Price Model",
        body: "By experimenting with price models, UX writing, and microcopy, we were able to convert more users to subscribers.",
        media: { type: "image", src: "/projects/swapcut/Subscription Changes.png" },
      },
    ],
    metrics: [
      { label: "Subscription conversion lift", value: "+26%", placeholder: false },
      { label: "Onboarding completion", value: "+43%", placeholder: false },
      { label: "Demo image generation cost", value: "-100%", placeholder: false },
      { label: "A/B test iterations", value: "3", placeholder: false },
    ],
    learnings: [
      {
        title: "Collaborating with Developers",
        body: "Designing effective UX/UI solutions required clear and intentional communication throughout each iteration. Even small details in documentation and handoff can significantly influence how developers interpret and implement a design.",
      },
      {
        title: "Understanding the Business Impact of UX",
        body: "This experience reinforced how closely UX decisions are tied to business outcomes. By redesigning friction points, I helped streamline the experience while contributing to measurable cost reductions across new user accounts.",
      },
      {
        title: "Iterate Quickly to Improve Faster",
        body: "Instead of relying solely on extended upfront research, we used insights gathered from each release cycle to identify usability issues and prioritize improvements through rapid design sprints.",
      },
    ],
  },
  {
    slug: "gamervault",
    title: "GamerVault",
    tagline: "Designed a finance tracker for gamers from 0→1, including a full design system and usability-tested budgeting flows.",
    subtitle:
      "Empowering users to track their gaming-related expenses, including game purchases, microtransactions, and subscriptions, all in one place. By providing detailed insights, budgeting tools, and seamless integration with gaming platforms, GamerVault helps gamers stay in control of their spending.",
    categories: ["Finance & Budgeting", "UX Design"],
    role: "User Researcher & UX Designer",
    date: "Jun 2024 – Nov 2024",
    cardColor: "bg-[rgb(219,255,235)]",
    coverImage: "/projects/gamervault/GamerVault Cover Transparent.png",
    hmw: "How can we empower gamers to effectively manage and optimize their gaming expenses, ensuring financial well-being while enhancing their overall gaming experience?",
    overview:
      "GamerVault was a 0-to-1 design project built in collaboration with another designer. I led user research, information architecture, and the budgeting and wishlist flows, while co-establishing the design system used across the entire product.",
    process: [
      { phase: "Research", summary: "Conducted usability testing and competitive analysis to understand how gamers currently track spending and where existing tools fall short." },
      { phase: "Define", summary: "Mapped core user needs around visibility, control, and trust, particularly around linking bank accounts and setting budgets by category or game." },
      { phase: "Design", summary: "Designed the IA around four core pages: Dashboard, Transactions, Gaming, and Budget. Built an 80+ component design system to ensure consistency across both designers' work." },
      { phase: "Test", summary: "Ran usability testing on the budgeting flow and wishlist, identifying navigation issues with the initial budget interface that were fixed before final handoff." },
    ],
    sections: [
      {
        heading: "Budgeting",
        body: "The budgeting screens enable users to set a budget for a desired time period. They can then set up specific budgets based on category or by game. Users can also view their spending trends to help make better financial decisions.",
        media: { type: "video", src: "/projects/gamervault/Budget_3MB.mp4" },
      },
      {
        heading: "Transactions",
        body: "Users can track all of their gaming related transactions in one location. These transactions are separated into one time payments and recurring payments.",
        media: { type: "video", src: "/projects/gamervault/Transactions_1MB.mp4" },
      },
      {
        heading: "Wishlist",
        body: "The wishlist enables users to determine whether their wanted products fit in their current budget. This helps them make informed decisions on their next purchase.",
        media: { type: "video", src: "/projects/gamervault/Wishlist_1MB.mp4" },
      },
      {
        heading: "Competitive Analysis",
        body: "We analyzed four competing tools across nine feature dimensions to identify the gap GamerVault could fill. Rocket Money and Mint offered strong financial foundations but lacked any gaming-specific context. Steam and Mana had gaming orientation but no budgeting depth. GamerVault was designed to be the only product that checked every box.",
        media: { type: "image", src: "/projects/gamervault/Comparative.png" },
      },
      {
        heading: "Information Architecture",
        body: "Establishing a clear and intuitive IA was crucial in the early stages. By organizing the app around Dashboard, Transactions, Gaming, and Budget, I ensured users could easily navigate and manage their gaming finances.",
        media: { type: "image", src: "/projects/gamervault/Information Architecture.png" },
      },
      {
        heading: "Design System",
        body: "An 80+ component design system was built before any high-fidelity work began. Using a dark theme with green accents, the system covered typography, color tokens, form elements, navigation patterns, and data visualization components, ensuring both designers worked from the same foundation throughout the project.",
        media: { type: "image", src: "/projects/gamervault/Design System.png" },
        wide: true,
      },
      {
        heading: "Testing: Budgeting Changes",
        body: "Users had difficulty navigating the initial budget interface. By creating clearer buttons and budgeting cards on a single page, users could now easily navigate through the budgeting screen.",
        media: { type: "image", src: "/projects/gamervault/Budget Changes.png" },
      },
      {
        heading: "Bank Linking and User Trust",
        body: "Users raised concerns about linking credit cards. We implemented Plaid integration, which users said they trust, resolving the key trust barrier.",
        media: { type: "image", src: "/projects/gamervault/Onboarding Changes.png" },
      },
    ],
    metrics: [
      { label: "Design system components", value: "80+", placeholder: false },
      { label: "Task completion (budgeting)", value: "100%", placeholder: false },
      { label: "Navigation error rate", value: "-74%", placeholder: false },
      { label: "Usability test rounds", value: "2", placeholder: false },
    ],
    learnings: [
      {
        title: "Openness to User Feedback",
        body: "Functionality we thought was intuitive didn't work for some users. It was important to change these to more recognizable patterns rather than forcing users to adapt.",
      },
      {
        title: "Importance of a Design System",
        body: "Setting up a complete design system before high-fidelity design saves significant time and keeps two designers perfectly in sync.",
      },
      {
        title: "Communication in Co-Designing",
        body: "When designing a product simultaneously with another designer, setting standards and timelines up front is essential for a cohesive, fleshed-out result.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
