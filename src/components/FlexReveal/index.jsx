import React, { useState } from "react";

const panels = [
  { id: 1, title: "Mountains", subtitle: "Explore the peaks", bg: "https://picsum.photos/800/600?1" },
  { id: 2, title: "Beach", subtitle: "Relax by the sea", bg: "https://picsum.photos/800/600?2" },
  { id: 3, title: "City", subtitle: "Night lights", bg: "https://picsum.photos/800/600?3" },
  { id: 4, title: "Forest", subtitle: "Green escape", bg: "https://picsum.photos/800/600?4" },
  { id: 5, title: "Desert", subtitle: "Golden dunes", bg: "https://picsum.photos/800/600?5" },
];

function FlexReveal() {
  const [active, setActive] = useState(1);

  return (
    <div className="panel-wrapper flex gap-4 w-[90%] h-[400px] mx-auto">
      {panels.map((p) => (
        <div
          key={p.id}
          onClick={() => setActive(p.id)}
          className={`panel relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(.2,.9,.2,1)] ${
            active === p.id ? "flex-[5]" : "flex-1"
          }`}
          style={{
            backgroundImage: `url(${p.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Subtitle + Title */}
          {active === p.id && (
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <span className="block text-sm opacity-80">{p.subtitle}</span>
              <span className="block text-xl font-semibold">{p.title}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FlexReveal;
