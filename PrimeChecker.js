function PrimeChecker(num){


result =[];

    var isPrime = function(num){

     for(j=2;j<num;j+=1)
       if(num/j==Math.floor(num/j))return false;
     return true;
    }

   function permuta(num_str,arr){
      if(arr.length==0 && isPrime(num_str))result.push(num_str);
      
       for(var i=0;i<arr.length;i++){
       var picked =arr[i];
     arr.splice(i,1);
     permuta(num_str+picked,arr);
       arr.splice(i,0,picked);
     }
    }
    permuta('',num.toString().split(''));
    
    
     
  if(result.length>0)return 1;
  return 0;


}

console.log(PrimeChecker(73))