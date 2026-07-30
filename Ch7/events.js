let btn1 = document.getElementById("btn1");
// btn1.onclick = () => {
//     console.log("buttton1 was clicked");
//     alert('hello');
// }//we are using arrow function

let btn2 = document.getElementById("btn2");
// btn2.ondblclick = (e) => {
//     console.log("buttton2 was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }//here e is the event object

let box = document.getElementById("box");
// box.onmouseover = (e)=>{
//     console.log("You are inside the div");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

//When we repeat event handling for the same node then the last one is given priority. Also js event handling has more priority than inline event handling

//-----------------------------------------------------------------------
//EVENT LISTENER
btn1.addEventListener("click", (e)=>{
    console.log("buttton2 was clicked-handler1");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
})
btn1.addEventListener("click", ()=>{
    console.log("buttton2 was clicked-handler2");
})

const handler3 = ()=>{
    console.log("buttton2 was clicked-handler3");
}
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", ()=>{
    console.log("buttton2 was clicked-handler4");
})
//Through event listener we can repeat things(which we wheren't able to above)


// btn1.removeEventListener("click", ()=>{
//     console.log("buttton2 was clicked-handler3");
// })

btn1.removeEventListener("click", handler3);
//we cant remove like this because this creates a new function and takes up different space in the memory and thats why we use variables for defining functions

//-----------------------------------------------------------------------
//Create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again.
let tBtn = document.getElementById("togglebtn");
let currMode = "light";
let body = document.querySelector("body");

tBtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else{
        currMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }

    console.log(currMode);
})