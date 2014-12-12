

function SwapII(str){
	result =[];
	str =str.split(' ');

  for(i=0;i<str.length;i++){
  var str_each =str[i].split("");

  var num =str_each.filter(function(b){return /[0-9]/.test(b)})
 
  if(num.length==2) {
  	str_each.splice(str_each.indexOf(num[0]),1,num[1]);
 str_each.splice(str_each.lastIndexOf(num[1]),1,num[0]);

}

	for(j=0;j<str_each.length;j++){
   if(str_each[j]==str_each[j].toUpperCase())str_each[j]=str_each[j].toLowerCase();
     else str_each[j]=str_each[j].toUpperCase();

}

result.push(str_each.join(""))
}
return result.join(" ");
}




console.log(SwapII("6Hello4 -8World, 7 yes3"));