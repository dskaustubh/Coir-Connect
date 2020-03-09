<?php
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$obj=array();
//echo "hi";
$result=mysqli_query($conn,"SELECT  farmers.name,farmers.price_per_kg,farmers.url,farmers.quantity_kg,farmers.mobile_no,users.state,users.location,farmers.rating from users,farmers where farmers.mobile_no=users.mobile_no order by rating desc");
while($row=mysqli_fetch_array($result))
{
    $obj1["rating"]=$row["rating"];
    $obj1["name"]=$row["name"];
    $obj1["price_per_kg"]=$row["price_per_kg"];
    $obj1["quantity_kg"]=$row["quantity_kg"];
    $obj1["mobile_no"]=$row["mobile_no"];
    $obj1["state"]=$row["state"];
    $obj1["location"]=$row["location"];
    $obj1["url"]=$row["url"];
    
    array_push($obj,$obj1);
    //echo "hi";
}
$obj2["farmers"]=$obj;
echo json_encode($obj2);
?>