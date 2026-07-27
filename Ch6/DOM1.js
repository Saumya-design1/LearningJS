//DOM - Document Object Model
console.log("Hello World!");

// console.dir(window.document);//prints the properties and methods of the objects
// console.log(window.document);//prints the element

//-----------------------------------------------------------------------
//// This is DOM manipulation. Basically here we are using diferent methods to access html elements by using their IDs, class or tag.

// let button = document.getElementById("myId"); //h1
// console.dir(button);

// let headings = document.getElementsByClassName("heading");
// console.dir(headings);

// let paras = document.getElementsByTagName("p");
// console.dir(paras);

//-----------------------------------------------------------------------

// let firstElement = document.querySelector("p"); // gives the matching 1st element
// console.dir(firstElement);

// let elements = document.querySelectorAll("p"); // gives the matching elements
// console.dir(elements);

//-----------------------------------------------------------------------

let firstElement = document.querySelector(".heading"); // gives the matching 1st element
console.dir(firstElement);

let elements = document.querySelectorAll(".heading"); // gives the matching elements
console.dir(elements);

let element = document.querySelector("#myId");
console.dir(element);

//-----------------------------------------------------------------------
/* Properties of DOM Manipulation
    tagName: return tag for element nodes
    innerText: returns the text content of the element and all its children
    innerHTML: returns the plain text or HTML contents in the element
    textContent: returns textual content even for hidden elements
*/
console.log(firstElement.tagName);
console.log(firstElement.innerText);
console.log(document.querySelector("div").innerHTML);
console.log(document.querySelector("div").innerText);
console.log(document.querySelector("div").textContent);

//we can update the content dynamically that means on the run time by using the following syntax: [firstElement.innerText = "updated text"]
//also do try these tags without console.log but directly on console.window

//-----------------------------------------------------------------------
//create a h2 heading element with text - "Hello Javascript". Append "from ApnaCollege" to this text using JS.

// document.querySelector("h2").innerText = document.querySelector("h2").innerText + " from ApnaCollege"; // another way
document.querySelector("h2").innerText += " from ApnaCollege";

//-----------------------------------------------------------------------
//Create 3 divs with common class name - "box". Access them and add some unique text to each of them.
let boxes = document.querySelectorAll(".box");
console.dir(boxes);

let idx = 1;
for(let i of boxes){
    i.innerText += `\n new unique value ${idx}`;
    idx++;
}

// boxes[0].innerText += "\n abcd";
// boxes[1].innerText += "\n efgh";
// boxes[2].innerText += "\n ijkl";