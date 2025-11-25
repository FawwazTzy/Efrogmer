import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LEVELS from "../../Data/Question";

export default function LevelIntro() {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const level = LEVELS.find((lvl) => lvl.id === parseInt(levelId));

  const progress =
    JSON.parse(localStorage.getItem(`level_${levelId}`)) || {
      score: 0,
      stars: 0,
    };

  if (!level) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Level not found!
      </div>
    );
  }

  // FIXED: hooks must be inside component
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () =>
      setIsPortrait(window.innerHeight > window.innerWidth);

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return (
    <div className="h-screen w-screen bg-yellow-900 text-white p-2 sm:p-4 overflow-hidden relative">
      {isPortrait && (
        <div className="absolute inset-0 z-50 bg-emerald-950/90 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
            Please Rotate Your Device!
          </h2>
          <p className="text-sm sm:text-lg">
            This game works best in landscape mode.
          </p>
        </div>
      )}

      <div className="relative min-h-screen text-gray-50 overflow-hidden flex items-center justify-center px-3 py-4">
        {/* BG */}
        <div className="absolute inset-0 bg-[#031017]">
          <div className="absolute inset-0 opacity-35 bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] bg-center bg-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,#0c2236_0%,#02080d_90%)] opacity-60" />
        </div>

        <div className="relative w-full max-w-5xl flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          {/* LEFT PANEL */}
          <div
            className="w-[95px] sm:w-[110px] md:w-32
          h-[300px] sm:h-[350px] md:h-[420px]
          rounded-xl bg-emerald-600/30 backdrop-blur-lg 
          border border-emerald-500/40 shadow-[0_0_18px_rgba(0,255,180,0.28)]
          flex flex-col items-center justify-start pt-5 mx-auto md:mx-0"
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full 
            bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
            bg-cover bg-center text-[#0c1a28] flex items-center justify-center
            text-2xl font-poppins border border-emerald-900 shadow-lg"
            >
              {level.id}
            </div>

            <div
              className="mt-4 w-20 h-28 sm:w-24 sm:h-36 rounded-lg 
            bg-[url('https://i.pinimg.com/1200x/8b/5c/50/8b5c509902b8a1a4cf9e062f9cbe40d9.jpg')] 
            bg-cover bg-center border border-white/10 shadow-md"
            />

            <p className="absolute font-poppins bg-slate-200 p-4 bottom-16 w-full text-center text-gray-900 font-semibold text-sm z-[20]">
              ⭐ {progress.stars}
              <br />
              Score: <span className="text-blue-600">{progress.score}</span>
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="flex-1 p-4 sm:p-6 rounded-xl 
          bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
          bg-cover bg-center border border-white/20 backdrop-blur-lg shadow-xl"
          >
            <h1 className="text-xl sm:text-2xl font-poppins font-semibold text-emerald-900 drop-shadow-sm">
              Level {level.id}
            </h1>
            <p className="text-sm sm:text-base mt-0.5 font-poppins text-emerald-900 capitalize">
              {level.targetPos}
            </p>

            <div className="mt-3">
              <ul className="text-[13px] sm:text-sm space-y-1 text-gray-200/90 list-disc ml-5">
                {level.effects?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-norwester text-yellow-400 mb-2 drop-shadow">
                🎯 Challenge Target
              </h2>

              <div
                className="w-full font-poppins bg-black/50 border border-white/15
              px-3 py-2 rounded-md space-y-1.5 text-xs sm:text-sm text-gray-200"
              >
                <p>
                  <span className="font-semibold text-yellow-300">
                    Definition:
                  </span>{" "}
                  {level.definition}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">
                    Example:
                  </span>{" "}
                  {level.example}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">
                    Function:
                  </span>{" "}
                  {level.function}
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => navigate(`/level/${level.id}/play`)}
                className="px-5 py-2.5 rounded-full 
                bg-gradient-to-r from-yellow-200 via-emerald-200 to-emerald-500
                text-[#0b1320] font-poppins shadow-[0_0_12px_rgba(255,255,170,0.7)]
                hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,160,0.85)]
                transition text-sm font-semibold"
              >
                ▶ Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
