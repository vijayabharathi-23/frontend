// function oddoreven(num){
// if(num%2===0){
// console.log("odd")
// }
// else{
//     console.log("even")
// }

// }
// oddoreven(10)
// oddoreven(11)
// oddoreven(12)
// oddoreven(13)

//Arrow function
 
let oddoreven=(num)=>{
if(num%2===0){
console.log("odd")
}
else{
    console.log("even")
}
return num*2
}
let result=oddoreven(10)
console.log(result)
oddoreven(17)
oddoreven(25)
oddoreven(30)

//higher order function

function parent(a){
a();
}
function child(){
    console.log("i am child function")
}
parent(child)

