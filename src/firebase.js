import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQpT2MAxfN8w6lxIkz5xwqEtNmcwmvR5k",
  authDomain: "todo-application-deb71.firebaseapp.com",
  projectId: "todo-application-deb71",
  storageBucket: "todo-application-deb71.appspot.com",
  messagingSenderId: "877071794519",
  appId: "1:877071794519:web:3e0c13001981fab8b3be12"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);