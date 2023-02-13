// Your web app's Firebase configuration
import { getApp, getApps, initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApLK77vwKmephfZJs7_yQlwv2xPMqAoVc",
  authDomain: "chat-gpt-ai-8bbe3.firebaseapp.com",
  projectId: "chat-gpt-ai-8bbe3",
  storageBucket: "chat-gpt-ai-8bbe3.appspot.com",
  messagingSenderId: "998732546321",
  appId: "1:998732546321:web:b8788be1a0c0dc33db4cb0",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
