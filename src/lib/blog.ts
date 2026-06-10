export type BodyBlock =
  | string
  | { type: "linkedin"; src: string; height?: number };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  topics: string[];
  coverImage?: string;
  body: BodyBlock[];
}

export const articles: Article[] = [
  {
    slug: "article1",
    title: "AI Usage in XGames Events: Social Acceptance",
    excerpt:
      "Diving into the introduction of Owl AI, reflecting on its capabilities and the various outlooks it has received.",
    author: "Noah Henry",
    date: "Feb, 2026",
    topics: ["Sports Technology", "AI"],
    coverImage: "/blog/Mark-McMorrisPodium_mens_sbd_slopestyle_xgames_aspen_2026_Mark_Dillon-08913.jpg",
    body: [
      "Artificial intelligence is starting to shape the way sports are analyzed and experienced, and one company helping push this shift is Owl AI. The company's computer vision systems analyze video in real-time, identifying and tracking athletes in both movement and performance. Their technology is designed to transform raw competition footage into detailed insights for broadcasters, analysts, judges, and fans.",
      "By applying machine learning, the platform can detect movements and generate analytics to explain what's happening in high speed environments. In the XGames, this means highlighting trick difficulty, movement patterns, and performance metrics. This technology allows viewers to gain a deeper understanding of what athletes are doing in real-time. Additionally, broadcasters can more accurately report on their breakdowns of runs and tricks.",
      "Public reception of this tool has leaned towards curiosity and excitement, as Owl AI has been growing its online presence and expanding into other sports. XGames CEO and former Olympic skier Jeremy Bloom is periodically updating his social platforms with posts on the technology's success.",
      { type: "linkedin", src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7387178503613558784", height: 773 },
      "His comments on Owl AI reflect a growing sentiment in the sports world that AI tools could reshape how athlete performances are analyzed. However, some critics of the technology have questioned how it could impact human judging and creativity. Among a group of dedicated XGames fans on Reddit, complaints were made about the AI analysis affected some live runs. Others noted their skepticism of AI entering the XGames scene at all, pushing for judging and commentary to remain the same as previous years.",
      "The response to Owl AI at the XGames seems to reflect a broader viewpoint on the integration of AI technologies in fields that are deep rooted in culture and tradition. Feedback from fans must be taken seriously, as they are the ones ultimately driving the extreme sports scene. Owl AI has the potential to set up the future of sports, filled with deeper analysis and richer storytelling for broadcasts.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
