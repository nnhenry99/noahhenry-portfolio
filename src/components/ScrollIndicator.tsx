export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 select-none">
      {/* Mouse outline */}
      <div className="w-6 h-9 rounded-full border-2 border-zinc-400 flex justify-center pt-1.5">
        <div
          className="w-1 h-2 rounded-full bg-zinc-400 animate-scroll-dot"
          style={{ animationDuration: "1.4s" }}
        />
      </div>
      {/* Label */}
      <div className="text-center">
        <p className="text-xs font-medium text-zinc-400 leading-none">Scroll down</p>
        <p className="text-xs text-zinc-400 leading-none mt-0.5">to see projects</p>
      </div>
    </div>
  );
}
