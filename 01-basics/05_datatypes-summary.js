//Datatypes: 
// Primitive 
// ---> Number =>  typeof Number = number
//----> Null  =>  typeof Null = null
// ---> Boolean => typeof Boolean = boolean
// ---> BigInt => typeof BigInt => bigint
// ---> String => typeof String => string
// ---> Symbol => typeof Symbol => symbol
// ---> Undefined => typeof Undefined => undefined


const name ="Mehtab";
let age = 33;
let nullValue = null;
let loggedIn = true;
let stateForJob;


console.table([name,age,nullValue,loggedIn,stateForJob])

// Non-primitive 
// Arrays, Object, Function

//array
const flowers = ["sunflower","rose","marrygold","lotus"]  

//object
let myObj ={
name: "john doe",
age: 23
}

//function

function names(name)
{
    return name;
}
let result = names("mehtab");
console.log(result);

let b = BigInt(10);
console.log(typeof b);

c = 3535353535432332n;
console.log(typeof c);


console.log(typeof names);  // typeof of function is function 
console.log(typeof myObj); //typeof of object is object


//Stack and Heap 

let  userName = "mdmehtab";

let userId =  "mehtab18" ;

let anotherUserName = userName;

anotherUserName = "khanmehtab4";

console.log(userName);
console.log(anotherUserName);


let myObj2 = {
    email :  "user@gmail.com",
    upi : "user@ybl"
}

let myObj3 = myObj2;

console.log(myObj3.email="khanmehtab6@gmail.com");
console.log(myObj2.email);

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^");
// Task
console.log("z"<"b" ) ; // false
console.log("apple" > "pineapple");  // false
console.log("2" > "12"); // true
console.log(undefined == null);  //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

