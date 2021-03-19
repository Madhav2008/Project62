import firebase from 'firebase';

 var firebaseConfig = {
   apiKey: "AIzaSyCu9JCL7eRRvV537x8-Kj3ySTP03NhiixI",
    authDomain: "attendence-app-d0e08.firebaseapp.com",
    databaseURL: "https://attendence-app-d0e08-default-rtdb.firebaseio.com",
    projectId: "attendence-app-d0e08",
    storageBucket: "attendence-app-d0e08.appspot.com",
    messagingSenderId: "41570857937",
    appId: "1:41570857937:web:409e2db88aafac245666f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();