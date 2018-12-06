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
    console.log(contactObj);
  });
  // you can use the above or the one shown below
  $('#btnSubmit').click(function(e){
    e.preventDefault();
    // your statements;
  });
});
