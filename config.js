import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAIiF8Ufemyv9f7JZHBe9xsMT9xAUqg8cw",
  authDomain: "pro-75-73e96.firebaseapp.com",
  projectId: "pro-75-73e96",
  storageBucket: "pro-75-73e96.appspot.com",
  messagingSenderId: "642051244965",
  appId: "1:642051244965:web:c4efeec5347adbf031de4c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

