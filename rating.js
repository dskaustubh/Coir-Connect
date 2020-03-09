var s,temp,k1,a,b;var check=false;var mn=false;
var a1=(JSON.parse( sessionStorage.getItem("items")));

var buttonClickedId = null;
//console.log(a);//kds

if(a1!=null)
{
	$(".us2").css("display","none");
	$("#navbarDropdown").html("HI       "+a1["user_name"]+ " !!!!!");
 	$("#login_btn").html("HAVE A NICE DAY");
 	data=null;
             
	  	$.post("sortbyrating.php", data, function(stat) {
			stat = JSON.parse(stat);
			 a=(stat["farmers"]); 
		   
			for(var j=0;j<temp;j++)
			{
				var r="r"+j;
        $("#"+r).remove();
			}   

		 	temp=a.length;
		 	
			for(var i=0;i<a.length;i++)
			{ 
				 b=a[i];
				var c="r"+i;var k="b"+i;
				$("#tb").after("<tr id ="+c+"><td>"+(a.length-i)+"</td><td>"+b["name"]+"</td><td>"+b["quantity_kg"]+"</td><td>"+b["price_per_kg"]+"</td><td>"+b["mobile_no"]+"</td><td>"+b["location"]+"</td><td>"+b["rating"]+"</td><td><img src=\"farmercoirpics/"+b["url"]+"\" style=\"width:30vh;height:15vw;\"></td><td><button type=\"button\" id ="+k+" class=\"btn btn-outline-secondary abcd\" onclick=placeOrderClicked(" + k +")>place order</button></td></tr>") ;   
			}

		});

	var placeOrderClicked = function(button) {
	
		buttonClickedId = button.id;
		$("#id01").css("display","block");
	 $("#submit_btn").css("display","block");
	 $("#warningq").html("");
	  $("#warningq").css("color","red")   ;  
	};

	$("#submit_btn").on('click',function() {
	      var qty=$("#quantityInput").val();
	    var no=buttonClickedId.slice(1);
	   qty=Number(qty);
	        $("#warningq").html("")
	    
	   b=a[Number(no)];
	  
	    if(qty=="")
	    {
	        $("#warningq").html("**empty field");
	         return false;
	        
	    }
	    if(isNaN(qty))
	    {
	        $("#warningq").html("**INPUT ONLY NO.")
	    return false;
	        
	    }
	    if(b["quantity_kg"]<qty)
	    {
	        $("#warningq").html("**seller does not possess this amt.")
	    
	        return false;
	    }
	    
	    var qw=b["location"].slice(-6);
	   var qwe=a1["location"].slice(-6)
	    var datax={"o":qw,
			    "d":qwe
			      }
			    
			    $.post("maps1.php", datax, function(statx) {
			statx = JSON.parse(statx);
			    console.log(statx)
			  estmtime=  statx["duration"];
			   estmcost=statx["distance"]*7.5; 
			    alert("your order will cost "+qty*b["price_per_kg"]+" rupees with transportation cost "+estmcost+" . Total cost will be "+(qty*b["price_per_kg"]+estmcost)+" rupees estimated time of arrival is  "+estmtime) ;
			});
	   
	  	var data = { "f_mobile_no":b["mobile_no"] ,
	  	    "i_mobile_no":a1["mob"],
	  	    "f_name":b["name"],
	  	    "i_name":a1["user_name"],
	  	    "price_per_kg":b["price_per_kg"],
	  	    "quantity_kg":qty,
	  	    "status":"0",
	  	    "f_state":b["state"],
	  	    "i_state":a1["state"]
	  	};  
	  
	  	$.post("updateintermediate.php", data, function(stat) {
			stat = JSON.parse(stat);
	  if(stat["sucess"]==true)
	  {
	     $("#submit_btn").css("display","none");
	    $("#warningq").css("color","green");
	    $("#warningq").html("order successfully sent")  ;
	  }
	  else
	  $("#warningq").html("order could not be placed")  ;
	  	});


	data={"mobile_no":b["mobile_no"],
	       "content":a1["user_name"]+" needs "+  qty  +" kgs of coir matrial from you .His  contact no. is   "+a1["mob"]
	}
	
	  $.post("addnotifs.php", data, function(stat) {
			stat = JSON.parse(stat);
			console.log(stat);
	  });
	    

	    
	    
	});




	$("#logout_btn").click(function() {
		sessionStorage.clear();
		window.location.href="index.html";
	});   

	$("#tr").click(function() {
		window.location.href="Transactions.html";
	});
    
}
else
{ 
	window.location.href="index.html";
} 	