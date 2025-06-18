"use strict";   // treate all js code as a newer version
//datatypes

let name = "Md Mehtab khan";
let age = 32;
let islearningJS = true;
let bigIntValue = BigInt(10);
let sym = Symbol("Javascript");
let nullVal = null;
let undefinedVal = undefined;

console.table([name,age,islearningJS,bigIntValue,sym,nullVal,undefinedVal]);

/*
Note: Datatypes are of two types : 1) Primitive datatype and Non- primitive datatype.
Primitive(7) : Number , Null , BigInt ,Boolean , Symbol ,String and Undefined.
Non-Primitive(1) : Object
*/

// to know the type of datatype we use "typeof" keyword in js.
console.table([typeof name,typeof age,typeof islearningJS, typeof bigIntValue,typeof sym, typeof nullVal ,typeof undefinedVal]); 

// Interview Question
//typeof null ? => object 
//typeof undefined ? => undefined 

// difference between null and undefinded.
// null -> standalone value.
//undefined -> not assigned intentionally.

let a = "33";
console.log(a);     //33
console.log(typeof a );     //string

a ="33abc" ; //actually not a number;
console.log(typeof a);  //string

let numberA = Number(a); //trying to convert into number.
console.log(numberA);  // it is not a number.
console.log(typeof numberA);  // but type of NaN is number. 



let x = 45;
console.log(typeof x);

let stringX = String(x);
console.log("number to String =>",stringX);
console.log(typeof stringX);


//IQ : typeof NaN is number.

let score = null;
console.log(typeof (score));
console.log(typeof score);

let isLoggedIn = 1;
console.log(Boolean(isLoggedIn));

isLoggedIn = 0;
console.log(Boolean(isLoggedIn));

//true --> 1 
// false --> 0 
//"33" -> Number(33);  
// null -> typeof null -> Object
//undefined -> typeof undefined -> undefined.