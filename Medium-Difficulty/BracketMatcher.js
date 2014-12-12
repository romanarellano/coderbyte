function BracketMatcher(str){

sum=0;
parenth ={};
for(i=0;i<str.length;i++){
  if(/\(/.test(str[i])){
    parenth[str[i]]=parenth[str[i]] || 0
    parenth[str[i]]++;
  }
  else if(/\)/.test(str[i])){
   parenth[str[i]] = parenth[str[i]] || 0
   parenth[str[i]]++
  }
}

if(parenth["("]==parenth[")"])
return 1;

return 0;
}

console.log(BracketMatcher("(co(der))b(yte)"))