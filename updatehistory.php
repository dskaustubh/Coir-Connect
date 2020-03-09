<?php
require_once("create_connection.php");
$returnvalue["sucess"] = false;
$status = $_POST["status"];
$quantity_kg = $_REQUEST["quantity_kg"];
$quantity_kg = (int) $quantity_kg;
$inter_id = $_POST["inter_id"];
$conn = $GLOBALS["conn"];

$result1 = mysqli_query($conn, "SELECT * from intermediate where inter_id='$inter_id'");
while ($row1 = mysqli_fetch_array($result1)) {
    if ($status == 2) {
        $result2 = mysqli_query($conn, "DELETE from intermediate where inter_id='$inter_id'");
        $returnvalue["sucess"] = true;
    } else if ($status == 1) {
        $f_mobile_no = $row1["f_mobile_no"];
        $i_mobile_no = $row1["i_mobile_no"];
        $i_name = $row1["i_name"];
        $f_name = $row1["f_name"];
        $f_state = $row1["f_state"];
        //$f_location=$row1["f_location"];
        $i_state = $row1["i_state"];
        //$i_location=$row1["i_location"];
        $price_per_kg = $row1["price_per_kg"];
        //insertingstarts
        $result = mysqli_query($conn, "INSERT INTO  history (i_mobile_no,f_mobile_no,price_per_kg,quantity_kg,f_name,i_name,i_state,f_state) values ('$i_mobile_no','$f_mobile_no','$price_per_kg','$quantity_kg','$f_name','$i_name','$i_state','$f_state')");
        $result2 = mysqli_query($conn, "DELETE from intermediate where inter_id='$inter_id'");


        $result3 = mysqli_query($conn, "UPDATE farmers set quantity_kg=quantity_kg-'$quantity_kg' where mobile_no='$f_mobile_no'");

        //reducequantity
        if ($result) {
            $returnvalue["sucess"] = true;
        }
    }
}

echo json_encode($returnvalue);


//$i_name=$_REQUEST["i_name"];
//$price_per_kg=$_REQUEST["price_per_kg"];
//$f_mobile_no=$_REQUEST["f_mobile_no"];
//$i_mobile_no=$_REQUEST["i_mobile_no"];
//$f_name=$_REQUEST["f_name"];//status :0 when i places oder,1 when f accepts,2if he declines
