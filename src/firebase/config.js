import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4GNkJx6admw2Dxe2J6HRNzel3VV3hpA0",
    authDomain: "nanobanana-ecommerce-fc817.firebaseapp.com",
    projectId: "nanobanana-ecommerce-fc817",
    storageBucket: "nanobanana-ecommerce-fc817.firebasestorage.app",
    messagingSenderId: "1041685911509",
    appId: "1:1041685911509:web:a8934f9ad99ae280d64f5c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);