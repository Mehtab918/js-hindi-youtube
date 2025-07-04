let myDate = new Date();
console.log(myDate);  //2025-07-04T17:29:12.136Z

//proper date with meaningfull understanding
//Date converting to String
console.log(myDate.toString());     //   Fri Jul 04 2025 17:31:18 GMT+0000 (Coordinated Universal Time)

// perfect date
console.log(myDate.toDateString());  //    Fri Jul 04 2025


console.log(myDate.toLocaleString()); //   7/4/2025, 5:36:02 PM


console.log(myDate.toLocaleDateString()); //   7/4/2025

//customizing date format 

let myCreateDate = new Date(2024,5,4);
console.log(myCreateDate.toDateString());  //  Tue Jun 04 2024
console.log(myCreateDate.toLocaleDateString()); // 6/4/2024

let hourAndMin = new Date(2025,5,5,5,6);
console.log(hourAndMin.toLocaleDateString('en-IN'));

let timeStamp = Math.floor(Date.now()/1000);
console.log(timeStamp);  //1751651427  this is millisecond

console.log(myDate.getDate()); //4 
console.log(myDate.getMonth()); //6  - Months indexed starts from 0 - 0 = Janurary, 1 = February, and so on..... 6 = july

console.log(myDate.getMonth()+1); //7



