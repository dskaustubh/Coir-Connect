
var role,mob,aadhar,license,pass1,pass2,usr,loc,address,addr1,addr2,count=0;
$(document).ready(function(){
var e;$("#aa").css("display","none") ;
$("#in").css("display","none") ;
$(".form").css("display","none");

  $('.dropdown').on('change', function() {
    $("#aa").css("display","none") ;
    $("#in").css("display","none") ;
    $(".form").css("display","none");

     e=this.value ; 
    
$("#greetings1").html("");
     $("#greetings2").html("");
     $("#usernamealert").html("");
        $("#mobalert").html("");
        $("#passalert").html("");
        $("#confirmalert").html("");
        $("#aain").html("");
        $("#pinalert").html("");
 if(e=="farmer")
   {$("#greetings1").html("<strong>HI FARMER</strong>");
     $("#greetings2").html("<strong>JAI JAWAN JAI KISAN</strong>");
       $(".form").css("display","block");
     $("#fi").html("AADHAR CARD NO.");
   $("#aa").css("display","block") ;
     role=1;
   }
  else if(e=="industrialist")
   {
     $("#greetings1").html("<strong>HI INDUSTRY OWNERS</strong>");  
      $("#greetings2").html("<strong>LETS GET DOWN TO WORK</strong>"); 
       $(".form").css("display","block");
     $("#fi").html("INDUSTRY LICENSE NO.");
   $("#in").css("display","block") ;
   role=2;
    }
   else
   {
     $("#fi").html("");
   
    }
   
   
   
   

  
      $("#sign_up").click(function(){
       
       if(count===0)
  {    count=1;
        $("#usernamealert").html("");
        $("#mobalert").html("");
        $("#passalert").html("");
        $("#confirmalert").html("");
        $("#aain").html("");
        $("#warning_loc").html("");
        $("#warning_addr1").html("");
        $("#warning_addr2").html("");
        $("#pinalert").html("");
     
     if($("#usr").val()==="")
    {
    $("#usernamealert").html("**empty field");
            count=0;
            return false;
    }
    if($("#mob").val()==="")
    {
    $("#mobalert").html("**empty field");
            count=0;
            return false;
    }
    if($("#pass1").val()==="")
    {
    $("#passalert").html("**empty field");
            count=0;
            return false;
    }
    if($("#pass2").val()==="")
    {
    $("#confirmalert").html("**empty field");
            count=0;
            return false;
    }
    if($("#aa").val()===""&&$("#in").val()==="")
    {
    $("#aain").html("**empty field");
            count=0;
            return false;
    }
    
     loc=$("#state_select").val()
   
    addr1=$("#addr1").val();
    addr2=$("#addr2").val();
    
     if(loc=="")
    { $("#warning_loc").html("**empty field.");
     count =0;
     return false;
    }
     if(addr1=="")
    { $("#warning_addr1").html("**empty field.");
    count=0;
    return false;
        
    }
    if(addr2=="")
    { $("#warning_addr2").html("**empty field.");
    count=0;
    return false;
    }
    if($("#pin").val()=="")
    {$("#pinalert").html("**empty field.");
    count=0;
    return false;
    
    }
    
    
   addr=addr1+addr2;
    
     if($("#mob").val().length!=10&&!$("#mob").val().NAN)
    {
        $("#mobalert").html("**incorrect format of mobile no.");
            count=0;
            return false;
           
    }
    if($("#pass1").val().length<6)
    {
        $("#passalert").html("**password length should be greater than or  equal to 6");
            count=0;
            return false;
     }
      if($("#pass1").val().indexOf("=")!=-1||$("#pass1").val().indexOf(" ")!=-1)
    {
        $("#passalert").html("**dont use \"=\" and space in password" );
            count=0;
            return false;
     }
       
       if($("#pass1").val()!=$("#pass2").val())
    {
        $("#confirmalert").html("both passwords are not matching" );
            count=0;
            return false;
     }
       if(role==1)
      { if($("#aa").val().length!=12||$("#aa").val().NaN)
    { count=0;
        $("#aain").html("**wrong format of aadhar no.");
            return false;
     }
      }
      if($("#pin").val().NaN||($("#pin").val().length!=6))
    {
        $("#pinalert").html("wrong format of pin");
    count=0;
    return false;
    
    }
    addr+=$("#pin").val();
      
    
     
     
     
     
     
     mob=$("#mob").val();
     aadhar= $("#aa").val();
     license=$("#in").val();
     pass1=$("#pass1").val();
     pass2=$("#pass2").val();
     usr=$("#usr").val();
     
     
     
     
     var data = {
            "user_name":usr,
            "mobile_no": $("#mob").val(),
            "password": $("#pass1").val(),
            "aadhar_no":$("#aa").val(),
            "license_no":$("#in").val(),
            "role":role,
            "state":loc,
            "location":addr


        };
       
        $.post("signup.php",data ,
		             function(status1){
		                 status1 = JSON.parse(status1);
                        
        console.log(status1)
         if(status1["sucess"]==false)
          {
            $("#allwrong").html("sorry your details could not be updated..because of existing data please refresh page");
              return false;
          }
          else
          {
            $("#allwrong").html("YOUR DATA UPDATED SUCCESSFULLY");
              var mob;
                         
                       sessionStorage.setItem("mob",mob);
              
              
              
              
              return false;
          
              
              
          }
		          
	

	  
	}	            
 
         
      
     );


}




});
});
});
