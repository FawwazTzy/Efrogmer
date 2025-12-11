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
  // =====================================================
  // 🔥 TAMPILKAN WELCOMESCREEN HANYA SEKALI SAJA
  // =====================================================
  const [loadingDone, setLoadingDone] = useState(() => {
    // Jika sudah pernah dibuka sebelumnya → langsung true
    return localStorage.getItem("firstOpenDone") === "true";
  });

  if (!loadingDone) {
    return (
      <Welcomescreen
        onLoadingComplete={() => {
          localStorage.setItem("firstOpenDone", "true");
          setLoadingDone(true);
        }}
      />
    );
  }
  // ======================================================


  // ======================================================
  // 🔊 BACKSOUND SYSTEM
  // ======================================================
  const audioRef = useRef(null);

  const [isMusicOn, setIsMusicOn] = useState(() => {
    return JSON.parse(localStorage.getItem("musicEnabled")) ?? true;
  });

  const [volume, setVolume] = useState(() => {
    return Number(localStorage.getItem("musicVolume")) || 0.5;
  });

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
  // ======================================================


  return (
    <Router>

      {/* 🔊 BACKSOUND */}
      <audio ref={audioRef} src={Duck} loop />

      {/* 🔥 SEMUA ROUTE */}
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
              isMusicOn={isMusicOn}
              setIsMusicOn={setIsMusicOn}
              volume={volume}
              setVolume={setVolume}
            />
          }
        />

        {/* Warrior Grammar */}
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
