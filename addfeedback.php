<?php
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$t_id=$_POST["t_id"];
$feedback=$_POST["feedback"];
$returnvalue["sucess"]=false;
$result=mysqli_query($conn,"INSERT INTO history (feedback) values ('$feedback') where t_id='$t_id'");
if($result)
{
  $returnvalue["sucess"]=true;  
}
echo json_encode($returnvalue);
?>