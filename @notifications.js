 var a=(JSON.parse( sessionStorage.getItem("items")));
  if(a!=null)
  { $("#navbarDropdown").html("HI       "+a["user_name"]+ " !!!!!");
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
  var data = {
            
             "mobile_no":a["mob"]
             
         } 
         $.post("checknotifs.php",data ,
		             function(s)
		{
                        s = JSON.parse(s);
	var notifs=s["notifs"];
	console.log(s);
	if(notifs.length==0)
	{
	    	$("#tb").after("<tr><td>sorry no notifications right now check back soon</td></tr>") ;   
		
	}
	 
	
	
	
	for(var i=0;i<notifs.length;i++)
			{ var t_n=notifs[i] ;
			    var content=t_n["content"] ;
			    var time=t_n["time_stamp"];
				$("#tb").after("<tr><td>"+content+"</td><td>"+time+"</td></tr>") ;   
		
		
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