var a=(JSON.parse( sessionStorage.getItem("items")));
console.log(a);
if(a!=null)
{ $("#navbarDropdown").html("HI       "+a["user_name"]+ " !!!!!");
$("#logout_btn").click(function(){
        
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

var t=a["transactions"]  ;
if(a["role"]==1)
{
$("#fname").html("industry person");

for(var i=0;i<t.length;i++)
		{var b=t[i];
		var c="r"+i;
		$("#tb").after("<tr id ="+c+"><td>"+(t.length-i)+"</td><td>"+b["i_name"]+"</td><td>"+b["quantity_kg"]+"</td><td>"+b["price_per_kg"]+"</td><td>"+(b["quantity_kg"]*b["price_per_kg"])+"</td><td>"+b["i_mobile_no"]+"</td></tr>") ;   
	
		}    
    
}
if(a["role"]==2)
{
 for(var i=0;i<t.length;i++)
		{var b=t[i];
		var c="r"+i;
		$("#tb").after("<tr id ="+c+"><td>"+(t.length-i)+"</td><td>"+b["f_name"]+"</td><td>"+b["quantity_kg"]+"</td><td>"+b["price_per_kg"]+"</td><td>"+ (b["quantity_kg"]*b["price_per_kg"])+"</td><td>"+b["f_mobile_no"]+"</td></tr>") ;      
    
}
}
}
else
{
    window.location.href="index.html";
    
}