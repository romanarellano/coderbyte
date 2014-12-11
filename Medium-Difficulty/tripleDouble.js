function tripleDoble(num1,num2){
   
var numOne = num1.toString().split("");
var numTwo = num2.toString().split("");

var arr =[]
arr.push(numOne,numTwo)

var sum =0;
var tot =3;
var legit =[];

for(var i=0;i<arr.length;i++){
   
   for(var j=0;j<arr[i].length;j++){
       var bench = arr[i][j];
    sum=0;
   for(var b=j;b<arr[i].length;b++){
   

  if(arr[i][b]==bench){
     sum++;

     if(sum>=tot){
      legit.push(arr[i][j])
      break;
  }}
else  {
  
  break;
}}
}
tot--;
}
sum=0;
var numCount={};
legit.sort();
   for(n=0;n<legit.length;n++ ){
   numCount[legit[n]] =  numCount[legit[n]] || 0;
 numCount[legit[n]]++;
}

for(var digit in numCount){
  if(numCount[digit]==2)return 1;
}
return 0;
}
console.log(tripleDoble(46577555,855779))