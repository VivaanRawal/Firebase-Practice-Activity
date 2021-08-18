var firebaseConfig = {
    apiKey: "AIzaSyC08xk5lZsxfb3yZIW3beengWjFiuZhXhM",
    authDomain: "einstien-yrxy.firebaseapp.com",
    databaseURL: "https://einstien-yrxy-default-rtdb.firebaseio.com",
    projectId: "einstien-yrxy",
    storageBucket: "einstien-yrxy.appspot.com",
    messagingSenderId: "388878278612",
    appId: "1:388878278612:web:8cba03fb167de17c488041"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
      });
  
  }