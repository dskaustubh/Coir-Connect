<?php
$conn=$GLOBALS["conn"];
require_once ("create_connection.php");
$mobile_no=$_REQUEST["mobile_no"];
$password=$_REQUEST["password"];
$user_name=null;
$state="TAMILNADU";
$location="kanyakumari";
$user_name=$_REQUEST["user_name"];
$location=$_REQUEST["location"];
$state=$_REQUEST["state"];
$role=$_REQUEST["role"];
$aadhar_no=null;
$license_no=null;
$aadhar_no=$_REQUEST["aadhar_no"];
$license_no=$_REQUEST["license_no"];
$hash=md5($password);
$returnvalue=array();
$returnvalue["sucess"]=false;
$file_name = $_FILES['image']['name'];
$file_tmp =$_FILES['image']['tmp_name'];
$url=null;
$url=$mobile_no."jpeg";
$prev="userpics/";

//echo $user_name;
if($user_name&&$mobile_no)
{       
        //echo "hi";
        
        $result=mysqli_query($conn,"INSERT INTO users (role,mobile_no,password,location,state,url)
        VALUES('$role','$mobile_no','$hash','$location','$state','$url')");
        if($role==1)
        {
                        //$sql_req2="INSERT INTO farmers (name,mobile_no,aadhar_no) values ('$user_name','$mobile_no','$aadhar_no')";
        
                        $result1=mysqli_query($conn,"INSERT INTO farmers (name,mobile_no,aadhar_no) values ('$user_name','$mobile_no','$aadhar_no')");
                        
        }
        else if($role==2)
        {
                //$sql_req3="INSERT INTO industries (name,mobile_no,license_no) values ('$user_name','$mobile_no','$license_no')";
                $result2=mysqli_query($conn,"INSERT INTO industries (name,mobile_no,license_no) values ('$user_name','$mobile_no','$license_no')");
        
        }
        if($result)
{
$returnvalue["sucess"]=true;
}

}
//move_uploaded_file($file_tmp,$prev.$url);


echo json_encode($returnvalue);
?>
