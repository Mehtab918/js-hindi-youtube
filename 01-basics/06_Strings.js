//String Manipulation 

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); 
const strPrim3 = String(true); 
const strObj = new String(strPrim); 

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"


let str = "Javascript learning";

//length as property
let length = str.length;
console.log(length);

//touppercase
let touppercase = str.toUpperCase();
console.log(touppercase);

//toLowerCase 
let tolowercase = str.toLowerCase();
console.log(tolowercase);


// substring
let substring = str.substring(0,7); // will return  a new sub string 
console.log(substring);

console.log(typeof NaN);

//charAt
let str1 = "JavaScript";
console.log(str1.charAt(4));

let characterAt = str.charAt(4);
console.log(characterAt);

// concat
let str2 = "Hello ";
let str3 = "World";

let newString = str2.concat(" ",str3);
console.log(newString);

//include - is available  or not ? // boolean value return
let includeStr = str1.includes("Script");
console.log(includeStr);

// trim
  let strng = "     hello    world      ";
  let x = strng.trim();
  console.log(x);
  let d = strng.trimEnd();
  let y = strng.trimStart();
  console.log(d);
  console.log(y);

//startswith

let res = str1.startsWith("J");
console.log(res);

// split
let strSp = "javascript learning";
let str4 = strSp.split("");
console.log(`${str4}`);
console.log(typeof str4);

console.log("my name is md mehtab khan"[0]);


const message = "Md Mehtab Khan";

console.log(message); //'Md Mehtab Khan'
console.log(message.length); //14

//message.toLowerCase  - function name return 

//message.toLowerCase() -   'md mehtab khan'
 //message.toUpperCase() =  'MD MEHTAB KHAN'


const capitalMessage = message.toUpperCase();
console.log(capitalMessage); // MD MEHTAB KHAN

const name ="My name is Md Mehtab Khan";

'My name is Md Mehtab Khan'

name.includes("Md Mehtab"); //true

name.includes("md mehtab"); // false

   message.concat(',' ,`${name}`)

   let lastFourDigit = 3432;

    lastFourDigit = lastFourDigit.toString(); //'3432'
    lastFourDigit = lastFourDigit.toString().padStart(16,'*')
    console.log(lastFourDigit);
