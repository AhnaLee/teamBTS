var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none"; //not showing the prevBtn
  } else {
    document.getElementById("prevBtn").style.display = "inline"; //showing the prevBtn
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit"; //if it's the last last one
  } else {
    document.getElementById("nextBtn").innerHTML = "Next"; //else, it's next.
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false; //n == 1 means we want to get to the next tab to the right.
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false; //it just basically re-loads back to the very first tab.
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  
}

function validateForm() {
    
    if(currentTab == 0){
        if (grandPrice.innerText == "0.00"){
            alert("There are no items in your cart!");
            return false; //it will not move to the next tab.
        } else {
            return true; //it will move to the next tab.
        }
    }
    //CurrentTab == 1 is where the First Name, Email, Contact number is at.
    if(currentTab == 1){
        var validForm = 0;
        var letters = /^[A-Za-z\s]+$/; //for letters-only validation
        //First Name validation
        firstname = document.getElementById("firstname").value;
        if(firstname.match(letters)){
            document.getElementById("fnameerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("fnameerror").innerHTML = "Please enter your first name (letters-only)";
            
        }

        //Last Name validation 
        lastname = document.getElementById("lastname").value;
        if(lastname.match(letters)){
            document.getElementById("lnameerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("lnameerror").innerHTML = "Please enter your last name (letters-only)";  
        }

        //Phone Number validation 
        phoneNo = document.getElementById("phoneNo").value;
        var phoneno = /^\d{10}$/;
        if (phoneNo.match(phoneno)){
            document.getElementById("phoneerror").innerHTML = "";
            validForm++;
        }
        else {
            document.getElementById("phoneerror").innerHTML = "Must be 10-digits phone number.";
        }
        

        //Email validation 
        email = document.getElementById("email").value;
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(mailformat)){
            
            document.getElementById("emailerror").innerHTML = "";
            validForm++;
        }else if(email == ""){
            document.getElementById("emailerror").innerHTML = "Please enter your email";
        } else { 
            document.getElementById("emailerror").innerHTML = "Must have '@'";
        }

        if(validForm == 4){
            return true; //meaning all of the 4 inputs have no problems
        } else {
            return false; //meaning at least of the inputs have a problem, therefore it's not allowing 
            // the nextPrev() function to move you to the next tab. 
        }
    } 

    if(currentTab == 2){
        var cardno = /^\d{16}$/; // visa validation
        var letters = /^[A-Za-z\s]+$/; //for letters-only validation
        validForm = 0;
        //Card Number (Visa) validation
        cardnumber = document.getElementById("cardnumber").value;
        if(cardnumber.match(cardno)){
            document.getElementById("cardnumbererror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("cardnumbererror").innerHTML = "Enter 16-digit numbers";
        }

        //Card Holder Name (Visa and Mastercard)
         //Last Name validation 
        cardholdername = document.getElementById("cardholdername").value;
        if(cardholdername.match(letters)){
            document.getElementById("cardholdernameerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("cardholdernameerror").innerHTML = "Letters-only";  
        }

        //CVC validation
        var numbers = /^\d{3}$/;
        cvc = document.getElementById("cvc").value;
        if(cvc.match(numbers)){
            document.getElementById("cvcerror").innerHTML = "";
            validForm++;
        } else {
            document.getElementById("cvcerror").innerHTML = "3-digit number only";  
        }

        
        
        //Date Until Validation 
        var validuntil = document.getElementById("validuntil").value;
        dateInput();
        
        function dateInput() {
            var validDate = validDateCheck(validuntil);
            if (validuntil === ""){
                document.getElementById("validuntilerror").innerHTML = "Date valid is required";
                return;s
            }
            if (!validDate){
                document.getElementById("validuntilerror").innerHTML = "Date expired";
                return;
            } else {
                document.getElementById("validuntilerror").innerHTML = "";
                validForm++;
                return;
            }
        }
        function validDateCheck(validuntil){
            // get current date code from: 
            var today = new Date(); //creating an instance
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //just syntax
            var yyyy = today.getFullYear();
        
            if (dd < 10){ 
                dd = '0' + dd;
            }
            if (mm < 10){ 
                mm = '0' + mm;
            }

            today = yyyy + '-' + mm + '-' + dd;
        
            if (validuntil < today){
                return false;
            } else { 
                return true;
            }
        }

        if(validForm == 4){
            return true;
        } else {
            return false;
        }
        
    }

    //Order is Successful!
    if(currentTab == 3){
        return true;
    }
}


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


// coffee - A
let selection1A = document.querySelector("#AdultCon");
let selection2A = document.querySelector("#AdultConQ");

selection1A.addEventListener('change', () => {
    
    AdultPrice.innerText = selection1A.options[selection1A.selectedIndex].value;
});
    
selection1A.addEventListener('change', () => {
    
    Adult_totalPrice.innerText = (selection1A.options[selection1A.selectedIndex].value * selection2A.options[selection2A.selectedIndex].value).toFixed(2);
});

selection2A.addEventListener('change', () => {
   
    Adult_totalPrice.innerText = (selection1A.options[selection1A.selectedIndex].value * selection2A.options[selection2A.selectedIndex].value).toFixed(2);
    if (isNaN(Adult_totalPrice.innerText)){ 
        Adult_totalPrice.innerText = 0;
    }
});



// food - A
let food_selection1A = document.querySelector("#KidsCon");
let food_selection2A = document.querySelector("#KidsConQ");

food_selection1A.addEventListener('change', () => {
    KidsPrice.innerText = food_selection1A.options[food_selection1A.selectedIndex].value;
    
});
    
food_selection1A.addEventListener('change', () => {
    Kids_totalPrice.innerText = (food_selection1A.options[food_selection1A.selectedIndex].value * food_selection2A.options[food_selection2A.selectedIndex].value).toFixed(2);
    
});

food_selection2A.addEventListener('change', () => {
    Kids_totalPrice.innerText = (food_selection1A.options[food_selection1A.selectedIndex].value * food_selection2A.options[food_selection2A.selectedIndex].value).toFixed(2);
   
    if (isNaN(Kids_totalPrice.innerText)){ 
        Kids_totalPrice.innerText = 0;
    }
});


var numTo2DP;
var numToDP;


selection1A.addEventListener('change', () => { //when changes are made to #AdultCon
    numTo2DP = parseFloat(Adult_totalPrice.innerText) + parseFloat(Kids_totalPrice.innerText);
    numToDP = parseInt(selection2A.options[selection2A.selectedIndex].value) + parseInt(food_selection2A.options[food_selection2A.selectedIndex].value);
    grandPrice.innerText = numTo2DP.toFixed(2);
    
    if(grandPrice.innerText == 0){
        grandPrice.innerText = "0.00";
    }
});
    
food_selection1A.addEventListener('change', () => { 
    numTo2DP = parseFloat(Adult_totalPrice.innerText) + parseFloat(Kids_totalPrice.innerText);
    numToDP = parseInt(selection2A.options[selection2A.selectedIndex].value) + parseInt(food_selection2A.options[food_selection2A.selectedIndex].value);
    grandPrice.innerText = numTo2DP.toFixed(2);
    
    if(grandPrice.innerText == 0){
        grandPrice.innerText = "0.00";
    }
});

selection2A.addEventListener('change', () => { 
    numTo2DP = parseFloat(Adult_totalPrice.innerText) + parseFloat(Kids_totalPrice.innerText);
    numToDP = parseInt(selection2A.options[selection2A.selectedIndex].value) + parseInt(food_selection2A.options[food_selection2A.selectedIndex].value);
    grandPrice.innerText = numTo2DP.toFixed(2);
    grandQuantity.innerText = numToDP;
    if(grandPrice.innerText == 0 || isNaN(grandPrice.innerText)){
        
        grandPrice.innerText = "0.00"; 
    }
    if(grandQuantity.innerText<10){
        grandQuantity.innerText = numToDP;
    }else if(grandQuantity.innerText>=10 && grandQuantity.innerText<20){
        grandQuantity.innerText = numToDP + 2;
    }else if(grandQuantity.innerText>=20 && grandQuantity.innerText<30){
        grandQuantity.innerText = numToDP + 3;
    }else if(grandQuantity.innerText>=30 && grandQuantity.innerText<40){
        grandQuantity.innerText = numToDP + 5;
    }else if(grandQuantity.innerText >= 40){
        grandQuantity.innerText = numToDP + 6;
    }
});

food_selection2A.addEventListener('change', () => { 
    numTo2DP = parseFloat(Adult_totalPrice.innerText) + parseFloat(Kids_totalPrice.innerText);
    numToDP = parseInt(selection2A.options[selection2A.selectedIndex].value) + parseInt(food_selection2A.options[food_selection2A.selectedIndex].value);
    grandPrice.innerText = numTo2DP.toFixed(2);
    grandQuantity.innerText = numToDP;
    if(grandPrice.innerText == 0 || isNaN(grandPrice.innerText)){
        grandPrice.innerText = "0.00";
    }
    if(grandQuantity.innerText<10){
        grandQuantity.innerText = numToDP;
    }else if(grandQuantity.innerText>=10 && grandQuantity.innerText<20){
        grandQuantity.innerText = numToDP + 2;
    }else if(grandQuantity.innerText>=20 && grandQuantity.innerText<30){
        grandQuantity.innerText = numToDP + 3;
    }else if(grandQuantity.innerText>=30 && grandQuantity.innerText<40){
        grandQuantity.innerText = numToDP + 5;
    }else if(grandQuantity.innerText >= 40){
        grandQuantity.innerText = numToDP + 6;
    }
});


    
function Reset() {  
    // Coffee - A
    var dropDownCoffeeA = document.getElementById("AdultCon"); 
    var dropDownQtyA = document.getElementById("AdultConQ"); 
    // Food - A
    var dropDownFoodA = document.getElementById("KidsCon"); 
    var food_dropDownQtyA = document.getElementById("KidsConQ"); 

    
        if (confirm('Are you sure you want to reset all your order?')){ //otherwise, what is the point of confirming resetting if the customer has not chosen any items yet.
            dropDownCoffeeA.selectedIndex = 0;  
            dropDownQtyA.selectedIndex = 0;
            AdultPrice.innerText = "";
            Adult_totalPrice.innerText = 0;
            dropDownFoodA.selectedIndex = 0;  
            food_dropDownQtyA.selectedIndex = 0;
            KidsPrice.innerText = "";
            Kids_totalPrice.innerText = 0;
            grandPrice.innerText = "0.00";
            grandQuantity.innerText = 0;
        }
     
}     

