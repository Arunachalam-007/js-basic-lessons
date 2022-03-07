/* eslint-disable semi */
const myName = 'Arun';
const middle = 'Momo';
const last = 'aashiq';

console.log(myName);
console.log(middle);
console.log(last);

const sentence1 = 'she\'s so "cool"';
console.log(sentence1);
const sentence2 = "she's so cool";
console.log(sentence2);
const sentence3 = '\'she\'s so cool\'';
console.log(sentence3);
const sentence4 = "she's so \"cool\"";
console.log(sentence4);

const song1 = `I Like 
            ARR songs and 
            Aniruth songs`;
console.log(song1);

const hello3 = 'hello my name is ' + myName + '.Nice to meet you';
console.log(hello3);

const hello4 = `hello my name is ${myName}. Nice to meet you
${1 + 100} years old`;
console.log(hello4);

const html = `<div>
            <h2>${myName}</h2>
            <p>${hello3}</p>
            </div>`;
console.log(html);
// document.body.innerHTML.html;
