<?php
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$obj=array();
//$result="select farmer.name,farmer.  ";//qty,ppk,m-no,add,state;
$result=mysqli_query($conn,"select farmers.url,farmers.name,farmers.quantity_kg,farmers.price_per_kg,farmers.mobile_no,users.location,users.state from farmers,users where users.mobile_no=farmers.mobile_no order by price_per_kg DESC");
while($row=mysqli_fetch_array($result))
{
    //echo $row["mobile_no"];
   //echo $row["farmers.name"];
   $returnvalue["price_per_kg"]=$row["price_per_kg"];
    $returnvalue["name"]=$row["name"];
     $returnvalue["quantity_kg"]=$row["quantity_kg"];
      $returnvalue["location"]=$row["location"];
       $returnvalue["state"]=$row["state"];
       $returnvalue["mobile_no"]=$row["mobile_no"];
       $returnvalue["url"]=$row["url"];
       
        array_push($obj,$returnvalue);
   
}
$obj2["farmers"]=$obj;
echo json_encode($obj2);

?>