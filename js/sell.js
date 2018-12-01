$(document).ready(function(){

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
