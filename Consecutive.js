
function Consecutive(arr){

arr.sort(function(a,b){return a-b});

var last= arr.pop();
var first = arr.shift();

var result =last-first-1-arr.length;

return result;

}

console.log(Consecutive([4,8,6, 15]));