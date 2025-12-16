import { useState, useEffect} from "react";

const Banner: React.FC = () => {
  const [activeSide, setActiveSide] = useState<"left" | "right" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setActiveSide(x < rect.width / 2 ? "left" : "right");
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    setActiveSide(null);
  };

  return (
    <div
      className="relative w-full h-[200px] md:h-[550px] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT IMAGE */}
      <div
        className="absolute inset-0 w-full transition-transform duration-1500 ease-in-out border-b-2 border-gray-500"
        style={{
          transform:
            activeSide === "left"
              ? "translateX(0)"
              : activeSide === "right"
              ? "translateX(-100%)"
              : "translateX(-50.1%)",
        }}
      >
        <img
          src="robotic.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="absolute inset-0 w-full transition-transform duration-1500 ease-in-ou border-b-2 border-gray-500"
        style={{
          transform:
            activeSide === "right"
              ? "translateX(0)"
              : activeSide === "left"
              ? "translateX(100%)"
              : "translateX(50.1%)",
        }}
      >
        <img
          src="artsy.png"
          className="w-full h-full object-cover scale-y-[-1]"
        />
      </div>

      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
    </div>
  );
};

export default Banner;
