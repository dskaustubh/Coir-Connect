<?php   
require_once("create_connection.php");
$conn=$GLOBALS["conn"];
$state=$_REQUEST["state"];
//$mobile_no=$_REQUEST["mobile_no"];
//echo $state;
$returnvalue= array();
$returnvalue["sucess"]=false;
$obj=array();
$obj1=array();
if($state=="All")
{
    $result=mysqli_query($conn,"SELECT users.mobile_no,role,price_per_kg,quantity_kg,name,location,state FROM USERS,FARMERS WHERE role=1");
     while($row=mysqli_fetch_array($result))
        {
            // echo $row["mobile_no"];
           //
           //$fm=$row["mobile_no"];
            //echo $fm."\n";
            $returnvalue["sucess"]=true;
            //$result1=mysqli_query($conn,"SELECT * FROM users,farmers where role=1");
          
            
                $obj1["f_name"]=$row["name"];
                $obj1["price_per_kg"]=$row["price_per_kg"];
                $obj1["f_state"]=$row["state"];
                $obj1["quantity_kg"]=$row["quantity_kg"];
                $obj1["f_mobile_no"]=$row["mobile_no"];
                $obj1["location"]=$row["location"];
                //echo $row1["mobile_no"];
                array_push($obj,$obj1);
            
    
    
    
        }
    
}
else
{
    $result=mysqli_query($conn,"SELECT * FROM USERS,FARMERS WHERE role=1 and state='$state'");
     while($row=mysqli_fetch_array($result))
        {
            // echo $row["mobile_no"];
           //
           //$fm=$row["mobile_no"];
            //echo $fm."\n";
            $returnvalue["sucess"]=true;
            //$result1=mysqli_query($conn,"SELECT * FROM users,farmers where role=1");
          
            
                $obj1["f_name"]=$row["name"];
                $obj1["price_per_kg"]=$row["price_per_kg"];
                $obj1["f_state"]=$row["state"];
                $obj1["quantity_kg"]=$row["quantity_kg"];
                $obj1["f_mobile_no"]=$row["mobile_no"];
                $obj1["location"]=$row["location"];
                //echo $row1["mobile_no"];
                array_push($obj,$obj1);
            
    
    
    
        }
}
$returnvalue["farmers"]=$obj;
echo json_encode($returnvalue);
?>