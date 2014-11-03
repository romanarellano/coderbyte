function StringScramble(str1,str2) { 

var arr = str2.split("");

 for(i=0;i<str2.length;i++){
   
 	for(j=0;str2[i]!=str1[j];j++){
 		if(j==str1.length-1) return false;
 }

}
return true;

  
}

console.log(StringScramble("rkqodlw","world"))
console.log(StringScramble("cdore","coder"))
console.log(StringScramble("h3llko","hello"))

