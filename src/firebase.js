// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbPwqSo6_I2Hp68mzqKwzJYsBhgKU2MoM",
  authDomain: "whatsapp-clone-d1d06.firebaseapp.com",
  projectId: "whatsapp-clone-d1d06",
  storageBucket: "whatsapp-clone-d1d06.appspot.com",
  messagingSenderId: "896123733644",
  appId: "1:896123733644:web:5892aeeffde0974fea5da9",
  measurementId: "G-7B7V5F1QMP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

//This For Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
