import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIbR-iBIFISrEEF_6JlOlFhzOVsX1HMTs",
  authDomain: "auth-dad99.firebaseapp.com",
  projectId: "auth-dad99",
  storageBucket: "auth-dad99.appspot.com",
  messagingSenderId: "1064104735689",
  appId: "1:1064104735689:web:05ab2273f9749ea5716e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result)=>{
    console.log(result.user);
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
  })
  .catch((error) => {
    console.log(error);
  });
}

export const signOut = () => {
  localStorage.clear();
}
