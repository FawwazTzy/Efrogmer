import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";   // ⬅️ tambah ini
import bg1 from "../../assets/Efrogmer1.jpeg";

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();                 // ⬅️ tambah ini

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    // TIMER WELCOME SCREEN 6 DETIK
    const timer = setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        onLoadingComplete?.();
        navigate("/login", { replace: true });    // ⬅️ langsung arahkan ke /login
      }, 1000);

    }, 6000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, navigate]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-gray-100 to-orange-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          {/* ... REST KOMOPNENMU TETAP ... */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
