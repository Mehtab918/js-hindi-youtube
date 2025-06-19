
//String conversion
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

//Boolean conversion

let isLoggedIn = 1;
console.log(Boolean(isLoggedIn)); // true

isLoggedIn = 0;
console.log(Boolean(isLoggedIn)); // false

//true --> 1 
// false --> 0 
//"33" -> Number(33);  
// null -> typeof null -> Object
//undefined -> typeof undefined -> undefined.

//Number conversion
let val = undefined;
console.log(Number(val));

val = null;
console.log(Number(null));

let str = "     432      ";
console.log(Number(str));


// Notes:
/*  widely used conversion:  1) number to String/ boolean to String :  String(value)
                             2) string to number/ boolean to number :  Number(value)
                             3) string to boolean/number to boolean :  Boolean(value)

*/


// *************************OPERATIONS***********************************

// let value1 = 10;
// value1 = -value1;
// console.log(value1);

// let value2 = 2;
// console.log(value1 + value2);
// console.log(value1 - value2);
// console.log(value1 * value2);
// console.log(value1/ value2);
// console.log(value1 % value2);
// console.log(value1 ** value2); //10 to the power of 2 = 100

//string concatenation 
// let s1 = "hello" + "world";
// console.log(s1);

// let s2 = "1" + 2 ;
// console.log(s2);  //12

// let s3 = 2 + "1" + 4
// console.log(s3);  //214

//increment
//post prefix(value++)

// first print and then increment.
let valueOne = 10;
console.log (`value: ${valueOne++}`); // 10 print and then in background the value of valueOne changes to 11.
console.log (valueOne++);  // this will show you 11.

//pre prefix (++value)
//first increment then value print.

let counter = 1;
console.log (++counter); //2
// console.log (++counter);

