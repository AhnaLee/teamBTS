<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyAccount</title>
    <link rel="stylesheet" href="SignUp-style.css">
    <!--Call the Header and Footer-->
    <script src="../Header and Footer/main.js"></script>
    <script src="Signup.js"></script>   
</head>

<body>

  <!--Header-->
  <my-header></my-header>
<!--
<div id="popup">
  <center><h1> Welcome!</h1></center>
  <br><br>
  <center><button type="button" onclick="showpop();"><a href="../MyAccount/MyAccountPage.html">Ok</a></button></center>
  </div>

  <div id="popup1">
    <center><h1> Do you want to reset?</h1></center>
    <br><br>
    <center><button type="button" onclick="showpop1(); resetInfo();">OK</button>
    <button type="button" onclick="showpop1();">Cancel</button></center>
    </div>

  <div id="popup2">
      <center><h1> Do you want to be our member?</h1></center>
      <br><br>
      <center><button type="button" onclick="showpop2();resetInfo();showpop();">Ok</button>
      <button type="button" onclick="showpop2();">cancle</button></center>
      </div>

   
      
      
      

<div class="row">
  <center><div class="column">
   <br>
    
<center>
  
    <h1>Sign Up</h1><br>

    <br><h3>First Name</h3>
    <input type="text" id="fname" name ="name"><br>
    <span id="fnameerror" style="color: red;"></span><br>

    <br><h3>Last Name</h3>
    <input type="text" id="lname" name ="name"><br>
    <span id="lnameerror" style="color: red;"></span><br>

    <br><h3>Email Address</h3>
    <input type="email" id="email" name ="mail"><br>
    <span id="emailerror" style="color: red;"></span><br>

    <br><h3>Phone Number</h3>
    <input type="phone" id="phone" name ="phone"><br>
    <span id="phoneerror" style="color: red;"></span><br>

    <br><h3>Password</h3>
    <input type="password" id="opassword" name ="password"><br>
    
    <br><h3>Retype Password</h3>
    <input type="password" id="cpassword" name ="password"><br>
    <span id="passworderror" style="color: red;"></span><br>



      <button type="button" onclick="chekcInfo();">Send</button>
      <button type="button" onclick="showpop1();">Reset</button> 
  
    </center>
  </center>

  </div>
  </div>
</div>
</div>

<br>
-->
<div id="content">
    <?php
    include ("index.php")?>
</div>


<!--Footer-->
<my-footer></my-footer>


</body>
</html>