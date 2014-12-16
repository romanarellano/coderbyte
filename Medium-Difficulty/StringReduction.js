function StringReduction(str){


for(var i=0;i<str.length;i++){

var kl = str.slice(i,2)
if(/ab|ba/.test(kl)){
	var str= str.replace(/ab|ba/,"c");
	i=-1;
	
}
 else if(/ac|ca/.test(kl)){
	
	var str = str.replace(/ac|ca/,"b");
	i=-1;
}
else if(/bc|cb/.test(kl)){
	 var str = str.replace(/bc|cb/g,"a")
	 i=-1;
}
}




return str;

}
console.log(StringReduction("cccc"))