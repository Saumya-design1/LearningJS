// console.log is used to log(print) a msg to the console.
console.log("Hello world\nApna college\nLearning JavaScript!");

const age = 18; // cannot be updated. It is a block scope variable.
var price = 99.9;// old way. It is a global scope variable.
let fullNAME = "Tony Stark"; //can be updated. It is a block scope variable.
fullname = "Iron Man";  
isFollow = false;
x = null; 
y = undefined;
/* Data types
    PRIMITIVE
        string
        number
        boolean
        undefined
        null
        bigint
        symbol
    NON-PRIMITIVE
        Objects(arrays, functions) - collection of values
*/
const student = {
    fName: "Shradha",
    Age : 24,
    cgpa : 8.2,
    isPass: true,
};
    
student.Age += 1;

console.log(name);

console.log(student);
console.log(student.fName);
console.log(student.Age);
console.log(student.cgpa);
console.log(student.isPass);

console.log(typeof student["isPass"]);