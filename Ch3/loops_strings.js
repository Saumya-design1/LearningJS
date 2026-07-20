console.log("Hello World!");

for(let i =0; i<5; i++){
    console.log("Apna College");
}

//calculate sum of first n number
let n = prompt("Enter the number till where u want the sumation:");
let sum = 0;
for(let i = 1; i<=n; i++){
    sum += i;
}
console.log("The sum is", sum);

let j =1;
while(j<=10){
    console.log("Apna College");
    j++;
}

//first block code is run and then condition is checked
let k = 20;
do{
    console.log("Shradha");
    k++;
}while(k <=10);

//for-of loop(used for strings and arrays)
let str = "JavaScript";
let size = 0;
for(let i of str){// iterator -> characters
    console.log("i=", i);
    size++;
}
console.log("string size = ", size);