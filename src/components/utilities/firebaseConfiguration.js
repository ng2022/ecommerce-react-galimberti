// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsDk1TzptaA2s2IxzzQGcOJrS6pDtHML4",
  authDomain: "ecommerce-test-56da4.firebaseapp.com",
  projectId: "ecommerce-test-56da4",
  storageBucket: "ecommerce-test-56da4.appspot.com",
  messagingSenderId: "958804947033",
  appId: "1:958804947033:web:7b64a760e49855a1134148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;