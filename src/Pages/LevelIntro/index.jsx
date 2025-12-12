import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LEVELS from "../../Data/Question";

export default function LevelIntro() {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const level = LEVELS.find((l) => l.id === parseInt(levelId));

  const progress =
    JSON.parse(localStorage.getItem(`level_${levelId}`)) || {
      score: 0,
      stars: 0,
    };

  // STATE
  const [isPortrait, setIsPortrait] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // ORIENTATION CHECK
  useEffect(() => {
    const checkOrientation = () =>
      setIsPortrait(window.innerHeight > window.innerWidth);

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  // IF LEVEL NOT FOUND
  if (!level) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Level not found!
      </div>
    );
  }

  return (
    <div className="h-screen w-screen text-white overflow-hidden relative">
      {isPortrait && (
        <div className="absolute inset-0 z-50 bg-emerald-950/90 flex flex-col items-center justify-center text-center p-4 sm:p-6">
          <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-4">
            Please Rotate Your Device!
          </h2>
          <p className="text-xs sm:text-sm md:text-lg">
            This game works best in landscape mode.
          </p>
        </div>
      )}

      <div className="relative min-h-screen text-gray-50 overflow-hidden flex items-center justify-center px-2 py-2 sm:px-3 sm:py-4">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#031017]">
          <div className="absolute inset-0 opacity-35 bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] bg-center bg-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,#0c2236_0%,#02080d_90%)] opacity-60" />
        </div>

        <div className="relative w-full max-w-5xl flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 justify-center">

          {/* LEFT PANEL */}
          <div
            className="w-[80px] sm:w-[95px] md:w-[110px] lg:w-32
            h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px]
            rounded-xl bg-emerald-600/30 backdrop-blur-lg 
            border border-emerald-500/40 shadow-[0_0_18px_rgba(0,255,180,0.28)]
            flex flex-col items-center justify-between py-3 sm:py-5 mx-auto md:mx-0"
          >
            {/* Level Icon */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
                bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
                bg-cover bg-center text-[#0c1a28] flex items-center justify-center
                text-lg sm:text-2xl font-poppins border border-emerald-900 shadow-lg"
              >
                {level.id}
              </div>

              {/* Thumbnail */}
              <div
                className="w-16 h-20 sm:w-20 sm:h-28 md:w-24 md:h-36 rounded-lg 
                bg-[url('https://i.pinimg.com/1200x/8b/5c/50/8b5c509902b8a1a4cf9e062f9cbe40d9.jpg')] 
                bg-cover bg-center border border-white/10 shadow-md"
              />
            </div>

            {/* Progress */}
            <div className="w-full text-center font-poppins mb-1">
              <p className="bg-slate-200 text-gray-900 font-semibold text-[10px] sm:text-xs py-1 rounded-md">
                ⭐ {progress.stars}
                <br />
                Score: <span className="text-blue-600">{progress.score}</span>
              </p>
            </div>

            {/* Start Button */}
            <div className="pb-1 sm:pb-2">
              <button
                onClick={() => navigate(`/level/${level.id}/play`)}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full 
                bg-gradient-to-r from-yellow-200 via-emerald-200 to-emerald-500
                text-[#0b1320] font-poppins shadow-[0_0_12px_rgba(255,255,170,0.7)]
                hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,160,0.85)]
                transition text-xs sm:text-sm font-semibold"
              >
                ▶ Start
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="flex-1 p-3 sm:p-4 md:p-6 rounded-xl 
            bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
            bg-cover bg-center border border-white/20 backdrop-blur-lg shadow-xl"
          >
            <h1 className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold text-emerald-900 drop-shadow-sm">
              Level {level.id}
            </h1>
            <p className="text-xs sm:text-sm md:text-base mt-0.5 font-poppins text-emerald-900 capitalize">
              {level.targetPos}
            </p>

            <div className="mt-2 sm:mt-3">
              <ul className="text-[11px] sm:text-[13px] md:text-sm space-y-1 text-gray-200/90 list-disc ml-4 sm:ml-5">
                {level.effects?.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="mt-3 sm:mt-4">
              <h2 className="text-base sm:text-lg font-norwester text-yellow-400 mb-1 sm:mb-2 drop-shadow">
                🎯 Challenge Target
              </h2>

              <div
                className="w-full overflow-y-auto h-[60dvh] font-poppins bg-black/50 border border-white/15
                px-2 sm:px-3 py-1.5 sm:py-2 rounded-md space-y-1 text-[10px] sm:text-xs md:text-sm text-gray-200"
              >
                <p>
                  <span className="font-semibold text-yellow-300">Definition:</span>{" "}
                  {level.definition}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Example:</span>{" "}
                  {level.example}
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Function:</span>{" "}
                  {level.function}
                </p>
              </div>

              {/* Watch Video */}
              <button
                onClick={() => setShowVideo(true)}
                className="mt-3 px-4 py-2 bg-red-500 rounded-lg font-poppins font-semibold text-white hover:bg-red-600 transition shadow-lg text-xs sm:text-sm"
              >
                ▶ Watch Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] px-3">
          <div className="relative w-full max-w-2xl">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
            >
              ✕
            </button>

            {/* YOUTUBE VIDEO */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${level.introVideoId}?autoplay=1`}
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
