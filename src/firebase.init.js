// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt0B-AAOHmlNzInHmsPc1EH6t4LqaV2bU",
    authDomain: "warehouse-app-auth.firebaseapp.com",
    projectId: "warehouse-app-auth",
    storageBucket: "warehouse-app-auth.appspot.com",
    messagingSenderId: "151829063175",
    appId: "1:151829063175:web:208eccffa72d0a11546ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;