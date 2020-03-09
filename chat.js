 $("#submit_btn").click(function(){
        
       
var sno=$("#senderno").val();
var rno=$("#receiverno").val();
var txt=$("#txt").val();

var data={"msg":txt,

"umn":sno
}
    


$.post("sms.php",data ,
		             function(s)
		{
                        s = JSON.parse(s);
	s=s["chats"];
		for(var i=0;i<s.length;i++)
		{console.log(i);
		    
		var b=s[i];
		console.log(b);
		
		if(sno==b["smno"])
		{
		    $("#mess").after("<p class=\"message_send\">"+b["message"]+"<br>"+b["time"]+"<br><br></p>");
		}
		  else
		  {
		    $("#mess").after("<p class=\"message_receive\">"+b["message"]+"<br>"+b["time"]+"<br><br></p>");
		
		  
		  }
		    
		    
		    
		    
		}
		 
		 
		 
		 
		    
		});
		
		




       
       });


