// console.log("Hello World!");
// console.log("abc".toUpperCase());
// [1,2,3].push(4);
// //Here log, toUpperCase, push are pre-defined functions.

// function myFunction(msg){//parameter
//     console.log("Welcome to ApnaCollege");
//     console.log("We are learning JavaScript.");
//     console.log(msg);
// }

// myFunction("I love JS.");//argumaent
// myFunction("AI Engineer");
// myFunction("Btech");

//-----------------------------------------------------------------------

// function sum(x,y){//here parameters are local variables of functions and are of block scope
//     // console.log(x+y);
//     s = x+y;
//     return s;
// }
// console.log(sum(4,5));
// console.log(sum(25,25));
// console.log(sum(45,23));

//-----------------------------------------------------------------------

// //sum function
// function sum(a,b){
//     return a+b;
// }

// // this is a function using arrow
// // (a,b) => {
// //     console.log(a+b);
// // }

// let sumUsingArrowFunc = (a,b) => {
//     console.log(a+b);
// }
// sumUsingArrowFunc(2,3);


// //mul function
// function mul(a,b){
//     return a*b;
// }
// //div function
// function div(a,b){
//     return a/b;
// }

// console.log(sum(10,5));
// console.log(mul(10,5));
// console.log(div(10,5));


//-----------------------------------------------------------------------

// //create a function using the "function" keyword that takes a string as an argument nad return the number of vowels in the string.

// function vowels(str){
//     let count = 0;
//     for(const i of str){
//         if(i === "a" ||i === "e" ||i === "i" ||i === "o" ||i === "u"){
//         count++ ;
//         }
//     }
//     console.log(count);
// }

// vowels("hello");
// vowels("aeiou");
// vowels("aaa");

//-----------------------------------------------------------------------

// let arr = ["delhi", "pune", "mumbai"];
// arr.forEach(function printVal(val, idx, arr){
//     console.log(val.toUpperCase(), idx, arr);
// })
// //forEach is only used for arrays and is a higher order method(functions which take different function as a parameter or returns a different function as their output)
// //here forEach method takes value of each elemnt in the array and runs the defined function for each
// //use arrow function for more readblity
// /* we have three predefined parameters in forEach i.e
//     val(value/item)
//     idx(index)
//     arr(array)
// */

//-----------------------------------------------------------------------

//For a given array of numbers, print the square of each value using the forEach loop.

// let num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach((val) =>{
//     console.log(val*val);
// })

// /* Some more Array Methods
//     map: similar to forEach just the difference is it gives a new array
//     filter: creates a new array that gives output only if the condition is true
//     reduce: performs some operation and reduces the array to single value
// */

// let newArr = num.map((val) =>{
//     return (val*val);
// });
// console.log(newArr);
// console.log(num);

// let evenArr = num.filter((val) =>{
//     return val%2 === 0;
// });
// console.log(evenArr);
// console.log(num);

// let sumOfNum = num.reduce((res, curr) =>{
//     return res+curr;
// });
// console.log(sumOfNum);

// let maxOfNum = num.reduce((prev, curr)=>{
//     return prev>curr? prev: curr;
// });
// console.log(maxOfNum);

//-----------------------------------------------------------------------

// We are given array of marks of students. Filter out the marks of students that scored 90+.

let marks = [99,97,79,56,88,98,49,90,91];
let output = marks.filter((val)=>{
    return val>90;
})
console.log(output);

//-----------------------------------------------------------------------

//Take a number n as input from user. Create an array of number from 1 to n. Use reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter the number:");
let arrNew = [];
for(let i = 1; i<=n; i++){
    arrNew.push(i);
}
console.log(arrNew);
  
let result1 = arrNew.reduce((res, curr)=>{
    return res+curr;
});
console.log("Sum of the array is", (result1));
let result2 = arrNew.reduce((res, curr)=>{
    return res*curr;
});
console.log("Product of the array is", (result2));