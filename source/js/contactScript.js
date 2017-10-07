$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    
    // Initiate Variables With Form Content
    var fName = $("#fName").val();
    var lName = $("#lName").val();
    var email = $("#email").val();
    var concern = $("#concern").val();
    var message = $("#message").val();
  
    clearForm();

    $.ajax({
        type: "POST",
        url: "../form-process.php",
        data: "name=" + fName + " " + lName + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    console.log("form success");
    $( "#msgSubmit" ).removeClass( "hidden" );
}

function clearForm(){
    document.querySelector("#contactForm").reset();
    $('.form-control').each(function(){
        $(this).next().removeClass('notEmpty');
    });
}
