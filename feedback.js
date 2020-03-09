var bid;
var poc = function(button) {
	
		bid = button.id;
bid=bid.slice("1");
$(".ff").css("display","none");
   if(bid==1)
{$("p").html("<em>we are very sorry</em>")

    $("#i1").css("display","block");
}
 if(bid==2)
{$("p").html("<em>we will try to improve our service</em>")
$("#i2").css("display","block");
    
}
 if(bid==3)
{$("p").html("<em>we will not let you down again</em>")

    $("#i3").css("display","block");
}
if(bid==4)
{$("p").html("<em>its good to see you happy</em>")

    $("#i4").css("display","block");
}
if(bid==5)
{$("p").html("<em>amazing!!!!!</em>")

    $("#i5").css("display","block");
}

    
    
    
    
}