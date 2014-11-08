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
if(obj[j]==count && arr.indexOf(parseInt(j))<index){
 	count=obj[j];
number =j;
index=arr.indexOf(parseInt(j));
  }
}
if(count>1)
return number;
return -1;
}

console.log(SimpleMode([3,3,4,4,5,5,2,2,1,6,6,6]))