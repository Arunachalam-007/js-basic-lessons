/*eslint-disable*/

const person = {
    first : 'Arun',
    last : 'Momo',
    age: 100
};
console.log(person.first);
console.log(person.last);
console.log(person.age);

person.first='Tom';
person.last='Jerry';
console.log(person.first);
console.log(person.last);
person.last=null;
console.log(person.last);


const empty ={};
const point ={x:10,y:50};
console.log(point.x);
console.log(point.y);
const point2={x:point.x, y:point.y+1};
console.log(point2.x);
console.log(point2.y);

const book = {
    'main title' : 'Java Script',
    'sub-title' : 'Guide to JS for beginners',
    'for' : 'students',
    author:{
        first:'Arun',
        last:'Kaliraj'
    }
};
console.log(book['main titlle']);
console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
//console.log(book.sub-title);
console.log(book.for);
