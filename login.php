<?php
require_once("create_connection.php");
$conn = $GLOBALS["conn"];
$password = $_POST["password"];
$mobile_no = $_POST["mobile_no"];
$hash = md5($password);
$entry = false;
$uid = null;
$return_value = array();
$return_value["user_name"] = null;
$return_value["role"] = null;
$sql_req = "SELECT * from users WHERE mobile_no='$mobile_no'";
$result = mysqli_query($conn, $sql_req);
$obj = array();
$obj1 = array();
while ($row = mysqli_fetch_array($result)) {
        if ($hash == $row["password"]) {
                $entry = true;
                $return_value["role"] = $row["role"];
                $role = $row["role"];
                $state = $row["state"];
                $return_value["state"] = $state;
                $location = $row["location"];
                $return_value["location"] = $location;
        }
        if ($entry == true) {
                if ($row["role"] == 1) {
                        $sql1 = "SELECT * from farmers WHERE mobile_no='$mobile_no'";
                        $result1 = mysqli_query($conn, $sql1);
                        $row1 = mysqli_fetch_array($result1);
                        $return_value["user_name"] = $row1["name"];
                        $return_value["price_per_kg"] = $row1["price_per_kg"];
                        $return_value["quantity_kg"] = $row1["quantity_kg"];
                        //echo $row["password"];
                }
                if ($row["role"] == 2) {
                        $sql2 = "SELECT * from industries WHERE mobile_no='$mobile_no'";
                        $result2 = mysqli_query($conn, $sql2);
                        $row2 = mysqli_fetch_array($result2);
                        $return_value["user_name"] = $row2["name"];
                        // $returhvalue["location"]=$r
                }
                $result4 = mysqli_query($conn, "select * from history where f_mobile_no='$mobile_no' OR i_mobile_no='$mobile_no'");
                while ($row7 = mysqli_fetch_array($result4)) {
                        $obj1["f_mobile_no"] = $row7["f_mobile_no"];
                        $obj1["i_mobile_no"] = $row7["i_mobile_no"];
                        $obj1["t_id"] = $row7["t_id"];
                        $obj1["price_per_kg"] = $row7["price_per_kg"];
                        $obj1["quantity_kg"] = $row7["quantity_kg"];
                        $obj1["f_name"] = $row7["f_name"];
                        $obj1["i_name"] = $row7["i_name"];
                        array_push($obj, $obj1);

                        //echo $obj1["f_mobile_no"];


                }
                $return_value["transactions"] = $obj;
        }
}

$return_value["entry"] = $entry;
echo json_encode($return_value);
