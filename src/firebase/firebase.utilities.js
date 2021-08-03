import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyCJGkLmsxIC3-36yxpyn66CxMKlCqK7Ejw",
  authDomain: "new-johnson-consulting.firebaseapp.com",
  projectId: "new-johnson-consulting",
  storageBucket: "new-johnson-consulting.appspot.com",
  messagingSenderId: "937749527561",
  appId: "1:937749527561:web:1c77d8d55799e3602d8cd8",
  measurementId: "G-50XS856138",
};

firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 