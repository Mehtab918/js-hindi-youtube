const accountId = 14453;
let accountName ="Md Mehtab";
var accountCity ="Hyderabad";



//single line comments - 
// re-initialized 
accountId = 321;  //not allowed in javascript. once declare with const, value cannot be changed.
accountName ="Hasnain Khan";
accountCity = "Bikramganj";

//log multiple values in a table
console.table([accountId,accountName,accountCity]);

// features added
let accountState;

console.log(accountState); // declaring but not initializing any value leads to UNDEFINED.

/*
Notes: 
Please donot use var for initializing values in js bcz of the issue in block scope and function scope.
*/

