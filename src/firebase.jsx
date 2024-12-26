// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Thông tin cấu hình Firebase (lấy từ Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBJkFdALJeGmymrsRYTZkUQiUZ_3iy-N0M",
  authDomain: "customeranswer-68032.firebaseapp.com",
  databaseURL: "https://customeranswer-68032-default-rtdb.firebaseio.com/",
  projectId: "customeranswer-68032",
  storageBucket: "customeranswer-68032.firebasestorage.app",
  messagingSenderId: "773844592308",
  appId: "1:773844592308:web:5df48008b41da4489699e1",
  measurementId: "G-86Y3DBKE6M" // Thay thế bằng appId của bạn
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set };
