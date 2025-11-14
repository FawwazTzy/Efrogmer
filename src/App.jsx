import { useEffect } from "react";
import { useZustandState } from "./store/state";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainPage from "./Pages/MainPage";
import MapPage from "./Pages/MapPage";
import Status404 from "./Pages/404";
import Mode from "./Pages/Mode";
import Game from "./Pages/Game";
import LevelIntro from "./Pages/LevelIntro";
import GameTimeMode from "./modes/WarriorGrammar/GameTimeMode";
import Material from "./Pages/Material";
import Preparation from "./modes/WarriorGrammar/Preparation";

const App = () => {
  const setWindowSize = useZustandState((state) => state.setWindowSize);

  useEffect(() => {
    const handleResize = () => {
      const screen = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowSize(screen);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowSize]);

  return (
    <Router>
      <Routes>
  <Route path="/" element={<Navigate to="/mainpage" replace />} />
  <Route path="/mainpage" element={<MainPage />} />
  <Route path="/mappage" element={<MapPage />} />
  <Route path="/mode" element={<Mode />} />
  <Route path="/material" element={<Material />} />

  {/* grammar Warrior */}
  <Route path="/grammarpage" element={<GameTimeMode />} />
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
