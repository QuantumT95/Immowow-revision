$(document).ready(function(){
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
    var houseEvaluation = $("#house-input").val();

    database.ref().push(houseEvaluation);
    // console.log(houseEvaluation);
  });

  // Prevent the page from being reloaded
  $('#btnSubmit').click(function(e){
    e.preventDefault();
  });

});
