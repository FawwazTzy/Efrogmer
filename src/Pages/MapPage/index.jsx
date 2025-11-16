import React from "react";
import { useNavigate } from "react-router-dom";
import AbyssLevelButton from "../../components/AbyssLevelButton";
import Levelup from "../../assets/Levelup.png"

const levels = [
  { id: 1, stars: 3, unlocked: true, targetPos: "Noun" },
  { id: 2, stars: 3, unlocked: true, targetPos: "Verb" },
  { id: 3, stars: 2, unlocked: true, targetPos: "Adjective" },
  { id: 4, stars: 1, unlocked: true, targetPos: "Adverb" },
  { id: 5, stars: 0, unlocked: true, targetPos: "Pronoun" },
  { id: 6, stars: 0, unlocked: true, targetPos: "Preposition" },
  { id: 7, stars: 0, unlocked: true, targetPos: "Conjunction" },
  { id: 8, stars: 0, unlocked: true, targetPos: "Interjection" },
  { id: 9, stars: 0, unlocked: true, targetPos: "Determiner" },
];

export default function MapPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center bg-[url('https://i.pinimg.com/1200x/bf/11/1b/bf111b1a08f048d323a218467dbf7aeb.jpg')] text-white relative">
{/* Top UI */}
<div className="w-full bg-emerald-900 px-4 py-4 flex justify-between text-lg">
  <div className="flex items-center gap-3">
    <div className="px-3 py-1 font-norwester rounded-full">
      Part of Speech's Levels
    </div>
    <img 
      src={Levelup} 
      alt="Part of Speech Icon" 
      className="w-7 h-7 object-contain"
    />
  </div>

  <div className="opacity-90">Traveler</div>
</div>


      {/* Centered Scroll Levels */}
      {/* Centered Scroll Levels */}
      <div className="relative w-full mt-10 pb-10 overflow-x-auto">
        <div className="flex justify-center gap-4 sm:gap-3 md:gap-4 
        px-12 py-12 min-w-max bg-white/40 rounded-xl">
          {levels.map((lv) => (
            <AbyssLevelButton
              key={lv.id}
              {...lv}
              onClick={() => lv.unlocked && navigate(`/level/${lv.id}/intro`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
