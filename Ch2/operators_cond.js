//OPERATORS and CONDITIONS
alert("Hello World!");//displays a pop up message

// Arithematic operators: + - * / %
let a = 10;
let b = 5;

console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b);//10^5 exponential
a++;
console.log("a++ = ", a);
a--;
console.log("a-- =", a);

//Assignment operators: =, +=, -=, *=, /=, %=, **=
//Comparison operators: ==,!=, <=, <, >=, >, ===(Equal to and also checks datatype), !==(not equal to and also checks datatype )
//Special case in javascript

let x = 5; //number
let y = "5"; // string(which js explicitly convarts into number)

console.log("x==y", x==y); //true
console.log("x ===y", x===y); //false

//Logical operators: &&(and), ||(or), !(not )

//-----------------------------------------------------------------------

let age = 7;
if(age >= 18){
    console.log("Legal");
}
else{
    console.log("Underage");
}

//Ternary operator
//condition?true output:false output

age>=18? console.log("adult"):console.log("not adult");

//-----------------------------------------------------------------------

let fullName = prompt("Enter your name");//displays a popup where u can give an input
console.log(fullName);

//-----------------------------------------------------------------------

//Get the user to input a number and check if the number is a multiple of 5 or not.

let num = prompt("Enter a number to check for multiple of 5");
if(num%5 == 0){
    console.log(num, "is a multiple of 5");
}
else{
    console.log(num, "is not a multiple of 5");
}

//-----------------------------------------------------------------------

let score = prompt("Enter your score");
if(score<100 && score>=90){
    console.log("Grade A");
}
else if(score<90 && score>=80){
    console.log("Grade B");
}
else if(score<80 && score>=70){
    console.log("Grade C");
}
else if(score<70 && score>=60){
    console.log("Grade D");
}
else if(score<60 && score>=50){
    console.log("Grade E");
}
else if(score<50 && score>=0){
    console.log("Grade F");
}
else{
    console.log("Enter a valid score");
}