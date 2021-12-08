// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcYMQiaQe2QndHfbvFCdBDaTIcSXPvJCs",
  authDomain: "insta-2-yt-8aca5.firebaseapp.com",
  projectId: "insta-2-yt-8aca5",
  storageBucket: "insta-2-yt-8aca5.appspot.com",
  messagingSenderId: "86866432555",
  appId: "1:86866432555:web:629d7f23eb0b293f4cd06e"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) :getApp();
const db = getFirestore();
const storage = getStorage()

export {app, db, storage}