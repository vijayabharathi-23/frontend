setTimeout(()=>{
console.log("vijay")
},2000)
console.log("ram")
console.log("ram")
console.log("ram")

let prom=new Promise((res,err)=>{
    res("i am succesful response1")
    
});
let prom1=new Promise((res,err)=>{
    err("i am succesful response2")
    
});
let prom2=new Promise((res,err)=>{
    res("i am succesful response3")
    
});
async function getresponse() {
    
    let res=await prom
    console.log(res)
}
getresponse()

Promise.allSettled([prom,prom1,prom2]).then((res)=>{
    let filtered=res.filter((e,i,array)=>{
        return e.status=="rejected"
    })
    
    console.log(filtered)
})



