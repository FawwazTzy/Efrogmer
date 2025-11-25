import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Welcomescreen from "./Pages/Welcomescreen"; // ⬅️ Import di sini

import MainPage from "./Pages/MainPage";
import MapPage from "./Pages/MapPage";
import Status404 from "./Pages/404";
import Mode from "./Pages/Mode";
import Game from "./Pages/Game";
import LevelIntro from "./Pages/LevelIntro";
import GameTimeMode from "./modes/WarriorGrammar/GameTimeMode";
import GameTimeMode3 from "./advance/WarriorGrammar3/GameTimeMode3";
import Material from "./Pages/Material";
import Preparation from "./modes/WarriorGrammar/Preparation";
import Login from "./Pages/Login";

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  if (!loadingDone) {
    return (
      <Welcomescreen onLoadingComplete={() => setLoadingDone(true)} />
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/mappage" element={<MapPage />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/material" element={<Material />} />

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
