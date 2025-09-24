// // // // // let mark=70;
// // // // // if(mark>75) {
// // // // //     if(mark<80){
// // // // //         console.log("A");
// // // // //     }
// // // // //     else{
// // // // //         console.log("B");
// // // // //     }
// // // // // }
// // // // if(8<=7){
// // // //     console.log('conditional is true');
// // // // }
// // // // else{
// // // //     console.log('conditional is false');
// // // // }
// // // let mark=60;
// // // if(mark>70){
// // //     console.log('A')
// // // }
// // // else if(mark>55){
// // //     console.log('B')

// // // }
// // // for(i=0;i<5;i++){
// // //     colet arr=[1,2,3,4,5,6,7,8,9];
// // // nsole.log(arr[i]);
// // // }

// // // let arr=[1,2,3,4,5,6,7,8,9];
// // // i=0;
// // // while(i<arr.length){
// // // console.log(arr[i]);
// // // i++;
// // // }

// // let arr=[2,4,6,8,10];
// // for(let n1 of arr){
// //     console.log(n1);
// // }
// // let obj={name:'vijay',id:'222',age:'20'};
// // for(let key in obj){
// //     console.log("this is in object:"+key,"value:"+obj[key]);
// // }
// // let arr=[1,2,3,4,5];
// // for(let v1 of arr){
// // if(v1==4){
// // break;
// // }
// // console.log(v1);
// // }
// // let arr=[1,2,3,4,5];
// // for(let v1 of arr){
// // if(v1==4){
// // continue;
// // }
// // console.log(v1);
// // }

// for(let i=0; i<5;i++){
//     if(i==1)
//         continue;

//     console.log("hi");
//         console.log("vijay");

// }
// //switch
// let day=2;
// switch(day){
//     case 1:
//             console.log('monday');
//     break;
// case 2:
//     console.log('wednesday');
//     break;
//     case 3:
//     console.log('tuesday');
//     break;
//     case 4:
//     console.log('thursday');
//     break;
//     case 5:
//     console.log('friday');
//     break;
//     default:
//         console.log('weekend')
// }

let num=[1,2,3,4,5]
for(let v1 in num){
    console.log(v1,num[v1]);
}
let arr=[1,2,3,4,5,1,2];
let obj={};
for(let v1 of arr){
    if(!obj[v1]){
    obj[v1]=1;
}
else{
        obj[v1]++;

}

}
            console.log(obj);


for(let v2 in obj){
     if(obj[v2]>1)
         console.log("duplicats:"+v2)
}



