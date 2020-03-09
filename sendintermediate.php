<?php  
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$mobile_no=$_POST["mobile_no"];
$returnvalue=array();
$intermediate=array();
$int1;
$returnvalue["sucess"]=false;
$result=mysqli_query($conn,"SELECT * from intermediate where f_mobile_no='$mobile_no'");
while($row=mysqli_fetch_array($result))
{
    //echo $row["inter_id"];
    $int1["i_mobile_no"]= $row["i_mobile_no"];
    $int1["price_per_kg"]= $row["price_per_kg"];
    $int1["quantity_kg"]= $row["quantity_kg"];
    $int1["inter_id"]=$row["inter_id"];
    $int1["i_name"]= $row["i_name"];
    //echo json_encode($int1);
    array_push($intermediate,$int1);
    //echo json_encode($intermediate);
    
}
$returnvalue["intermediate"]=$intermediate;
//echo json_encode($intermediate); 
if($result)
{
    $returnvalue["sucess"]=true;
}
echo json_encode($returnvalue);
?>