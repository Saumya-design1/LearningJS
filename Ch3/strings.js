// let str = "Apna College";
// let str2 = 'Shradha';
// console.log(str, str.length);
// console.log(str2, str2.length);

// console.log(str2[0]);
// console.log(str2[1]);
// console.log(str2[2]);
// console.log(str2[3]);
// console.log(str2[4]);
// console.log(str2[5]);
// console.log(str2[6]);

// //Template Literals - a way to have embedded expressions in strings
// let specialString = `This is a template literal where we can also use expressions like ${1+2+3}.`;//here we have used ``[backtec]
// console.log(specialString);

// //usage of template literals(string interpolation)
// let obj = {
//     item: "pen",
//     price: 10,
// };

// // console.log("The cost of", obj.item, "is", obj.price, "rupees.");//conventional way
// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);

// //String methods
// //these doesnt change the original string rather they generate a new one
// console.log(str.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str2.toLowerCase());

// let str3 = "   ab    cd    ";
// console.log(str3.trim());//removes whitespaces from the start and end

// console.log(str.slice(2,7));//It returns a part of string
// console.log(str.concat(str2));// It joins str2 with str
// console.log("I am learning from " + str + str2);//Another way to conactenate strings
// console.log("hello" + 123); //JS first converts number to strings and then concatenates
// console.log(str3.replace("ab    cd", "ef  gh"));//Helps to search some value inside the strings and replace it with new value; syntax str.replace(searchVal, newVal)

// let str4 = "Helolololo";
// console.log(str4.replace("lo", "lloo"));
// console.log(str4.replaceAll("lo", "lloo"));

// console.log(str4.charAt(2));

//-----------------------------------------------------------------------

//Prompt the user to enter their full name. Generate a username for them based on the input. Start usearname with @, followed by their full name and ending with the full name length.

let fullName = prompt("Enter your full name:");
let cleanName = fullName.toLowerCase().replaceAll(" ", "");
let userName = "@"+ cleanName + cleanName.length;
console.log(userName);