<?php
  
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$m_no=$_POST["mobile_no"];
$returnvalue=array();
$msg=array();
//$msg1=array();
$returnvalue["sucess"]=false;
$result=mysqli_query($conn,"SELECT * FROM notifications where mobile_no='$m_no' ORDER by time_stamp ASC");
if($result);
{
    $returnvalue["sucess"]=true;
}
while($row=mysqli_fetch_array($result))
{
    
    $msg1["content"]=$row["content"];
    $msg1["n_id"]=$row["n_id"];
    $msg1["time_stamp"]=$row["time_stamp"];
    array_push($msg,$msg1);
}
$returnvalue["notifs"]=$msg;
echo json_encode($returnvalue);
?>