import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "autobox18-ba317",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInAnonymouslyHandler = async () => {
    try {
        await signInAnonymously(auth);
        const user = auth.currentUser;
        const token = await user.getIdToken();
        return token;
    } catch (error) {
        console.error("Ошибка при анонимной авторизации:", error);
    }
};

export { auth, signInAnonymouslyHandler };
