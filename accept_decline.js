 var a;
 var ax=(JSON.parse( sessionStorage.getItem("items")));
var buttonClickedId=null;
  if(ax!=null)
  {$("#navbarDropdown").html("HI       "+ax["user_name"]+ " !!!!!");
  $("#custom_uj").click(function(){
    if(ax["role"]==1)
 {
  window.location.href="farmer_login.html"; 
 }
 if(ax["role"]==2)
{
   window.location.href="Industrialist.html";   
}
});
  
  var data = {
            
             "mobile_no":ax["mob"]
             
         } 
         $.post("sendintermediate.php",data ,
		             function(s)
		{
                        s = JSON.parse(s);
	a=s["intermediate"];
 
for(var i=0;i<a.length;i++)
			{ 
				 var b=a[i];
				 console.log(b);
				var accept="a"+i;var decline="d"+i;
				$("#tb").after("<tr ><td>"+(a.length-i)+"</td><td>"+b["i_name"]+"</td><td>"+b["i_mobile_no"]+"</td><td>"+b["quantity_kg"]+"</td><td>"+b["price_per_kg"]+"</td><td><button type=\"button\" id ="+accept+" class=\"btn btn-outline-success\" onclick=placeOrderClicked(" + accept +")>accept</button></td><td><button type=\"button\" id ="+decline+" class=\"btn btn-outline-danger\" onclick=placeOrderClicked(" + decline +")>decline</button></td></tr>") ;   
			}
		
		});	    
		var placeOrderClicked = function(button) {
	     
		buttonClickedId = button.id;
		$("#id01").css("display","block");
		    
		};    
		   
		$("#ok_btn").on('click',function() {
	console.log(buttonClickedId)
	if(buttonClickedId.indexOf("a")!=-1)
	{
	   
	  buttonClickedId=buttonClickedId.slice(1);
	    var c=a[buttonClickedId];
	   console.log("abcdefg");
	var data={
	"inter_id":c["inter_id"],
	"status":1,
	"quantity_kg":c["quantity_kg"]
	    
	};
	
		  ax["quantity_kg"]-=c["quantity_kg"];
		  sessionStorage.setItem("items",JSON.stringify(ax));
	 $.post("updatehistory.php",data ,
		             function(status)
		{
                        status = JSON.parse(status);
		
		   if(status["sucess"]==true)
		   {
		      $("ok_btn").css("display","none");
		      alert("order successfully accepted");
		   var data2={
	"mobile_no":c["i_mobile_no"],
	"content":"your order of raw material of quantity  "+c["quantity_kg"]+" was accepted by "+ax["user_name"] + " . his contact no. is "+ ax["mob"]+". <a href=\"feedback.html\">please provide your valuble feedback to help us provide better services to you</a>"
	    
	};
	$.post("addnotifs.php",data2 ,
		             function(status2)
		{	   
		    status2 = JSON.parse(status2);
		});
		   
		   
		   
		   
		   
		   
		   
		   
		    window.location.href="accept_decline_farmer.html";
		       
		   
		       
		       
		       
		       
		       
		       
		       
		       
		       
		       
		   }
		    
	
	
	
	
	
	
		});
		 
	   
	}
	else
	{buttonClickedId=buttonClickedId.slice(1);
	    var c=a[buttonClickedId];
	   console.log(c);
	var data={
	"inter_id":c["inter_id"],
	"status":2,
	"quantity_kg":c["quantity_kg"]
	    
	};
	 $.post("updatehistory.php",data ,
		             function(status)
		{
                        status = JSON.parse(status);
		
		   if(status["sucess"]==true)
		   {
		      $("ok_btn").css("display","none");
		      alert("order successfully rejected");
		   var data2={
	"mobile_no":c["i_mobile_no"],
	"content":"your order of raw material of quantity  "+c["quantity_kg"]+" was declined by "+ax["user_name"] + " . his contact no. is "+ ax["mob"]
	    
	};
	$.post("addnotifs.php",data2 ,
		             function(status1)
		{	   
		    status2 = JSON.parse(status2);
		});
		   
		   
		   
		   
		   
		   
		   
		   
		    window.location.href="accept_decline_farmer.html";
		       
		   
		       
		       
		       
		       
		       
		       
		       
		       
		       
		       
		   }
		    
	
	
	
	
	
	
		});
		
		
		
	    
	    
	    
	    
	    
	    
	}
		   
		   
		   
		    
		    
		});
		    
		    
		    
		    
		    
		    
		    
		    
  $("#logout_btn").click(function(){
        
        sessionStorage.clear();
         window.location.href="index.html";
       
       });
     
  }
  else
  {
      window.location.href="index.html";
  }