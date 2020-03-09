<?php
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$smn=$_POST["umn"];
$returnvalue["post"]=false;
$rmn=7777777777;//ourno
$msg=$_POST["msg"];
$arr=array();
$chats=array();
$arr=explode(' ',$msg);
$password=$arr[0];
$price_per_kg=$arr[1];
$quantity_kg=$arr[2];

$result=mysqli_query($conn,"insert into test_sms (smno,message,rcno) values ('$smn','$msg','$rmn') ");
if($result)

{
    $returnvalue["post"]=true;//pwd price qty}
    $hash=md5($password);
    $result1=mysqli_query($conn,"select * from users where mobile_no='$smn'");
    while($row1=mysqli_fetch_array($result1))
    { //echo "hi";
        if($row1["password"]==$hash)
        {
            $msg="Data Updated Sucessfully";
            $result2=mysqli_query($conn,"insert into test_sms (rcno,message,smno) values ('$smn','$msg','$rmn')");
            //$returnvalue["newprice"]=$price_per_kg;
            //$returnvalue["newqty"]=$quantity_kg;
            $result7=mysqli_query($conn,"update farmers set quantity_kg='$quantity_kg', price_per_kg='$price_per_kg' where mobile_no='$smn'");
            //echo "bi";
        }
        else 
        {
             $msg="Incorrect Credentials Please Enter The Message In THe Format password price (perkg) quantity(kg)";
            $result5=mysqli_query($conn,"insert into test_sms (rcno,message,smno) values ('$smn','$msg','$rmn')");
            //echo "di";
        }
        
    }
}

$chat=array();
$chats=array();
//echo "hi";
$result4=mysqli_query($conn,"SELECT * FROM test_sms where smno='$smn' or rcno='$smn' ");
while($row4=mysqli_fetch_array($result4))
{
    $chat["message"]=$row4["message"];
    //echo "hi";
    $chat["smno"]=$row4["smno"];
    $chat["rcno"]=$row4["rcno"];
    $chat["time"]=$row4["time"];
    array_push($chats,$chat);
}
$returnvalue["chats"]=$chats;

echo json_encode($returnvalue);
?>