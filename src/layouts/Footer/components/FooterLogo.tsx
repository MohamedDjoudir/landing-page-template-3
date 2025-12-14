import Link from "next/link";

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 mb-6">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-amber-500 rounded-lg rotate-45 transform origin-center"></div>
        <div className="absolute inset-[3px] bg-black rounded-lg flex items-center justify-center text-white font-bold">
          N
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
        Nova
      </span>
    </Link>
  );
}
