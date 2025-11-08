import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gavocabicon from "../../../assets/Gavocab.png";
import starticon from "../../../assets/start.png";

const Leftside = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col justify-between px-[90px] py-3 bg-[url('https://i.pinimg.com/1200x/1c/d8/24/1cd824ccf720fd694c6884b7a6396109.jpg')] text-[#001e1d] bg-cover bg-center">
      {/* Judul */}
      <motion.h1
        className="text-4xl mb-6 font-bold font-norwester text-center z-50 relative inline-block py-8 rounded-2xl text-[#001e1d]"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Efrogmer
      </motion.h1>

      {/* GIF dengan lampu neon */}
      <motion.img
        src={gavocabicon}
        alt="funny gif"
        className="
            w-32 h-32
            sm:w-40 sm:h-40
            md:w-48 md:h-48
            lg:w-52 lg:h-52
            xl:w-72 xl:h-72
            object-contain rounded-full mx-auto

            shadow-[0_0_8px_2px_rgba(255,0,0,0.6),
                    0_0_15px_4px_rgba(0,255,0,0.6),
                    0_0_20px_6px_rgba(0,0,255,0.6),
                    0_0_25px_8px_rgba(255,0,255,0.6)]
            animate-[glow_3s_ease-in-out_infinite]
        "
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />


      {/* Container tombol */}
      <div className="flex flex-col items-center gap-4 mt-10 mb-5 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        {/* Play Button */}
        <motion.button
          onClick={() => navigate("/mode")}
          className="flex items-center justify-center gap-2 w-full py-2 bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')] 
                    hover:bg-[rgb(107,192,220)] text-[#001e1d] text-xl font-poppins bg-cover bg-no-repeat
                    rounded-lg shadow-lg hover:scale-105 transition"
        >
          Start
          <img src={starticon} alt="play" className="w-5 h-5 object-contain" />
        </motion.button>

        {/* Rules Button */}
        <motion.button
          onClick={() => navigate("/rules")}
          className="flex items-center justify-center gap-2 w-full py-2 bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
                    hover:bg-[rgb(107,192,220)] text-[#001e1d] text-xl font-poppins bg-cover bg-no-repeat
                    rounded-lg hover:scale-105 transition"
        >
          About
          <img src={starticon} alt="sun" className="w-5 h-5 object-contain" />
        </motion.button>

        {/* Setting Button */}
        <motion.button
          onClick={() => navigate("rules")}
          className="flex items-center justify-center gap-2 w-full py-2 bg-[url('https://i.pinimg.com/1200x/16/64/70/166470feb593d150b093edd0a411d3ef.jpg')]
                    hover:bg-[rgb(107,192,220)] text-[#001e1d] text-xl font-poppins bg-cover bg-no-repeat
                    rounded-lg hover:scale-105 transition"
        >
          Setting
          <img src={starticon} alt="sun" className="w-5 h-5 object-contain" />
        </motion.button>
      </div>

      <motion.footer
        className="text-center text-xs rounded-lg bg-white/40"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <p className="text-black">
          © 2025 Muhammad Fawwaz Perdana. All Rights Reserved.
        </p>
      </motion.footer>
    </div>
  );
};

export default Leftside;
