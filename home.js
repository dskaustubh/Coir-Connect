var a;    
 a=(JSON.parse( sessionStorage.getItem("items")));
 console.log(a);
 if(a!=null)
 {
   $("#custom_uj").css("display","block") ;
   $(".us2").css("display","none");
   $("#cpw").css("display","block");
   $("#log_out").css("display","block");
    $("#notif").css("display","block");
     $("#accdel").css("display","block");
   $("#navbarDropdown").html("HI       "+a["user_name"]+ " !!!!!");
   $("#log_out").click(function(){
   
     sessionStorage.clear();
         window.location.href="index.html"; 
       
   });
 
$("#custom_uj").click(function(){
    
 
 
 if(a["role"]==1)
 {
  window.location.href="farmer_login.html"; 
 }
 if(a["role"]==2)
{
   window.location.href="Industrialist.html";   
}
    
    
    
});

     
 }