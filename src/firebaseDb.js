import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCdB7tHwo2bvIAJE9-dYSGNuF5LyXHf7Go",
  authDomain: "subscriptions-49a0a.firebaseapp.com",
  projectId: "subscriptions-49a0a",
  storageBucket: "subscriptions-49a0a.appspot.com",
  messagingSenderId: "578903373960",
  appId: "1:578903373960:web:58466bec1bd3845f0cc73d"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
