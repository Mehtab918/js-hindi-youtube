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