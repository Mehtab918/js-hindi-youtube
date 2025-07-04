// Array is a collection of elements  in a single variable. It is used to store multiple values of the same type.

// old approach to store variables 

let student1_marks = 80;
let student2_marks = 56;
let student3_marks = 93
let student4_marks = 78;


// storing variables  like this is not a good approach as it is not scalable.

// Array approach 

let marks = [student1_marks, student2_marks, student3_marks, student4_marks];

console.log(marks[0]);

console.log("---------------------");




let marks_class_12 = [80,46,67,false,null,90,"not present"]

//access

console.log(marks_class_12[0]);    
console.log(marks_class_12[1]);    
console.log(marks_class_12[2]);   
console.log(marks_class_12[3]);   
console.log(marks_class_12[4]);    
console.log(marks_class_12[5]);    
console.log(marks_class_12[6]); // not present in the array - will give undefined.

// length of an array :

console.log(marks_class_12.length); // 7     count will start from 1 but indexing starts from 0.


// changing the value of an element in an array:

marks_class_12[0] = 90;
console.log(marks_class_12[0]); // 90

// adding an element to an array:

console.log(typeof marks_class_12); // object -- array is also an object in JavaScript..


const heroes =["ironman", "thor" ,"shaktiman", "captain America"]

console.log(heroes);

let arr = [97,82,64,76,36];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);


arr[2] = 73;

console.log(arr[2]); // 73

// THIS IS NOT CHANGE IN STRING 

let str = "hello";

str[0] = "H"; // this will not change the string

console.log(str);  // no changes in the string. hello will be printed.

// Difference between string and array:

//String is immutable at a particular index. It means that once a string is created, we cannot change the value of a particular character.
//Array is mutable at a particular index. It means that we can change the value of a particular element in an array at particular index.


//looping through an array:

let arr2 = [97,82,64,76,36];

//bad approach
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);

//for loop
for(let i=0; i<arr2.length;i++){
    console.log(arr[i]);
}
//forEach method

console.log("********");
for(let element of arr)
{
    console.log(element);
}


let cities =["hyderabad", "delhi", "bangalore", "chennai", "kolkata"];


for(let i=0; i<cities.length;i++)
    {
    console.log(cities[i]);
}   

// or 
console.log("********");
for(let listOfCity of cities)
{
    console.log(listOfCity);
}


//Practice :
// for a given  array of 5 students marks ,, find the avergae of all the marks and print it.

let student_marks = [80,56,93,78,65];

let sum =0 ;
let average =0;
 
 for(let i=0; i<student_marks.length;i++)
 {
    sum = sum + student_marks[i];

 }

 console.log(sum);
 average = sum/student_marks.length;
 console.log(`The  average of all the marks=${average}`);




 // practice 2 : 

 // for a given array with prices of 5 items [210, 300, 400, 500, 600]. 
// All iterms have an offer of 10% off. change the array after applying the offer.


let item_prices = [210, 300, 400, 500, 600];

let new_prices = [];
for(let i=0; i<item_prices.length;i++)
{
    new_prices[i] = item_prices[i] - item_prices[i]* 0.1;
}
console.log(new_prices);


//Arrays methods:

//push() : adds an element to the end of an array. push will return the new length of the array.
//  pus() method existing array me hi change kr deta hai koi new array nhi banata. 

let foodItems = ["chips", "burger", "potatoes" , "cookies"];

console.log(foodItems);

foodItems.length  //4

foodItems.push("ice-cream","pop-corn");

console.log(foodItems);


// pop() : removes the last element from an array and returns that element. working on the existing array. 

let numbers = [1,2,3,4,5];

console.log(numbers.pop());

console.log(numbers);

// toString(): converts an array to a string.

let blackItem =["keyboard", "watch","earphones","shoes"];

   let result = blackItem.toString();

   console.log(result);

console.log(typeof result); // string


// join()

let  num = [1,2,3,4,5]  
let result1 = num.join("_");

console.log(result1 , typeof result1); // 1_2_3_4_5 string


//pop will remove the last element from an array.
//shift : removes the first element from an array & returns that element.
console.log(num.shift()); //1
 console.log(num);  // [2, 3, 4, 5]
let numln = num.length; // 4

console.log(numln); //4
//unshift : adds an element to the beginning of an array.  
// push() will add an element to the end of an array.

num.unshift(30);
let r = num.length; // 5
console.log(r); // 5

console.log(num); // [30, 2, 3, 4, 5]    


//delete Operator:

//interesting facts : delete operator can delete any property of an object.
// it will not delete the object from memory. You will get the same length of an array.
let arr1 = [1,2,3,4,5];
num.length; // 5


delete arr1[2];

console.log(arr1);

// what is the length of the array after delete operator?

console.log(arr1.length); // 5

// what is the length of the array before delete operator?      

console.log(num.length); // 5


//concat() : concatenates two or more arrays and returns a new array.

let arr3 = [1,2,4,6];

let arr4 = [5,7,8,9];

let concatResult = arr3.concat(arr4);

console.log(concatResult); // [1, 2, 4, 6, 5, 7, 8, 9]  - generates a new array.


console.log(arr3); // [1, 2, 4, 6] - original array remains unchanged.  
console.log(arr4); // [5, 7, 8, 9] - original array remains unchanged.


console.log(arr3,arr4); // [1, 2, 4, 6] [5, 7, 8, 9] - original arrays remain unchanged.

//interview question on sort() 

// original array change hoga.
let arr5 = [90,12,3,5,75,32,23,11,89,45] ;

