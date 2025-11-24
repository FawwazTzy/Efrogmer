import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Admin() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const snap = await getDocs(collection(db, "users"));
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-3">Dashboard Users</h1>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
            <th>Time</th>
            <th>Last Login</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="border">
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.totalScore || 0}</td>
              <td>{u.totalTime || 0}s</td>
              <td>{u.lastLogin?.toDate().toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
