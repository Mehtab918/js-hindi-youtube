
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
console.log(Boolean(isLoggedIn)); // true

isLoggedIn = 0;
console.log(Boolean(isLoggedIn)); // false

//true --> 1 
// false --> 0 
//"33" -> Number(33);  
// null -> typeof null -> Object
//undefined -> typeof undefined -> undefined.