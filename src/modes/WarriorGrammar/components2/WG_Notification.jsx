import React, { useEffect, useState } from "react";
import NotifIcon from "../../Fawwaz.Allrightreserved/Frognotif.png"; // ⬅️ Import gambar kamu

const WG_Notification = ({ show, fromRight = true, text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (show) {
      setVisible(true);
      timer = setTimeout(() => setVisible(false), 9000);
    } else {
      setVisible(false);
    }
    return () => clearTimeout(timer);
  }, [show]);

  if (!visible) return null;

  return (
    <div
      className={`fixed font-poppins top-1/3 left-1/3 z-50 
        -translate-x-1/2 -translate-y-1/2 
        bg-black/40 text-white px-[120px] py-12 rounded-xl 
        shadow-lg text-lg font-semibold transition-opacity duration-500
        flex flex-col items-center gap-2
        border-4 border-green-400
        ${fromRight ? "animate-slideInRight" : "animate-slideInLeft"}`}
    >

      {/* ⬇️ Gambar di atas teks */}
      <img 
        src={NotifIcon} 
        alt="notif icon"
        className="w-16 h-16 object-contain drop-shadow-lg"
      />

      {/* ⬇️ Teks notif */}
      <p className="text-center">{text}</p>
    </div>
  );
};

export default WG_Notification;
