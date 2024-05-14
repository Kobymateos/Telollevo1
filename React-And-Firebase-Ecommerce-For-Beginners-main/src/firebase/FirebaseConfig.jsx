// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB52_0SVEHAlI27jZH3HAJoyMvxsqpp8MM",
    authDomain: "myecom-3f210.firebaseapp.com",
    projectId: "myecom-3f210",
    storageBucket: "myecom-3f210.appspot.com",
    messagingSenderId: "545711000517",
    appId: "1:545711000517:web:d18f43eecec4ee0d3119ac"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }