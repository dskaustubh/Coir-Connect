<?php
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$m_no=$_POST["mobile_no"];
$content=$_POST["content"];
//echo $m_no."\n".$content."\n";
$returnvalue["sucess"]=false;
$result=mysqli_query($conn,"INSERT notifications (mobile_no,content) values('$m_no','$content')");
if($result)
{
    $returnvalue["sucess"]=true;
    
}
echo json_encode($returnvalue);

?>