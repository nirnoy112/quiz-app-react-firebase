import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkEsKIXL-Yn8_S4okm8tzoXWpr8eCGfoY",
  authDomain: "quiz-app-react-firebase-dev.firebaseapp.com",
  databaseURL:
    "https://quiz-app-react-firebase-dev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-app-react-firebase-dev",
  storageBucket: "quiz-app-react-firebase-dev.appspot.com",
  messagingSenderId: "790050498894",
  appId: "1:790050498894:web:824e68ab8aee8bdbb4d61f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
