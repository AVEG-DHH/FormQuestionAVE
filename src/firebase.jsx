// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore  } from 'firebase/firestore';
import { getDatabase, ref, set } from "firebase/database";

// Thông tin cấu hình Firebase (lấy từ Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyCApfxRyhFSYh1eDxdp2-qAZyuSZh2EZl0",
    authDomain: "customeranswer-dfe97.firebaseapp.com",
    projectId: "customeranswer-dfe97",
    storageBucket: "customeranswer-dfe97.firebasestorage.app",
    messagingSenderId: "542282036477",
    appId: "1:542282036477:web:5edadae4c7ffc5f7e2fa94",
    measurementId: "G-3FYLJXPT80"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);
const dbRT = getDatabase (app);


export { db, dbRT, ref, set };
