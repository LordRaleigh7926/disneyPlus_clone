import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAofpu8gJqB9-pBgyiSrpAjYYZ9A9RzY6g",
    authDomain: "disney-in-react-18330.firebaseapp.com",
    projectId: "disney-in-react-18330",
    storageBucket: "disney-in-react-18330.appspot.com",
    messagingSenderId: "357926808184",
    appId: "1:357926808184:web:0395d207a47ffff1ac9b8d"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage};
export default db;