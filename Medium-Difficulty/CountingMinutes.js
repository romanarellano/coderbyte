function CountingMinutes(str){
var hour = {};

var separate = str.split("-");
min =new Array;

for(i=0;i<separate.length;i++){
hour["time"+i] = separate[i].match(/\d+|\w+/g);




 if(hour["time"+i][2]=="am")
  minutes =60*Number(hour["time"+i][0])+Number(hour["time"+i][1]);

else
  minutes = 720 + 60*Number(hour["time"+i][0])+Number(hour["time"+i][1]);
min.push(minutes);

}

if(min[0]>min[1])
  return  1440-(min[0]-min[1]);
return min[1]-min[0];
}

console.log(CountingMinutes("12:30pm-12:00am"));
console.log(CountingMinutes("4:00am-6:08am"));
console.log(CountingMinutes("1:23am-1:08am"));
