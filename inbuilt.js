let str="Hello javascript"
console.log(str.split(" "));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('h'));
console.log(str.lastIndexOf("p"));
console.log(str.search(/T/i));
console.log(str);
console.log(str.slice(0,5));
console.log(str.substring(0,16));
console.log(Array.from(str.matchAll("l")));
console.log(str.padStart(str.length+2,"MR"));
console.log(str.padEnd(str.length+2,"MR"));
console.log(str.repeat(3));
console.log(str.length);
console.log(str.trim().length);
console.log(str.includes("a"));
console.log(str.startsWith("He"));
console.log(str.endsWith("pt"));
console.log(str.charAt(0));


