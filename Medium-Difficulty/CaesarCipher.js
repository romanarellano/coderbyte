function CaesarCipher(str, num){
     
   var string="";
for(i=0;i<str.length;i++){
	if(/\s/.test(str[i])){
		string+=" ";
		continue;
	}
  number = str.charCodeAt(i)
string+=String.fromCharCode(number+num);
}
return string;
}

console.log(CaesarCipher("Hello",4));