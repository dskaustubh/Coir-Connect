 var a,q,pkg;      
 a=(JSON.parse( sessionStorage.getItem("items")));
  console.log(a);
  if(a!=null)
  {$(".us2").css("display","none");
      $("#navbarDropdown").html("HI       "+a["user_name"]+ " !!!!!");
 $("#login_btn").html("hi     "+a["user_name"]);
  $("#q").html(a["quantity_kg"]);
    $("#pkg").html(a["price_per_kg"]);
     
     $("#tot").html(Number(a["price_per_kg"])*Number(a["quantity_kg"]));
     $("#update_btn").click(function(){
          $("#alert_q").html("");
           $("#alert_pkg").html("");
         
         q=$("#in_q").val();
         pkg=$("#in_pkg").val();
        
        
        if(pkg=="")
        {
            $("#alert_pkg").html("**empty field");
        return false;
        }
        if(q=="")
        {
        $("#alert_q").html("**empty field");
        return false;
        } if(isNaN(pkg))
        {
            $("#alert_pkg").html("**enter only digits");
        return false;
        }
        if(isNaN(q))
        {
        $("#alert_q").html("**enter only digits");
        return false;
        }
        
        console.log("AAAA");
        
         var data = {
            "quantity":q,
            "price":pkg, 
             "mobile_no":a["mob"]
             
         } 
         $.post("update_price.php",data ,
		             function(s)
		{
                        s = JSON.parse(s);
		if(s["sucess"]==false)
		{$("#alert_update").html("your entry could not be updated");
		}
		else
		{
		  a["price_per_kg"]=pkg;
		  a["quantity_kg"]=q;
		  sessionStorage.setItem("items",JSON.stringify(a));
		  window.location.href="farmer_login.html";
		
		  
		
		}
		    
		});
        
      });
      $("#logout_btn").click(function(){
        
        sessionStorage.clear();
         window.location.href="index.html";
       
       });
     $("#tr").click(function(){
     window.location.href="Transactions.html";
         
         
     });
     
       
       
  }
  else
  { window.location.href="index.html";
  
      
  }