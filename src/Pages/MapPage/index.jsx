// src/Pages/MapPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

// Data level
const nodes = [
  { id: 1, x: 530, y: 2000, stars: 3, unlocked: true },
  { id: 2, x: 800, y: 1840, stars: 3, unlocked: true },
  { id: 3, x: 930, y: 1640, stars: 2, unlocked: true },
  { id: 4, x: 735, y: 1420, stars: 0, unlocked: true },
  { id: 5, x: 535, y: 1255, stars: 0, unlocked: true },
  { id: 6, x: 250, y: 1200, stars: 0, unlocked: true },
  { id: 7, x: 450, y: 1050, stars: 0, unlocked: true },
  { id: 8, x: 700, y: 960, stars: 0, unlocked: true },
  { id: 9, x: 750, y: 740, stars: 0, unlocked: true },
  { id: 10, x: 600, y: 430, stars: 0, unlocked: true },
  { id: 11, x: 500, y: 190, stars: 0, unlocked: true },
  { id: 12, x: 865, y: 140, stars: 0, unlocked: true },
];

const CubeButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-full relative inline-block font-poppins text-[18px] text-yellow-300 tracking-[0.1em] cursor-pointer outline-none border-0 group w-[100px] h-[100px] transition-transform active:scale-95 hover:scale-105
    shadow-[0_0_15px_4px_rgba(0,255,0,0.6),
        0_0_20px_6px_rgba(163,230,53,0.6)]
    animate-[glow_3s_ease-in-out_infinite]"
  >
    {/* Background main */}
    <div className="rounded-full absolute inset-0 bg-green-900 transition-all duration-300 group-hover:bg-green-950 z-0" />

    {/* Inner cube (gambar) */}
    <div className="rounded-full absolute inset-[2px] bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] bg-cover bg-center transition-all duration-300 group-hover:bg-green-600 opacity-90 z-[1]" />

    {/* Text */}
    <span className="relative z-[2] transition-all duration-300 group-hover:text-yellow-200 select-none">
      {text}
    </span>
  </button>
);

export default function MapPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-pink-50 to-green-50">
      {/* Top bar */}
      <div className="w-full max-w-md px-4 pt-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/80 px-3 py-1 rounded-full shadow">❤️ x5</div>
          <div className="bg-white/80 px-3 py-1 rounded-full shadow">2500</div>
        </div>
        <div className="text-sm text-gray-700 font-medium">PlayerName</div>
      </div>

      {/* Map container */}
      <div className="w-full max-w-9xl bg-[url('https://i.pinimg.com/736x/6f/95/23/6f9523a6fd1d40c0a32c76bf50e18f30.jpg')] bg-no-repeat bg-center bg-cover">
        <div
          className="relative rounded-xl overflow-hidden shadow-lg bg-[url('/assets/map-bg.png')] bg-cover bg-center"
          style={{ aspectRatio: "9/16" }}
        >
          {/* SVG path di bawah tombol */}
          <svg
            viewBox="0 0 360 780"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full absolute top-0 left-0"
          >
            <path
              d="M180 720 C 0 650, 520 620, 240 560
                 C 250 520, 200 500, 200 460
                 C 200 420, -150 450, 140 360
                 C 240 330, 300 300, 220 260
                 C 160 220, 180 200, 180 160
                 C 160 100, 100 140, 85 95
                 C 100 10, 260 160, 270 20"
              fill="none"
              stroke="#fce7f3"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M180 720 C 0 650, 520 620, 240 560
                 C 250 520, 200 500, 200 460
                 C 200 420, -150 450, 140 360
                 C 240 330, 300 300, 220 260
                 C 160 220, 180 200, 180 160
                 C 160 100, 100 140, 85 95
                 C 100 10, 260 160, 270 20"
              fill="none"
              stroke="#fff"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>

          {/* Tombol level */}
          <div className="absolute inset-0">
            {nodes.map((n) => (
              <div
                key={n.id}
                className="absolute"
                style={{
                  left: `${n.x}px`,
                  top: `${n.y}px`,
                  transform: "translate(-50%, -50%)",
                  opacity: n.unlocked ? 1 : 0.4,
                }}
              >
                <CubeButton
                  text={n.id} // ⬅️ cuma angka aja
                  onClick={() =>
                    n.unlocked && navigate(`/level/${n.id}/intro`)
                  }
                />
              </div>
            ))}
          </div>

          {/* Bottom navbar */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-3 py-2 bg-white/70">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-semibold px-3 py-2 rounded-lg bg-yellow-200 shadow"
            >
              MAP
            </button>
            <button
              onClick={() => alert("Events coming soon")}
              className="text-sm font-semibold px-3 py-2 rounded-lg bg-pink-200 shadow"
            >
              EVENTS
            </button>
            <button
              onClick={() => alert("Shop coming soon")}
              className="text-sm font-semibold px-3 py-2 rounded-lg bg-emerald-200 shadow"
            >
              SHOP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
