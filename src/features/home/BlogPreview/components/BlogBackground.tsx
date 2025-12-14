"use client";

export function BlogBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full blur-[100px]"></div>
    </div>
  );
}
