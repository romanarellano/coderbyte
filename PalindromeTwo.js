function PalindromeTwo(str){

 
	var together = str.replace(/[^a-zA-Z]/g,"");

	var lower = together.toLowerCase().split("");
	var string = lower.join("");
    var rev = lower.reverse().join("");
	if(string == rev )
	return true;
    return false;
}

 
console.log(PalindromeTwo("Noel - sees Leon"));
console.log(PalindromeTwo("A war at Taraw!"));