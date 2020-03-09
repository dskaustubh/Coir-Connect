<?php  
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$mobile_no=$_POST['mobile_no'];
$returnvalue=array();
$returnvalue["sucess"]=false;
$result=mysqli_query($conn,"SELECT * from messages where s_mobile_no='$mobile_no' OR r_mobile_no='$mobile_no'");
$chatted=array();
$tmp;
$tmp1;
$returnvalue["chatted"]=array();
while($row=mysqli_fetch_array($result))
{
    //echo $row["s_mobile_no"];
    
    if($row["s_mobile_no"]==$mobile_no)
    {
        //echo $row["r_name"];
        $returnvalue["sucess"]=true;
        $chat["mno"]=$row["r_mobile_no"];
        $chat["name"]=$row["r_name"];
       
    }
    else if($row["r_mobile_no"]==$mobile_no)
    {
        $returnvalue["sucess"]=true;
         $tmp=$row["s_mobile_no"];
         $tmp1=$row["s_name"];
       // array_push($chatted["m_no"],$tmp);
        //array_push($chatted["name"],$tmp1);
        $chat["mno"]=$row["s_mobile_no"];
        $chat["name"]=$row["s_name"];
        
       
    }
    array_push($returnvalue["chatted"],$chat);
    
}
echo json_encode($returnvalue);

?>