<?php
	$con = mysqli_connect("localhost","root","","database123");
	
	$errors = array();
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
	
	if(preg_match("/\S+/", $_POST['fname']) === 0){
		$errors['fname'] = "* First Name is required.";
	}
	if(preg_match("/\S+/", $_POST['lname']) === 0){
		$errors['lname'] = "* Last Name is required.";
	}
	if(preg_match("/.+@.+\..+/", $_POST['email']) === 0){
		$errors['email'] = "* Not a valid e-mail address.";
	}
	if(preg_match("/.{8,}/", $_POST['password']) === 0){
		$errors['password'] = "* Password Must Contain at least 8 Chanacters.";
	}
	if(strcmp($_POST['password'], $_POST['confirm_password'])){
		$errors['confirm_password'] = "* Password do not much.";
	}
	
	if(count($errors) === 0){
		$fname = mysqli_real_escape_string($con, $_POST['fname']);
		$lname = mysqli_real_escape_string($con, $_POST['lname']);
		$email = mysqli_real_escape_string($con, $_POST['email']);
		
		$password = hash('sha256', $_POST['password']);
		function createSalt(){
   			$string = md5(uniqid(rand(), true));
    		return substr($string, 0, 3);
		}
		$salt = createSalt();
		$password = hash('sha256', $salt . $password);
		
		$search_query = mysqli_query($con, "SELECT * FROM members WHERE email = '$email'");
		$num_row = mysqli_num_rows($search_query);
		if($num_row >= 1){
			$errors['email'] = "Email address is unavailable.";
		}else{
			$sql = "INSERT INTO members(`fname`, `lname`, `email`, `salt`, `password`) VALUES ('$fname', '$lname', '$email', '$salt', '$password')";
			$query = mysqli_query($con, $sql);
			$_POST['fname'] = '';
			$_POST['lname'] = '';
			$_POST['email'] = '';
			
			$successful = "<h3> You are successfully registered.</h3>";
		}
	}
	}
?>

<!DOCTYPE html>
<html>
<head>
<link type="text/css" rel="stylesheet" href="css/style.css">
<title></title>
<script src="../Header and Footer/main.js"></script>
</head>
<body>
	<div id="container">
    	<div class="login">
        <form method="post" action="login.php">
			
        	<table>
				<div id = "signinsuser">
					<b>Existing user? Sign-In Here!</b>
				</div>
            	<tr>
                	<td><h1>E-mail</h1></td>
                    <td><h1>Password</h1></td>
                </tr>
                <tr>
                	<td><input type="text" name="login_email" id="login_email"></td>
                    <td><input type="password" name="login_password" id="login_password"></td>
                    <td><input type="submit" name="submit" id="login" value="Login"></td>
                </tr>
                <tr>
                	<td colspan="3"><?php if(isset($_GET['message'])){ echo "<h2>" .$_GET['message']. "</h2>"; } ?></td>
                </tr>
            </table>
        </form>
        </div>

        <div class="form">
        <form method="post" action="index.php">
        	<table>
				<div id = "signupsuser">
					<b>New user? Sign-up Here!</b>
				</div>
            	<tr>
            	<tr>
                	<td colspan="2"><?php if(isset($successful)){ echo $successful; } ?></td>
                </tr>
            	<tr>
                	<td><input type="text" name="fname" id="fname" placeholder="First Name" value="<?php if(isset($_POST['fname'])){echo $_POST['fname'];} ?>"></td>
                    <td><input type="text" name="lname" id="lname" placeholder="Last Name" value="<?php if(isset($_POST['lname'])){echo $_POST['lname'];} ?>"></td>
                </tr>
                <tr>
                	<td><?php if(isset($errors['fname'])){echo "<h2>" .$errors['fname']. "</h2>"; } ?></td>
                    <td><?php if(isset($errors['lname'])){echo "<h2>" .$errors['lname']. "</h2>"; } ?></td>
                </tr>
                <tr">
                	<td colspan="2"><input type="text" name="email" id="email" placeholder="E-mail Address" value="<?php if(isset($_POST['email'])){echo $_POST['email'];} ?>"></td>
                </tr>
                <tr>
                    <td colspan="2"><?php if(isset($errors['email'])){echo "<h2>" .$errors['email']. "</h2>"; } ?></td>
                </tr>
                <tr>
                	<td colspan="2"><input type="password" name="password" id="pw" placeholder="Password"></td>
                </tr>
                <tr>
                    <td colspan="2"><?php if(isset($errors['password'])){echo "<h2>" .$errors['password']. "</h2>"; } ?></td>
                </tr>
                <tr>
                	<td colspan="2"><input type="password" name="confirm_password" id="cpw" placeholder="Confirm Password">
                </tr>
                <tr>
                    <td colspan="2"><?php if(isset($errors['confirm_password'])){echo "<h2>" .$errors['confirm_password']. "</h2>"; } ?></td>
                </tr>
                <tr>
                    <td><input type="submit" name="submit" id="submit" value="Sign Up"></td>
                </tr>
            </table>
		</form>
        </div>
        <div class="footer"></div>
    </div>
</body>
</html>