/*eslint-disable*/
const age = 100;
const money = 1000.50;
console.log(typeof age);
console.log(typeof money);

console.log("10" - "5");

console.log(Math.round(2.2));
console.log(Math.floor(2.6));
console.log(Math.ceil(2.9));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets/kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

let x = 2 ** 3;
console.log(x);
x= Math.pow(2,3);
console.log(x);

console.log(0.1+0.2);
//let costOfProduct = 100.95;
let costOfProduct = 10095;//in paise
console.log(costOfProduct);


console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(10/'hello');

console.log(typeof NaN);

let y=100;
let result=Number.isInteger(y);
console.log(`Is y a number : ${result}`);
let z ="abc";
result=Number.isInteger(z);
console.log(`Is z a number: ${result}`);
result=(typeof z === 'string');
console.log(`Is z a String: ${result}`);
let flag=true;
result=(typeof flag === 'boolean');
console.log(`Is flag a boolean:${result}`);
let nos=[1,2,3,4,5];
result=(typeof nos === 'object');
console.log(`Is nos an object: ${result}`);








