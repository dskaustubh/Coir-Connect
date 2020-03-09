<?php
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$msg=$_POST["msg"];
$smno=$_POST["smno"];
$returnvalue["sucess"]=false;
$rcmo=$_POST["rcmo"];
$chats=array();
//echo $rcmo.$smno.$msg;
//$result=mysqli_query($conn,"INSERT INTO  test_sms (rcno,smno,message) values ('$rcmo' ,'$smno','$msg')");
 $result1=mysqli_query($conn,"INSERT INTO test_sms (rcno,smno,message) values ('$rcmo','$smno','$msg')");
if($result1)
{
    $returnvalue["sucess"]=true;
   
   
}
$result2=mysqli_query($conn,"SELECT * FROM test_sms ");
while($row=mysqli_fetch_array($result2))
{
    $chat["message"]=$row["message"];
    $chat["smno"]=$row["smno"];
    $chat["rcmo"]=$row["rcno"];
    $chat["time"]=$row["time"];
    array_push($chats,$chat);
    //echo $row["message"];
}
$returnvalue["chats"]=$chats;
echo json_encode($returnvalue);
?>