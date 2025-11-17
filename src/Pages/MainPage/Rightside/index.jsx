import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import bg1 from "../../../modes/Fawwaz.Allrightreserved/English1.png";
import bg2 from "../../../modes/Fawwaz.Allrightreserved/English2.png";

const backgrounds = [bg1, bg2,];

const Rightside = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000); // ⏱ 4 detik pergantian gambar

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentBg} // penting biar bisa animasi crossfade!
      className="h-full w-full transition-all duration-700 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Rightside;
