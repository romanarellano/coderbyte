
function FormattedDivision(num1,num2){
var str="";
var res = num1/num2;
var update =String(res.toFixed(4));

var dot = update.indexOf(".");
var comma_input= update.substring(0,dot).split("").reverse();

for(i=3;i<comma_input.length;i+=4)
comma_input.splice(i,0,",");
var accomodate =comma_input.reverse().join("");


if(update.length>8){

return accomodate.concat(update.substring(dot,update.length));
}
return update;
}

console.log(FormattedDivision(12345678934234,10000));