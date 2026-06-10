/*
  Background: rgb(195, 235, 228) — relative luminance ≈ 0.76
  Primary text #0a0a0a         — contrast vs bg ≈ 16.0:1  ✓ AAA
  Secondary text #2d6b62       — contrast vs bg ≈  4.7:1  ✓ AA
  Muted text #4a8a80           — contrast vs bg ≈  3.2:1  ✓ AA large/UI
  Active dot #1f5c54           — contrast vs bg ≈  6.8:1  ✓ AA
  Inactive dot rgb(155,210,203)— decorative, non-text
  Card bg rgba(255,255,255,0.55) — inner surface only
*/

const layers = [
  {
    n: "01",
    label: "Glanceable Score",
    tag: "Always visible",
    depth: 1,
  },
  {
    n: "02",
    label: "Narrative Coaching",
    tag: "Default expanded",
    depth: 2,
  },
  {
    n: "03",
    label: "Rep-by-Rep Data",
    tag: "On demand",
    depth: 3,
  },
];

const ACTIVE_DOT   = "#1f5c54";
const INACTIVE_DOT = "rgb(155,210,203)";
const TEXT_PRIMARY = "#0a0a0a";
const TEXT_SECONDARY = "#2d6b62";
const TEXT_MUTED   = "#4a8a80";

export default function HapticFindingsVisual() {
  return (
    <div
      className="rounded-2xl p-7 flex flex-col justify-between h-full gap-6"
      style={{ backgroundColor: "rgb(195, 235, 228)" }}
    >
      {/* Header */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: TEXT_MUTED }}>
          Preferred Visualization Architecture
        </p>
        <p className="text-base font-bold leading-snug" style={{ color: TEXT_PRIMARY }}>
          Layered depth, athlete's choice.
        </p>
      </div>

      {/* Layers */}
      <div className="flex flex-col gap-3">
        {layers.map((l) => (
          <div
            key={l.n}
            className="flex items-center gap-4 rounded-xl px-4 py-3.5"
            style={{ backgroundColor: "rgba(255,255,255,0.55)" }}
          >
            {/* Depth dots */}
            <div className="flex gap-1 shrink-0">
              {[1, 2, 3].map((d) => (
                <span
                  key={d}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: d <= l.depth ? ACTIVE_DOT : INACTIVE_DOT }}
                />
              ))}
            </div>

            {/* Label */}
            <span className="text-sm font-semibold flex-1" style={{ color: TEXT_PRIMARY }}>
              {l.label}
            </span>

            {/* Tag */}
            <span className="text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap" style={{ color: TEXT_SECONDARY }}>
              {l.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="text-[11px] leading-relaxed" style={{ color: TEXT_SECONDARY }}>
        No single prototype won. Athletes needed different depths based on fatigue, goal, and preference — a layered system accommodates all three.
      </p>
    </div>
  );
}