arr5.sort(); 

//what will be the output of the above code?

console.log(arr5); // [3,5,11,12,23,32,45,75,89,90]  -- WRONG OUTPUT.

console.log(arr5); // [11,12,23,3,32,45,5,75,89,90] -- correct output.


//how ?

// sort() method will sort it in String order 


//Ascending order:

//how to sort the array in ascending order?

let arr6 = [90,12,3,5,75,32,23,11,89,45] ;

function compare(a,b)
{
    return a-b;
}

console.log(arr6.sort(compare));  

function compare1(a,b)
{
    return b-a;
}

console.log(arr6.sort(compare1)); // [90,89,75,5,45,32,23,12,11,3]  -- sort in descending order.



//splice() : array me se ek part cut krne k liye hmlog splice ka use krte hai.
// In this method, we have to three parameters.
//         - first is the starting index, 
//         - second is the ending index, and 
//         - third is the element to be added.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// MODIFYING THE ORIGINAL ARRAY.


let spliceArray = [20,30,40,50,60,70,80,90];   

let removedElements = spliceArray.splice(2,3,"100","200");  // we can check the removed elements in the removedElements variable.

console.log(spliceArray);  // [20,30,100,200,70,80,90]

console.log(removedElements); 



// slice() : creates a new array with a portion of the original array.
// It takes two parameters, starting index and ending index.
// It does not modify the original array. instead it returns a new array.

// LAST WALI   INDEX INCLUDE NHI HOTI .

let sliceArray = [20,30,40,50,60,70,80,90];

       let sliceResult = sliceArray.slice(3,4);

       console.log(sliceResult);  //  

let users = ["John","Mehtab","ankit","Rahul","zeeshan"];

let newUsers = users.slice(1,2);  // newUsers will have only "Mehtab"

console.log(newUsers);

let num7 = [22,323,45,54,65,52];

console.log(num7.slice(2,4)); // [45,54]  - num7.slice(3,4);



//forEach() - A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// calls a function for each element in the array.

let arr7 = [1,2,3,4,5];

arr7.forEach((x)=>console.log(x*2));


const coding = ["js","javascript","ruby", "c++"]

coding.forEach( (items) =>  console.log(items.toUpperCase()));

// if we return anything from the forEach method, it will be give you undefined,

let values = coding.forEach( (items) =>  console.log(items.toUpperCase()));
console.log(values);  //undefined,


// map func    - map function returns a new array .

let arr8 = [2,4,6,8,10];

arr8Result =arr8.map(function x(element) {
    return element * 2;
})

console.log(arr8Result);

// or 
resultSaome =  arr8.map((x) => x * 2);



// Static methods
//--------------------------------------
 
// Array.from()
// ---------------------------
// ek String to Array conversion


const arrHello = "hello";

let newArr =Array.from(arrHello); // ["h", "e", "l", "l", "o"]
console.log(newArr);

// ek Array to String conversion
let num2 =  "12345";
let newArr1=Array.from(num2);
console.log(newArr1);

const arrN = [1,2,3,4,5];

const newArr2 = Array.from(arrN, function map(a,b)
{
    return a*2;
})
console.log(newArr2);


// given array is []
const arrBlank = []

let newArr3 = Array.from({length:5});

console.log(newArr3.length);  // now the length of newArr3 is 5.

console.log(Array.from("foo")); // output: Array ["f", "o", "o"]


// Array.isArray()  tells whether an object is an array or not. returns true or false.

console.log(Array.isArray(arr3));

const unknownArr = "[]";

console.log(Array.isArray(unknownArr)); // false

console.log(Array.isArray([2,3,4,5])) // true

console.log("Array available :"+ Array.isArray([1,2,3],[1,23,4]));


// HIGHER ORDER FUNCTIONS 

// map()  = ek naya array create krta hai .
// - first parameter is a function that takes each element of the array as an argument.
// second parameter is optional but it return an index of the element.
// third parameter is optional but it return the original array.

let a = [1,2,3,4,5];

let a1 = a.map((value,index,array) => { console.log(value*2 , index ,array)});

console.log(a1); 


//filter() = ek naya array create krta hai .  ye har value pe boolean expresion  chalata hai ,agar ye true return krta hai toh ye element add krdega.
// - first parameter is a function that takes each element of the array as an argument.
// second parameter is optional but it return an index of the element.  


// It filters an array with values that pass a test. It returns a new array containing only the elements that pass the test.

const myNums = [1,2,3,4,5,6,7,8,9,10];

let a2 = myNums.filter((nums) => nums % 2 ===0)
console.log(a2);

let a3  = myNums.filter(( nums) =>  nums>5 && nums<10);
console.log(a3);

let a4 = myNums.filter((nums) => {

    return nums*2; //  [2,4,6,8,10,12,14,16,18,20]
});

console.log(a4); // [] 
//this will give EMPTY ARRAY as a value because we are not returning anything in the filter function. if we use open close curly braces we need to use return keyword.

// MAP and FILTER both will change the original array.


//reduce() - reduces an array to a single value.

let arr9 = [3,4,5,6,7];

let arr6Result = arr9.reduce((h1,h2) => {

    return h1+h2;
})

console.log(arr6Result);

//or  i can pass a function as a parameter to reduce function.

let arr10 = [3,4,5,6,7];

let singleValueReturn = (h1,h2) =>
{
    return h1 - h2;
}

let result7 = arr10.reduce(singleValueReturn);

console.log(result7);

