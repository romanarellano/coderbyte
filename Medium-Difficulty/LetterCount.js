function LetterCount(str){


 var words = str.replace(/[^a-zA-Z\s]/g,"");
 var words= words.split(" ");

var top=1;
var name=-1;

for(i=0;i<words.length;i++){

   for(j=0;j<words[i].length;j++){
        letter=words[i][j];
       count=0;
   for(k=0;k<words[i].length;k++)
if(letter==words[i][k])count+=1;

if(count>top){
	top=count;
	name=words[i];
}
}
}

return name;
}

console.log(LetterCount("Todooay, is the greatest! day ever!"));