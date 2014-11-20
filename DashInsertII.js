
function DashInsertII(num){

  isEven = function(a){
     if(a%2==0)return true;
     return false;
  }
  str="";
var num = num.toString().split("");
  for(var i=0;i<num.length;i++){
      str+=num[i];
      if(i==num.length-1 || num[i]==0)continue;
      else if(true ==isEven(num[i])&& isEven(num[i])==isEven(num[i+1]))str+="*";
      else if(false == isEven(num[i]) && isEven(num[i])==isEven(num[i+1]))str+="-";
  }
return str;
}

console.log(DashInsertII(56647304))