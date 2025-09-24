// setTimeout(()=>{
// console.log("i am asyngronousfunction")
// },3000)
// setTimeout(()=>{
// console.log("i am asyngronousfunction2")
// },3000)
// setInterval(()=>{
// console.log("i am setinterval")
// },2000)

console.log("i am normal code")
console.log("i am normal code")
console.log("i am normal code")

let prom=new Promise((res,err)=>{
   res("i am succesfull response1")
});
let prom1=new Promise((res,err)=>{
   err("i am succesfull response2")
});
let prom2=new Promise((res,err)=>{
   res("i am succesfull response3")
});

prom.then((res)=>{
    console.log(res)
})
.catch((err)=>{                                                
    console.log("error: " +err)
})

//OR
async function getresponse() {
    let res= await prom;
    console.log(res);
}
getresponse()

Promise.allSettled([prom,prom1,prom2]).then((res)=>{
    console.log("all  promises resolved:",res)
   let filtered= res.filter((e)=>{
       return e.status=="fulfilled"
    });
    console.log(filtered)
}).catch((err)=>{
    console.log("error in one of the promises:",err)
})//getallsettled when no use catch