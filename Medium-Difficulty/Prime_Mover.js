
function isPrime(num){

    for(i=2;i<num;i++)

    	if(num!=2 && num/i==Math.floor(num/i))return false;
    return true;
}


function PrimeMover(num){
    var add=0;
var prim;
    for(j=2;j<Math.pow(10,4);j++){
  if(isPrime(j)){
  	add+=1;
    prim=j;
    }
  

if(add==num)break;
 } 
return prim;
}
console.log(PrimeMover(16));