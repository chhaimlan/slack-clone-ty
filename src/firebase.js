
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//lan
const firebaseConfig = {
  apiKey: "AIzaSyC1HUX89m9VNIccLkULkDTNaDwm_g-LLBw",
  authDomain: "slack-clone-yt-42e35.firebaseapp.com",
  projectId: "slack-clone-yt-42e35",
  storageBucket: "slack-clone-yt-42e35.appspot.com",
  messagingSenderId: "875936515428",
  appId: "1:875936515428:web:8cfdda6e32467882fba671"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDEdDPSaUFTn3-vI61X6P-GoEhE_QIOWgk",
//   authDomain: "slack-lo-ii.firebaseapp.com",
//   projectId: "slack-lo-ii",
//   storageBucket: "slack-lo-ii.appspot.com",
//   messagingSenderId: "789351058350",
//   appId: "1:789351058350:web:76f2d44e79f89e83c0d63f"
// };

//vann
// const firebaseConfig = {
//   apiKey: "AIzaSyCUjUCMPrP-xUPZve-J-Px1KjyK16LiPJk",
//   authDomain: "slact-clone-ii.firebaseapp.com",
//   projectId: "slact-clone-ii",
//   storageBucket: "slact-clone-ii.appspot.com",
//   messagingSenderId: "659971054064",
//   appId: "1:659971054064:web:e65f2fafd168050afea535"
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();