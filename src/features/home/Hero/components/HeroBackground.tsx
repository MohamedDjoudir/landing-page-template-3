export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>

      <div className="absolute top-1/3 start-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-red-500/20 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 end-1/3 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-amber-500/20 blur-[100px] animate-pulse-slow delay-1000"></div>

      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-10"></div>
    </div>
  );
}
