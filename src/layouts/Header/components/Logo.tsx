import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1.5 sm:gap-2 relative z-10 group"
    >
      <div className="relative w-8 h-8 sm:w-10 sm:h-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-amber-500 rounded-lg rotate-45 transform origin-center group-hover:scale-105 transition-transform"></div>
        <div className="absolute inset-[2.5px] sm:inset-[3px] bg-black rounded-lg flex items-center justify-center text-white font-bold">
          N
        </div>
      </div>
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
        Nova
      </span>
    </Link>
  );
}
