function NumberSearch(str){

sum=0;
letters={};
lettercount=0;
str = str.split("");

for(i=0;i<str.length;i++){
if(/\d/.test(str[i]))sum+=Number(str[i])
else if(/\w/.test(str[i])){
  letters['count']= letters['count'] || 0;
  letters['count']++;
}
}

result = sum/lettercount;
return Math.floor(sum/letters.count);

}

console.log(NumberSearch("H3ello9-9"))