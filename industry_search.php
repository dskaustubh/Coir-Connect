<?php
require_once("create_connection.php");
$conn = $GLOBALS["conn"];
$state = $_POST["state"];

$returnvalue = array();
$returnvalue["sucess"] = false;
$obj = array();
$obj1 = array();
// echo $state;
if ($state == "All") {
    $result = mysqli_query($conn, "SELECT mobile_no,location,state FROM users WHERE role=1 ORDER BY price_per_kg by desc  ");
    while ($row = mysqli_fetch_array($result)) {
        // echo $row["mobile_no"];
        $fm = $row["mobile_no"];
        //echo $fm."\n";
        $returnvalue["sucess"] = true;
        $result1 = mysqli_query($conn, "SELECT * FROM farmers where mobile_no='$fm'  ");
        while ($row1 = mysqli_fetch_array($result1)) {
            $obj1["f_name"] = $row1["name"];
            $obj1["url"] = $row1["url"];
            $obj1["price_per_kg"] = $row1["price_per_kg"];
            $obj1["quantity_kg"] = $row1["quantity_kg"];
            $obj1["f_mobile_no"] = $row1["mobile_no"];
            $obj1["location"] = $row["location"];
            $obj1["state"] = $row["state"];
            //echo $row1["mobile_no"];
            array_push($obj, $obj1);
        }
    }
} else {
    $result = mysqli_query($conn, "SELECT * FROM users WHERE role=1 AND state='$state'   ");
    while ($row = mysqli_fetch_array($result)) {
        // echo $row["mobile_no"];
        $fm = $row["mobile_no"];
        //echo $fm."\n";
        $returnvalue["sucess"] = true;
        $result1 = mysqli_query($conn, "SELECT * FROM farmers where mobile_no='$fm' ");
        while ($row1 = mysqli_fetch_array($result1)) {
            $obj1["f_name"] = $row1["name"];
            $obj1["price_per_kg"] = $row1["price_per_kg"];
            $obj1["quantity_kg"] = $row1["quantity_kg"];
            $obj1["f_mobile_no"] = $row1["mobile_no"];
            $obj1["location"] = $row["location"];
            $obj1["state"] = $row["state"];
            $obj1["url"] = $row1["url"];


            $returnvalue["duration"] = $data->rows[0]->elements[0]->duration->text;
            $returnvalue["distance"] = (int) $data->rows[0]->elements[0]->distance->value / 1000;
            //echo $row1["mobile_no"];
            array_push($obj, $obj1);
        }
    }
}
$returnvalue["farmers"] = $obj;
echo json_encode($returnvalue);
