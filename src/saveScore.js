import { db, auth } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

export async function saveScore(score) {
  const user = auth.currentUser;
  if (!user) return;

  await updateDoc(doc(db, "users", user.uid), {
    totalScore: score
  });
}
