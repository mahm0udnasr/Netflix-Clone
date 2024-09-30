import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, getFirestore, doc } from "firebase/firestore";

// toast library
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDGKsRUL4X1JTy88fayCJGHPjxKfk_bX50",
  authDomain: "netfl1x-cl0ne.firebaseapp.com",
  projectId: "netfl1x-cl0ne",
  storageBucket: "netfl1x-cl0ne.appspot.com",
  messagingSenderId: "107442858491",
  appId: "1:107442858491:web:d6341495bddd8191ffc35e",
};
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// user sign up
const signup = async (name, email, password) => {
  try {
    if (
      name &&
      name != "" &&
      email &&
      email != "" &&
      password &&
      password != ""
    ) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await setDoc(doc(db, "user", user.uid), {
        uid: user.uid,
        name,
        email,
        authProvider: "local",
      });
    } else {
      return null;
    }
  } catch (error) {
    error ? toast.error(error.code.split("/")[1].split("-").join(" ")) : null;
  }
};
// user sign in
const signin = async (email, password) => {
  try {
    if (email && email != "" && password && password != "") {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      return null;
    }
  } catch (error) {
    error ? toast.error(error.code.split("/")[1].split("-").join(" ")) : null;
  }
};
// user log out
const signout = async () => {
  try {
    signOut(auth);
  } catch (error) {
    error ? toast.error(error.code.split("/")[1].split("-").join(" ")) : null;
  }
};

export { auth, db, signup, signin, signout };
