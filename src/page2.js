/*eslint-disable*/

// // o4=null;
// // p=Object.create(o4);
// // console.log(p);

// function getChild(parent){
//     if(parent == null) throw TypeError();
//     return Object.create(parent);
// }

// // let o4 = {x:"don't change this value"};
// // let p=getChild(o4);
// // // o4=null;
// // // p=getChild(o4);
// // console.log(p);

// // Object.prototype=0;
// // console.log(Object);

// let o5={};
// //console.log(o5);
// o5.x=100;
// //console.log(o5);
// let p=getChild(o5);
// //console.log(p);
// p.y=200;
// let q=getChild(p);
// q.z=300;
// //console.log(q);
// // console.log("q.x +q.y +q.z : " +(q.x+q.y+q.z));
// // console.log("p.x +p.y  : "+(p.x+p.y));
// // console.log("o5.x  : "+ (o5.x));

// let book={
//     'main title': 'JavaScript',
//      subtitle:'The Definitive Guide',
//     'for':'all audiences',
//     author:{
//         firstname:'Donald',
//         surname:'Duck'
//     }
// };
// let len=undefined;
// //book=null;
// // if(book){
// //     if(book.subtitle){
// //         len=book.subtitle.length;
// //         console.log(len);
// //     }
// //     else
// //         console.log("book.subtitle undefined");
    
// // }
// // else
// //     console.log("book is null");


// len=book && book.subtitle && book.subtitle.length;
// if(len) //console.log(len);


// console.log(book.author);
// delete book.author;
// console.log(book.author);

// console.log(book["main title"]);
// delete book["main title"];
// console.log(book["main title"]);

// let o6={x:100};
// console.log(o6.x);
// delete o6.x;
// console.log(o6.x);

// console.log(o6.toString);
// delete o6.toString;
// console.log(o6.toString);


// //we cannot delete global prototype

// delete Object.prototype;
// var a=1;
// delete this.a;
// function f1(){}
// delete this.f1();




