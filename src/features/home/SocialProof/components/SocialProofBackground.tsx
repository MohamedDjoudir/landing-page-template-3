"use client";

export function SocialProofBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-50" aria-hidden="true">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
    </div>
  );
}
