

function PermutationStep(num){
    
  
    var arr = function(n){
       
     var str =  n.toString().split("");
     return str.sort();
   }
   
   var ord = function(arr){
       str="";
       for(i=0;i<arr.length;i++)
       str+=arr[i];
       return str;
   }

   var minusone = function(num){
   var rev= ('' + num).split("").sort(function(a,b){return a < b})
     return ord(rev);

  }
  
  if(minusone(num)==num) return -1;
    
    for(j=num+1; ;j++){
      
    if(ord(arr(num))==ord(arr(j)))return j;
     }    
     }

console.log(PermutationStep(56))


