<?php
require_once("create_connection.php");
 
$conn=$GLOBALS["conn"];
$returnvalue=array();
$change=false;
$mobile_no=$_POST["mobile_no"];
$old_entered_password=$_POST["old_password"];
$old_password;
$new_password=$_POST['new_password'];

$result=mysqli_query($conn,"SELECT password  FROM users WHERE mobile_no='$mobile_no'");
while($row=mysqli_fetch_array($result))
 {
   $old_password=$row["password"];      
    if(strcmp($old_password,md5($old_entered_password))==0)
	{
               
                $change=true;
                $new_hash=md5($new_password);
                mysqli_query($conn,"UPDATE users SET password='$new_hash' WHERE mobile_no='$mobile_no'");
                
        }

 }

$returnvalue['change']=$change;
echo json_encode($returnvalue);

?>