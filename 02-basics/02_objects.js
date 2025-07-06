const JsUser ={
    "full name":"Md Mehtab khan",
    age: 30,
    location:"Hyderabad",
    email:"abc@gmail.com",
    isLoggedIn : true ,
    workFromOffice:["Monday","Tuesday","Wednesday"],
    workFromHome:["Thursday","Friday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
// console.log(JsUser.full name);// not allowed with . 
console.log(JsUser["full name"]); // working fine


const obj1 = {1:'a',2:'b',3:'c'};
const obj2 = {4:'d',5:'e'};

//let obj3 = {obj1,obj2}
let obj3 = Object.assign({},obj1,obj2); // empty object passing will also give same result.
console.log("using Object's assign static method :" ,obj3);

// Object.assign will not be use more in industry. recomended one is spread operator

obj3 = {...obj1 , ...obj2}
console.log("using spread operator :" ,obj3);


//very very important 
// object key access
let keys = Object.keys(JsUser);
console.log(keys);
console.log(typeof keys);

// object value access
let values = Object.values(JsUser);
console.log(values);

let entries = Object.entries(JsUser);
console.log(entries);

let hasownproperty = JsUser.hasOwnProperty("full name");
console.log(hasownproperty);


//OBJECT DESTRUCTION   {}
/* In javascripy , Object Destruction is a syntax which is introduced in ES6.
Main purpose of Object desctruction is to make ease to extract property from object and assign them to variables without writing repeatedly dot(.) notation */

/* Ek object k andar jo  properties hai unko ek step me variables me tod deta hai.*/

const user = {
    name:"Jodn doe",
    age:30,
    addr: "England",
    sal : "$50000"
}

//old way to access the object propert creates a boiler code
// let name = user.name;
// let age = user.age;
// let addr = user.addr;
// let sal = user.sal;

// console.log(name);
// console.log(age);
// console.log(addr);
// console.log(sal);


// new way  - ES6 - Object destruction - {}

const {name} =user;
console.log(name);

//multiple property acess = const{property1 , propert2 ,.......propertyN} = Object
const {age,addr,sal} = user;

console.log(name);
console.log(age);
console.log(addr);
console.log(sal);

// alias name for property - we can change the key name of any property .


const{"full name": MyName} = JsUser

console.log(MyName);


//JSON - Javascript object notation

// {"name":"John", "age":30, "car":null}  this is json
//API data comes in the form of JSON not XML .   and this data is mostly in the array and objects formats.


