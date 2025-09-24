let rows=5;
let result='';
let cols=1;
let num=1;
for(i=1;i<=rows;i++){
for(j=1;j<=cols;j++){
result+= j%2!=0? num++ : ' '
}
result+='\n'
i=1;
cols-=2;
}

console.log(result)