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
    // var addressVal = $("#address-input").val();
    // var objectVal = $("#object-input").val();
    // var messageVal = $("#message-input").val();

    // make temporary object for easy storage
    var contactObj = {
      name: nameVal,
      email: emailVal,
      phone: phoneVal
      // address: addressVal,
      // object: objectVal,
      // message: messageVal
    };

    // Uploads temporary object data to the database
    database.ref().push(contactObj);

    // Checking
    // console.log(contactObj.name);
    // console.log(contactObj.email);
    // console.log(contactObj.phone);
    // console.log(contactObj.address);
    // console.log(contactObj.object);
    // console.log(contactObj.message);

  });
  // you can use the above or the one shown below
  $('#btnSubmit').click(function(e){
    e.preventDefault();
    // your statements;
  });

  // 3. Create Firebase event for adding Contact Info to the database
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var contactName = childSnapshot.val().name;
    var contactEmail = childSnapshot.val().email;
    var contactPhone = childSnapshot.val().phone;
    // var contactAddress = childSnapshot.val().address;
    // var contactObject = childSnapshot.val().object;
    // var contactMessage = childSnapshot.val().message;

    // Conact Info
    console.log(contactName);
    console.log(contactEmail);
    console.log(contactPhone);
    // console.log(contactAddress);
    // console.log(contactObject);
    // console.log(contactMessage);

    // Add Contact Info to a popup

    // $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
    // trainFreq + "</td><td>" + trainStart + "</td><td>" + difference + "</td><tr>");
  });


	$('#sellnav1').click(function(){
		$('#sell1').css('visibility', 'visible');
		$('#sell2').css('visibility', 'hidden');
		$('#sell3').css('visibility', 'hidden');
		$('#sellnav1').addClass("page-item active");
		$('#sellnav2').removeClass("page-item active");
		$('#sellnav3').removeClass("page-item active");
	});
	$('#sellnav2').click(function(){
		$('#sell1').css('visibility', 'hidden');
		$('#sell2').css('visibility', 'visible');
		$('#sell3').css('visibility', 'hidden');
		$('#sellnav1').removeClass("page-item active");
		$('#sellnav2').addClass("page-item active");
		$('#sellnav3').removeClass("page-item active");
	});
	$('#sellnav3').click(function(){
		$('#sell1').css('visibility', 'hidden');
		$('#sell2').css('visibility', 'hidden');
		$('#sell3').css('visibility', 'visible');
		$('#sellnav1').removeClass("page-item active");
		$('#sellnav2').removeClass("page-item active");
		$('#sellnav3').addClass("page-item active");
	});
});
