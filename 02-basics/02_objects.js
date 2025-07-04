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


