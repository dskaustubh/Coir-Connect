<?php
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$quantity=$_POST["quantity"];
$mobile_no=$_POST["mobile_no"];
$price=$_POST["price"];
$returnvalue["sucess"]=false;
$result=mysqli_query($conn,"UPDATE farmers SET price_per_kg='$price',quantity_kg='$quantity' WHERE mobile_no='$mobile_no'");
if($result)
{
    $returnvalue["sucess"]=true;
}
 
echo json_encode($returnvalue);
//echo "hello";
