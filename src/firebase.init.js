
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyComVWW_jilcMgTISvBDcnlSEDWUZtIgyo",
  authDomain: "dream-pictures-project.firebaseapp.com",
  projectId: "dream-pictures-project",
  storageBucket: "dream-pictures-project.appspot.com",
  messagingSenderId: "968726711951",
  appId: "1:968726711951:web:8d9c9453a0fe5a7b09aafa"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;