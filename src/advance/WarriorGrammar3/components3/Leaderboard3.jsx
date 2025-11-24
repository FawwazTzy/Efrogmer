import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "scores"),
      orderBy("score", "desc") // urutkan dari terbesar ke kecil
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlayers(list);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6 mt-20 py-10 bg-slate-500">
      <h2 className="text-3xl font-bold mb-4 text-center">Leaderboard</h2>

      <table className="table-auto w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3">Rank</th>
            <th className="p-3">Player</th>
            <th className="p-3">Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((p, index) => (
            <tr key={p.id} className="border-b hover:bg-gray-100 transition">
              <td className="text-center p-3 font-semibold">{index + 1}</td>

              <td className="flex items-center gap-3 p-3">
                <img
                  src={p.photoUrl || "https://i.ibb.co/ZH8Fjpv/user.png"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                {p.name}
              </td>

              <td className="text-center p-3">{p.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
