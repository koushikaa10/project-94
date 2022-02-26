var firebaseConfig = {
    apiKey: "AIzaSyD6MLQ20wVyAR1RvSGZJNfZJBEky85fp20",
    authDomain: "chatapp-80f2a.firebaseapp.com",
    databaseURL: "https://chatapp-80f2a-default-rtdb.firebaseio.com",
    projectId: "chatapp-80f2a",
    storageBucket: "chatapp-80f2a.appspot.com",
    messagingSenderId: "782231027169",
    appId: "1:782231027169:web:c27c31cfecc0295ea1a6a0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function AddRoom()
{
     Room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(Room_name).update({purpose: "adding a room name"});
     localStorage.setItem("room_name" , Room_name);
     window.location="chat_page.html";
     }