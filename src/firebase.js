import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZDO9n34aWkb6Cu0vYGTKszJ6gfGFZQvo",
    authDomain: "netflix-4892e.firebaseapp.com",
    projectId: "netflix-4892e",
    storageBucket: "netflix-4892e.appspot.com",
    messagingSenderId: "794525571854",
    appId: "1:794525571854:web:37542487fb9034a682555f",
    measurementId: "G-VVWZ9TZQQL"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
export default storage;