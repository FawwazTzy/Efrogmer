import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gavocabicon from "../../../assets/Efrogmer1.jpeg";
import starticon from "../../../assets/Start.png";

const Leftside = () => {
  const navigate = useNavigate();

  return (
    <div className="
  min-h-[100dvh]
  w-full flex flex-col justify-between
  px-4 py-2
  sm:px-[120px] sm:py-3
  bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')]
  text-[#001e1d] bg-cover bg-center
">

      <motion.h1
        className="
          text-xl xs:text-2xl sm:text-4xl mb-1 
          font-bold font-norwester text-center
          z-50 relative inline-block py-1 rounded-2xl
        "
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        Efrogmer
      </motion.h1>

      {/* GIF ICON */}
      <motion.img
        src={gavocabicon}
        alt="funny gif"
        className="
          w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 
          object-contain rounded-full mx-auto flex-shrink-0
          shadow-[0_0_6px_2px_rgba(255,0,0,0.6),
                  0_0_10px_4px_rgba(0,255,0,0.6),
                  0_0_14px_6px_rgba(0,0,255,0.6),
                  0_0_18px_7px_rgba(255,0,255,0.6)]
          animate-[glow_3s_ease-in-out_infinite]
        "
      />

      {/* TOMBOL */}
      <div className="
          flex flex-col items-center gap-2 
          mt-2 mb-1
          w-full max-w-[220px] sm:max-w-sm mx-auto 
          flex-shrink-0
        ">
        {[
          ["Start", "/mode"],
          ["About", "/rules"],
          ["Setting", "/rules"],
        ].map(([label, route], i) => (
          <motion.button
            key={i}
            onClick={() => navigate(route)}
            className="
              w-full flex items-center justify-center gap-3 py-3 px-6
              font-bold text-gray-700 
              bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
              rounded-xl shadow-[6px_6px_0px_#000]
              border border-black bg-cover bg-no-repeat bg-center
              hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_#000]
              transition-all duration-300
            "
          >
            {label}
            <img src={starticon} alt="icon" className="w-4 h-4" />
          </motion.button>
        ))}
      </div>

      {/* FOOTER */}
      <motion.footer className="
          text-center text-[10px] bg-white/40 py-1 
          flex-shrink-0
        ">
        <p className="text-black">
          © 2025 Muhammad Fawwaz Perdana. All Rights Reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default Leftside;
