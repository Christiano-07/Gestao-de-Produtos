// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyACQoQHnnzKupSK4lxqTJZBy3bLIzC5ybY",
  authDomain: "yanesprojeto.firebaseapp.com",
  projectId: "yanesprojeto",
  storageBucket: "yanesprojeto.firebasestorage.app",
  messagingSenderId: "966717709137",
  appId: "1:966717709137:web:4925b688facd98d7f09170"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
