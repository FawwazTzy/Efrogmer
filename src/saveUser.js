import { db, auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export async function saveUser() {
  const user = auth.currentUser;
  if (!user) return;

  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName,
    email: user.email,
    avatar: user.photoURL,
    lastLogin: new Date(),
  }, { merge: true });
}
