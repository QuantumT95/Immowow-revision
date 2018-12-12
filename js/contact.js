$(document).ready(function(){
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("btnSubmit");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAs8vJ5PmfEl4MxMjb7WndUoHSQ00W99vQ",
    authDomain: "immowow-edea1.firebaseapp.com",
    databaseURL: "https://immowow-edea1.firebaseio.com",
    projectId: "immowow-edea1",
    storageBucket: "immowow-edea1.appspot.com",
    messagingSenderId: "915673792281"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $('#btnSubmit').bind("click",function(event){
    // initialize variables
    var nameVal = $("#name-input").val();
    var emailVal = $("#email-input").val();
    var phoneVal = $("#phone-input").val();
    var addressVal = $("#address-input").val();
    var objectVal = $("#object-input").val();
    var messageVal = $("#message-input").val();

    // make temporary object for easy storage
    var contactObj = {
      name: nameVal,
      email: emailVal,
      phone: phoneVal,
      address: addressVal,
      object: objectVal,
      message: messageVal
    };

    event.preventDefault();
    database.ref().push(contactObj);
    // console.log(contactObj);
  });

  // Prevent the page from being reloaded
  $('#btnSubmit').click(function(e){
    e.preventDefault();
  });
});
