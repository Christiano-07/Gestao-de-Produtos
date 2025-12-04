
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

// Inicialização do Firebase

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  console.error("Erro ao inicializar Firebase:", e);
}

// Serviços principais
const auth = getAuth(app);
const db = getFirestore(app);

// Exportações para uso em todo o sistema
export { auth, db };
