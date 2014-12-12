function tripleDoble(num1,num2){
   
var numOne = num1.toString().split("");
var numTwo = num2.toString().split("");

var arr =[]
arr.push(numOne,numTwo)

var sum =0;
var tot =3;
var legit =[];
var legit2=[];
for(var i=0;i<arr.length;i++){
  legit=[];
   for(var j=0;j<arr[i].length;j++){
       var bench = arr[i][j];
    sum=0;
   for(var b=j;b<arr[i].length;b++){
   

  if(arr[i][b]==bench && legit.indexOf(bench)<0 ){
     sum++;

     if(sum>=tot){
     legit.push(arr[i][j])
     legit2.push(arr[i][j])
      break;
  }}
else  {
  break;
}}
}
tot--;

}

var numCount={};

   for(n=0;n<legit2.length;n++ ){
   numCount[legit2[n]] =  numCount[legit2[n]] || 0;
 numCount[legit2[n]]++;
}

for(digit in numCount){
  if(numCount[digit]==2)return 1;
}
return 0;
}
console.log(tripleDoble(4666677555,855576679))