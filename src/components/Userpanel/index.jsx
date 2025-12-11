import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import bg1 from "../../assets/user.png";

const UserPanel = () => {
  const user = auth.currentUser;

  if (!user) {
    return (
      <div className="mt-4 p-4 bg-white/20 rounded-xl text-center text-white">
        <p>You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-5 bg-white/10 backdrop-blur-lg rounded-xl text-white shadow-lg">
      {/* Foto Profil */}
      <div className="flex items-center gap-4">
        <img
          src={bg1}
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
        onClick={() => signOut(auth)}
        className="w-full mt-5 bg-red-600 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default UserPanel;
