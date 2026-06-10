"use client";

const tools = [
  { name: "Adobe",      src: "/home/adobe_svg.svg",     width: 115 },
  { name: "Framer",     src: "/home/framer_svg.svg",    width: 94 },
  { name: "Figma",      src: "/home/figma_svg.svg",     width: 109 },
  { name: "Miro",       src: "/home/miro_svg.svg",      width: 82 },
  { name: "Qualtrics",  src: "/home/qualtrics_svg.svg", width: 94 },
];

const tripled = [...tools, ...tools, ...tools];

export default function ToolMarquee() {
  return (
    <section className="py-10 overflow-hidden" style={{ backgroundColor: "rgb(72, 78, 196)" }}>
      <p className="text-center text-white/50 text-xs font-semibold uppercase tracking-widest mb-8">
        Experienced in
      </p>
      <div className="flex">
        <div className="flex items-center gap-16 animate-marquee flex-shrink-0 pr-16">
          {tripled.map((tool, i) => (
            <img
              key={i}
              src={tool.src}
              alt={tool.name}
              width={tool.width}
              height={30}
              className="flex-shrink-0 opacity-90"
              style={{ height: 30, width: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
