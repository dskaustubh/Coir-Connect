<?php

require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$f_mobile_no=$_REQUEST["f_mobile_no"];
$i_mobile_no=$_REQUEST["i_mobile_no"];
$f_name=$_REQUEST["f_name"];
$i_name=$_REQUEST["i_name"];
//$f_state="";
$i_state="";
//$i_state="";
$f_state="";
$i_location="";
$f_location="";
$result=mysqli_connect($conn,"select * from users where mobile_no ='$f_mobile_no'");
/*
while($row=mysqli_fetch_array($result))
{
    $f_state=$row["state"];
   // $f_location=$row["location"];
    echo $f_state;
    
}
$result=mysqli_connect($conn,"select * from users where mobile_no ='$i_mobile_no'");
while($row=mysqli_fetch_array($result))
{
    $i_state=$row["state"];
   // $i_location=$row["location"];
    
}
*/
$f_state=$_REQUEST["f_state"];
$i_state=$_REQUEST["i_state"];
$returnvalue["sucess"]=false;
$price_per_kg=$_REQUEST["price_per_kg"];
$quantity_kg=$_REQUEST["quantity_kg"];
$status=$_POST["status"];

$result=mysqli_query($conn,"INSERT INTO  intermediate (i_mobile_no,f_mobile_no,price_per_kg,quantity_kg,f_name,i_name,status,f_state,i_state) values ('$i_mobile_no','$f_mobile_no','$price_per_kg','$quantity_kg','$f_name','$i_name','$status','$f_state','$i_state')");
if($result)
{
$returnvalue["sucess"]=true;    
}
echo json_encode($returnvalue);

?>