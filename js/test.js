

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	console.log("onAuthStateChanged");
    var user = firebase.auth().currentUser;

    if(user != null){
    	console.log("onAuthStateChanged IF");
        var email_id = user.email;
        var u_id = user.uid;


        console.log("auth"+ u_id);

        var con = firebase.database().ref("logged_in");
        con.push(u_id);

        alert("sent");
        console.log("sent");
    }
    
    else{
        alert("error");
    }

  } 
});

function login_f(){

  console.log("login");
  var userEmail = document.getElementById("username").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
         
    console.log("login"+ userEmail+userPass);
  
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

  });

}



/*  var config = {
    apiKey: "AIzaSyC5KYHGWCDaEL3W1o-Uk3Jt4vJTTvBulk8",
    authDomain: "btapp-2a08c.firebaseapp.com",
    databaseURL: "https://btapp-2a08c.firebaseio.com",
    projectId: "btapp-2a08c",
    storageBucket: "btapp-2a08c.appspot.com",
    messagingSenderId: "202689453275"
  };
  firebase.initializeApp(config);


  var con= firebase.database().ref('logged_in_user');
  var form= document.getElementById("form");

  form.addEventListener("submit", (e) =>{

  	e.preventDefault();

  	var userInfo= con.push();
  	userInfo.set({
  		 name: getId("username");
  		 passwd: getId("password");

  	});
  	alert("sent");
  	console.log("sent");
  	document.getElementById("form").reset();

  });

  function getId(id){
  	return document.getElementById(id).value;
  }*/