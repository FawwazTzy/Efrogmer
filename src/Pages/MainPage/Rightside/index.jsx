import React from "react";
import { motion } from "framer-motion";

const Rightside = () => {
  return (
    <motion.div
      className="h-full w-full transition-all duration-1000 shadow-lg"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        backgroundImage: `url("https://i.pinimg.com/1200x/70/65/0b/70650bf42e13c4dd5f9a00876bd0a172.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Rightside;
