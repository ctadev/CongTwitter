import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDV4XjNpEvcgWHGudDea4YUaFEE43EGccY",
  authDomain: "twitter-clone-aaf1d.firebaseapp.com",
  projectId: "twitter-clone-aaf1d",
  storageBucket: "twitter-clone-aaf1d.appspot.com",
  messagingSenderId: "1034687092494",
  appId: "1:1034687092494:web:18b6986caf7120afefe95f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
