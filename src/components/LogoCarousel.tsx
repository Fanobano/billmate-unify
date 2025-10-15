import React from "react";

const logos = [
  { name: "Netflix", color: "bg-[#E50914]", textColor: "text-white" },
  { name: "Spotify", color: "bg-[#1DB954]", textColor: "text-white" },
  { name: "Canva", color: "bg-[#00C4CC]", textColor: "text-white" },
  { name: "Figma", color: "bg-[#F24E1E]", textColor: "text-white" },
  { name: "Disney+", color: "bg-[#113CCF]", textColor: "text-white" },
  { name: "Apple Music", color: "bg-[#FA243C]", textColor: "text-white" }
];

const LogoCarousel = () => {
  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 shadow-2xl">
      <div className="flex animate-scroll-infinite space-x-6 sm:space-x-8">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className={`flex-shrink-0 flex items-center justify-center ${logo.color} ${logo.textColor} rounded-lg sm:rounded-xl shadow-lg h-20 sm:h-24 w-32 sm:w-40 font-bold text-base sm:text-lg transition-transform hover:scale-110`}
          >
            {logo.name}
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 h-full w-16 sm:w-20 bg-gradient-to-r from-background/80 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-16 sm:w-20 bg-gradient-to-l from-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LogoCarousel;
