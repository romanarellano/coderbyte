function SimpleMode(arr){
var count =1;   
var obj={};
var index=arr.length;

for(i=0;i<arr.length;i++){
obj[arr[i]]=obj[arr[i]] || 0;
obj[arr[i]]++; 
}

for(var j in obj){

  if(obj[j]>count){ 
count=obj[j];
number =j;

}
if(obj[j]==count && arr.indexOf(Number(j))<index){
 	
number =j;
index=arr.indexOf(Number(j));
  }
}
if(count>1)
return number;
return -1;
}

console.log(SimpleMode([3,3,4,4,2,6,6,6,2,2,1,5,5,5]))