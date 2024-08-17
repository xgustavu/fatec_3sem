let a:number = 10;
let b:number = 20;
let c:number;

console.log("A:", a);
console.log("B:", b);

c = a;
a = b;
b = c;

console.log("\nA:", a);
console.log("B:", b);

export {};