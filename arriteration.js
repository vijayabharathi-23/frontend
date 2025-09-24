let arr=[{name:"vijay", age:25},
    {name:"madan", age:30},
    {name:"ram",age:35}];
let arr2=arr.map((e,i,array)=>{
    return {age:e.age+5};
});
console.log(arr2);


let arr3=arr.filter((e,i,Array)=>{
return e.age>30;

})
console.log(arr3);
let arr4=arr.find((e,i,array)=>{
return e.age>25;

})
console.log(arr4);
let vj=[1,2,3,4,5];
let num=vj.reduce((prev,curr,i,Array)=>{
return prev+curr;

},5)
console.log(num);