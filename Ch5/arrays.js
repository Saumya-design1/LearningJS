// //This is an array
// let marks = [97, 82, 72, 98, 87];
// console.log(marks);
// console.log(marks.length);//property
// marks[1] = 88;//arrays are mutable while strings for that case aren't
// console.log(marks[1]);
// console.log(typeof marks);

// let sum = 0;
// for(let i of marks){
//     sum += i;
// }
// console.log(`The avg marks is = ${sum/marks.length}`);

// let heroes = ["ironman", "spiderman", "blackpanther", "captain", "loki", "thor", "antman"];
// console.log(heroes);

// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// for(let i of marks){
//     console.log(i);
// }

// let cities = ["delhi", "pune", "chennai"];
// for(let i of cities){
//     console.log(i.toUpperCase());
// }

// let prices = [250, 645, 300, 900, 50];
// for(let i=0; i<prices.length; i++){
//     prices[i] -= prices[i]*(10/100);
// }
// console.log(prices);

//-----------------------------------------------------------------------

/*Array methods
    push() - add to end{does changes in our original array}
    pop() - delete from end and return{does changes in our original array}
    toString() - converts array to string{return a new array}
    concat() - joins multiple arrays and returns result{return a new array}
    unshift() - add to start{does changes in our original array}
    shift() - delete from start and return{does changes in our original array}
    slice() - returns a piece of the array
    splice() - change original array(add, remove, replace)[syntax: .splice(startIdx, delCount, newIdx)]
*/

let veggies = ["potato", "brinjal", "tomato", "chilli"]
veggies.push("bottleguard", "lemon");
console.log(veggies);
veggies.pop("lemon");
console.log(veggies);
console.log(veggies.toString());

let marvel_heroes = ["thor", "spiderman", "ironman", "captain", "hulk", "loki"];
let dc_heroes = ["superman", "batman", "aquaman"];
let indiam_heroes = ["shaktiman", "krish"];

let ourHeroes = marvel_heroes.concat(dc_heroes, indiam_heroes);
console.log(ourHeroes);

marvel_heroes.unshift("antman");
console.log(marvel_heroes);

marvel_heroes.shift();//dlt antman
console.log(marvel_heroes);

console.log(marvel_heroes.slice(2,5));

let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102,103);
console.log(arr);

//Add element
//arr.splice(2,0,101);

//Delete element
//arr.splice(3,1);

//Replace element
//arr.splice(3,1,102);

//If we pass only one index in splice then it deletes all the further indicess in the arr for eg if we do arr.splice(4) then if we print the array it will print as [1,2,101,102]