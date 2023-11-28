import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
  apiKey: "AIzaSyC5XuHgmG8kyWofZnqsRTbbBZhBzewyapk",
  authDomain: "otp-gen-feec9.firebaseapp.com",
  projectId: "otp-gen-feec9",
  storageBucket: "otp-gen-feec9.appspot.com",
  messagingSenderId: "126116108866",
  appId: "1:126116108866:web:873d11aa507dc101582bdb",
  measurementId: "G-F5H95XJ2BL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
