/* This function check the user input by the conditions. For instance, the userName should not be null, the userEmail should be the form of email and userMessage should not be null as well */

function chekcInfo() {
    var userfName = document.getElementById("fname").value;
    var userlName = document.getElementById("lname").value;
    var userEmail = document.getElementById("email").value;
    var userPhone = document.getElementById("phone").value;
    var checkPassword1 = document.getElementById("opassword").value;
    var checkPassword2 = document.getElementById("cpassword").value;
    var pattern = /.@./;
    var letters = /^[A-Za-z\s]+$/; //for letters-only validation
    var number = /^[0-9]/;
    var errorCheck = 0; //To check correct information forms and to next step

    if (userfName =="") {
            document.getElementById("fnameerror").innerHTML = "Please write your first name";
    }
    else {
        if(userfName.match(letters)){
            document.getElementById("fnameerror").innerHTML = "";
            errorCheck ++; // This is set as 1 here
        } 
        else {
            document.getElementById("fnameerror").innerHTML = "Please enter your name (letters-only)"; 
            return false;
        }
    }

    if (userlName =="") {
        document.getElementById("lnameerror").innerHTML = "Please write your last name";
    }
    else {
        if(userfName.match(letters)){
            document.getElementById("lnameerror").innerHTML = "";
            errorCheck ++; // This is set as 2 here
        } 
        else {
            document.getElementById("lnameerror").innerHTML = "Please enter your name (letters-only)"; 
            return false;
        }
    }


    if (userEmail == "") {
        document.getElementById("emailerror").innerHTML = "We need your email address to contact you.";
    }
    else {
        if (!userEmail.match(pattern)) {
            document.getElementById("emailerror").innerHTML = "This should be email form.";
            return false;
            }
        else {
            document.getElementById("emailerror").innerHTML = "";
            errorCheck ++; //3
        }
    }
    if(userPhone ==""){
        document.getElementById("phoneerror").innerHTML = "Type your phone number please";
    }
    else {
        if(!userPhone.match(number)) {
            document.getElementById("phoneerror").innerHTML = "This should be number";
            return false;
        }
        else{
            document.getElementById("phoneerror").innerHTML = "";
            errorCheck ++;//4
        }
    }
    if(checkPassword1 ==""){
        document.getElementById("passworderror").innerHTML = "Type the password please"
        return false;
    }

    if(checkPassword1 != checkPassword2){
        document.getElementById("passworderror").innerHTML = "The password is not correct";
        return false;
    }
    else {
        document.getElementById("passworderror").innerHTML = "";
        errorCheck ++;//5
    }
    if (errorCheck == 5) { // Now we can call the function showpop2
        showpop2(); /* This showpop2 shows confirm popup message to the user to choose 'OK' or 'Cancle'*/
    }
    
}




/* This resetInfo function makes all message as NULL so every error message and user message disappear */
function resetInfo() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("opassword").value = "";
    document.getElementById("cpassword").value = "";
    document.getElementById("phoneerror").value = "";
    document.getElementById("fnameerror").innerHTML = "";
    document.getElementById("lnameerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("passworderror").innerHTML = "";
}

/* This popup message shows user 'Thank you' */
function showpop() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

/* For the reset button */
function showpop1() {
    var popup1 = document.getElementById('popup1');
    var userfName = document.getElementById("fname").value;
    var userlName = document.getElementById("fname").value;
    var userEmail = document.getElementById("email").value;
    

    if (userfName == "" && userlName == "" && userEmail == ""){
        return; //since it's empty, there's no point of showing the pop-up.
    } else {
        popup1.classList.toggle('active');  
    }
    
}

/* For the send button */
function showpop2() {
    var popup2 = document.getElementById('popup2');
    popup2.classList.toggle('active');
}


