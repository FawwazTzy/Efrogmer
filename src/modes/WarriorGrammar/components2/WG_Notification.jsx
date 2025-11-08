import React, { useEffect, useState } from "react";

const WG_Notification = ({ show, fromRight = true, text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (show) {
      setVisible(true);
      // timer buat sembunyikan notif
      timer = setTimeout(() => setVisible(false), 3000);
    } else {
      setVisible(false);
    }
    return () => clearTimeout(timer);
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-1/2 left-1/3 z-50 
        -translate-x-1/2 -translate-y-1/2 
        bg-black/60 text-white px-6 py-4 rounded-xl 
        shadow-lg text-lg font-semibold transition-opacity duration-500
        ${fromRight ? "animate-slideInRight" : "animate-slideInLeft"}`}
    >
      {text}
    </div>
  );
};

export default WG_Notification;
