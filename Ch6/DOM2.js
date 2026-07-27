/*DOM Manipulation - attributes
    getAttribute(attr): to get the attribute value
    setAttribute(attr, value): to set the attribute value
*/
let element1 = document.querySelector("div");
console.log(element1);
element1.setAttribute("id", "div");
let id = element1.getAttribute("id");
console.log(id);

let element2 = document.querySelector("p");
console.log(element2);
let id2 = element2.getAttribute("class");
console.log(id2);

console.log(element1.style);// this just shows inline style
element1.style.backgroundColor = "purple"; 

//-----------------------------------------------------------------------
/*Inserting and deleting elements
    node.append(el): adds at the end of the node(inside)
    node.prepend(el): adds at the start of node(inside)
    node.before(el): adds before the node(outside)
    node.after(el): adds after the node(outside)

    node.remove(): removes the node
*/

let el1 = document.createElement("button");
el1.innerText = "Click me!";
console.log(el1);
let el2 = document.createElement("button");
el2.innerText = "Click me!";
let el3 = document.createElement("h2");
el3.innerHTML = "<i>This is heading before paragraph.</i>";
let el4 = document.createElement("h2");
el4.innerHTML = "<u>This is a heading after paragraph.</u>";
element1.append(el2);
element1.prepend(el1);

element2.before(el3);
element2.after(el4);

document.querySelector("b").remove();
document.querySelectorAll(".para")[1].remove();