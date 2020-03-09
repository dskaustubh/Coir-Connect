$("#btn").click(function(){   

var m=$("#mob").val();
var t=$("#msg").val();
if(isNaN(m)){
$("#problem1").html("**input only no.");
return false;
}
if (m.length!=10) {
$("#problem1").html("**mobile no. should be of 10 digit only");
return false;
}
var pos_pass=t.indexOf("p=");
var pos_qty=t.indexOf("q=");
var pos_amt=t.indexOf("pkg=");
var eq= [];
var sp=[];
var index=0;
while (( index = t.indexOf(' ', index + 1)) > 0) {
   sp.push(index);
}
index=0;
while (( index = t.indexOf('=', index + 1)) > 0) {
   eq.push(index);
}


if(pos_pass==-1||pos_qty==-1||pos_amt==-1||sp.length!=2||eq.length!=3){
  $("#problem2").html("**wrong syntax");
  return false;
}
var pass_conf=t.slice(0,eq[0]);
var qty_conf=t.slice(sp[0]+1,eq[1]);
var amt_conf=t.slice(sp[1]+1,eq[2]);
var pass=t.slice(2,sp[0]);
var qtystr=t.slice(sp[0]+3,sp[1]);
var amtstr=t.slice(sp[1]+5,t.length);

if(pass_conf!="p"||qty_conf!="q"||amt_conf!="pkg"||isNaN(qtystr)||isNaN(amtstr))
{ $("#problem2").html("**wrong syntax");
return false;
}

var qty=parseFloat(qtystr);
var amt=parseFloat(amtstr);

console.log(pass);
console.log(qty);
console.log(amt);








});
