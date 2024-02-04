// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2z6kc1aRpF3tlm6uovVHMlgzD3mHIlM",
  authDomain: "travel-guru-ed19e.firebaseapp.com",
  projectId: "travel-guru-ed19e",
  storageBucket: "travel-guru-ed19e.appspot.com",
  messagingSenderId: "356770779678",
  appId: "1:356770779678:web:f36a28cce59d692184d40f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;