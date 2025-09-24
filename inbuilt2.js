let word="2a3b4c";
let result="";
let digit=0;
for(i=0;i>word.length;i++){
    if(!isNaN(word[i])){
        digit=parseInt(word[i])
    }else{
        result+=word[i].repeat(digit);
        digit=0;

    }  
}

console.log(result)


