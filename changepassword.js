var a=(JSON.parse( sessionStorage.getItem("items")));     
if(a!=null)
{$("#navbarDropdown").html("HI       "+a["user_name"]+ " !!!!!");
  $("#psw").click(function(){
 if(a["role"]==1)
 {
     window.location.href="farmer_login.html";
 }
 if(a["role"]==2)
 {
     window.location.href="Industrialist.html";
 }
 
 
 
  });
      
 
 
 $("#submit_btn").click(function(){

 var old=$("#o_p").val();
 var n=$("#n_p").val();
 var cn=$("#cn_p").val();
 $("#warning_n_p").html("");
 $("#warning_cn_p").html("") ;  
  $("#warning_o_p").html("");
  $("#warning_t_p").html("");  
  
  if(old=="")
  {
    $("#warning_o_p").html("**empty field");   
  return false;
      
  }
  if(n=="")
  {
     $("#warning_n_p").html("**empty field") ;   
  
      return false;
  }
  if(cn=="")
  {
   $("#warning_cn_p").html("**empty field");
 return false;
  }
  
  
  
  
  
   if(n.length<6)  
     {
        $("#warning_n_p").html("**password must be geater than 6 char.");
     
         return false;
     }
     if(n.indexOf("=")!=-1||n.indexOf(" ")!=-1)  
     {
        $("#warning_n_p").html("**password must not contain = and space");
     
         return false;
     }
     if(cn!=n)
     {
       $("#warning_cn_p").html("**passwords not matching") ; 
     
         return false;
     }
     var data={"mobile_no":a["mob"],
               "old_password":old,
               "new_password":n
         
     }
                
     $.post("changepassword.php",data ,
		             function(status1){
		                 status1 = JSON.parse(status1);
     
     if(status1["change"]==false)
		   {
		   $("#warning_t_p").html("old password entered is wrong");     
		   }
	 else
	 {
	  $("#warning_t_p").html("password is successfully updated");   
	 }
		                 
		                 
		                 
		                 
		             });
 });
 $("#log_out").click(function(){
   
     sessionStorage.clear();
         window.location.href="index.html"; 
       
   });    

    
    
    
}
else
{
    window.location.href("index.html")
}