let m=[1,2,3,4];
m.push(5);
console.log(m);
m.unshift(0);
console.log(m);
m.pop();
console.log(m);
m.shift();
console.log(m);
m.splice(0,0,23,15);
console.log(m.slice(0,2));
console.log(m);
m.copyWithin(4,0,2);
console.log(m);
m.fill(22,0,4);
console.log(m);
console.log(m.indexOf(22));
console.log(m.lastIndexOf(22));
console.log(m.includes(23));
console.log([1,2,3].join('   '));
let k=[1,3,2];
k.sort((a,b) =>(a-b));
console.log(k)
let v1=[1,2,3,4,[1,[2,3,[5,6]]]];
v1=v1.flat(Infinity);
console.log(v1)
let str="vijay"
let sorted=str.split('');
sorted.sort;
console.log(sorted.reverse());