import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import bg1 from "../../assets/user.png";
import { useNavigate } from "react-router-dom"; // ⬅️ Tambahkan ini

const UserPanel = () => {
  const user = auth.currentUser;
  const navigate = useNavigate(); // ⬅️ Hook untuk navigasi

  if (!user) {
    return (
      <div className="mt-4 p-4 bg-white/20 rounded-xl text-center text-white">
        <p>You are not logged in.</p>
      </div>
    );
  }

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // ⬅️ Redirect ke halaman login
  };

  return (
    <div className="mt-4 p-5 bg-white/10 backdrop-blur-lg rounded-xl text-white shadow-lg">
      {/* Foto Profil */}
      <div className="flex items-center gap-4">
        <img
          src={bg1} // pakai foto default
          alt="profile"
          className="w-14 h-14 rounded-full shadow-md"
        />

        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            {user.displayName}
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              className="w-4 h-4"
            />
          </h3>
          <p className="text-sm opacity-80">{user.email}</p>
        </div>
      </div>

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        className="w-full mt-5 bg-red-600 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default UserPanel;
