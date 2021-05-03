user_name = localStorage.getItem("user_name", user_name);
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyCCWjVPSlXlozDUcMVVzvcsFZTHQPXMfrY",
    authDomain: "let-s-chat-26cf4.firebaseapp.com",
    databaseURL: "https://let-s-chat-26cf4-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-26cf4",
    storageBucket: "let-s-chat-26cf4.appspot.com",
    messagingSenderId: "571997468895",
    appId: "1:571997468895:web:8d27b4763c2bb4a6f0516a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "chat.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",);
            window.location = "chat.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "index.html";
}