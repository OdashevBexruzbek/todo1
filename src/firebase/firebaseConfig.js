import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2tEVBb3Uxvuxlv4sZNrZIDBSEc9wjBnI",
  authDomain: "todo-app-d6e62.firebaseapp.com",
  projectId: "todo-app-d6e62",
  storageBucket: "todo-app-d6e62.appspot.com",
  messagingSenderId: "706258767956",
  appId: "1:706258767956:web:587e672c10172ba3285dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);