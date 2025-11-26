import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Welcomescreen from "./Pages/Welcomescreen";

import MainPage from "./Pages/MainPage";
import MapPage from "./Pages/MapPage";
import Status404 from "./Pages/404";
import Mode from "./Pages/Mode";
import Game from "./Pages/Game";
import LevelIntro from "./Pages/LevelIntro";
import GameTimeMode from "./modes/WarriorGrammar/GameTimeMode";
import GameTimeMode3 from "./advance/WarriorGrammar3/GameTimeMode3";
import Setting from "./Pages/Setting";
import Preparation from "./modes/WarriorGrammar/Preparation";
import Login from "./Pages/Login";

import Duck from "./assets/Sound/Fluffing a Duck.mp3";

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  // ===========================================
  // 🔊 BACKSOUND SYSTEM
  // ===========================================
  const audioRef = useRef(null);

  const [isMusicOn, setIsMusicOn] = useState(() => {
    return JSON.parse(localStorage.getItem("musicEnabled")) ?? true;
  });

  const [volume, setVolume] = useState(() => {
    return Number(localStorage.getItem("musicVolume")) || 0.5;
  });

  // Apply volume + play/pause
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      if (isMusicOn) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicOn, volume]);
  // ===========================================

  if (!loadingDone) {
    return (
      <Welcomescreen onLoadingComplete={() => setLoadingDone(true)} />
    );
  }

  return (
    <Router>

      {/* ===========================================
           🔊 AUDIO BACKSOUND  
      ============================================ */}
      <audio
        ref={audioRef}
        src={Duck}  // pastikan file ada di /public/assets/
        loop
      />

      {/* ===========================================
           🔥 SEMUA ROUTE TETAP SAMA  
      ============================================ */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/mappage" element={<MapPage />} />
        <Route path="/mode" element={<Mode />} />
        <Route
          path="/setting"
          element={
            <Setting
              setIsMusicOn={setIsMusicOn}
              setVolume={setVolume}
              isMusicOn={isMusicOn}
              volume={volume}
            />
          }
        />

        {/* grammar Warrior */}
        <Route path="/grammarpage" element={<GameTimeMode />} />
        <Route path="/advance" element={<GameTimeMode3 />} />
        <Route path="/preparation" element={<Preparation />} />

        {/* Intro per level */}
        <Route path="/level/:levelId/intro" element={<LevelIntro />} />

        {/* Game per level */}
        <Route path="/level/:levelId/play" element={<Game />} />

        <Route path="*" element={<Status404 />} />
      </Routes>
    </Router>
  );
};

export default App;
