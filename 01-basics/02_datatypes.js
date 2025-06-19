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

