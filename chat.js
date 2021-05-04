room_name = localStorage.getItem("room_name");
document.getElementById("room_name").innerHTML = " Welcome " + room_name;
//YOUR FIREBASE LINKS

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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
            name1 = message_data['name'];
            message = message_data['message'];
            like = message_data['like'];
            name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'></h4>";
            message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn_warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id) '>";
            span_with_tag = "<span class='glyphicon-thunbs-up'>Like: "+ Like +"</span></button><hr";

            row = name_with_tag + message_with_tag +Like + span_with_tag;
            document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });


      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
            window.location = "index.html";
      }

function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });

}