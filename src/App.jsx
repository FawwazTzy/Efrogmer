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
import GameTimeMode3 from "./advance/WarriorGrammar3/GameTimeMode3";
import Material from "./Pages/Material";
import Preparation from "./modes/WarriorGrammar/Preparation";
import Login from "./Pages/Login";
//
import RotateOverlay from "./components/RotateOverlay";

const App = () => {
  const setWindowSize = useZustandState((s) => s.setWindowSize);
  const setIsPortrait = useZustandState((s) => s.setIsPortrait);
  const setIsMobileDevice = useZustandState((s) => s.setIsMobileDevice);

  useEffect(() => {
    const detectDevice = () => {
      const ua = navigator.userAgent.toLowerCase();

      const isMobile =
        /android|iphone|ipod|ipad|tablet|windows phone/i.test(ua) ||
        window.innerWidth < 1024; // fallback tablet display

      setIsMobileDevice(isMobile);
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      setWindowSize({ width: w, height: h });
      setIsPortrait(h > w);
      detectDevice();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    handleResize(); // initial run
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [setWindowSize, setIsPortrait, setIsMobileDevice]);

  return (
    <>
      <RotateOverlay /> 

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
    </>
  );
};

export default App;
