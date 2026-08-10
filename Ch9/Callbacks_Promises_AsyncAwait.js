// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 15000); // 1 sec = 1000 ms

// console.log("three");
// console.log("four");

// //This is asynchronous programming.

//-----------------------------------------------------------------------

//Callbacks

// function sum(a,b){
//     console.log(a+b);
// }

// function Calc(a,b, sum){
//     sum(a,b);
// }

// Calc(1,2, sum);// remember here we do not use () after the function because then it is not a callback and will show error

//-----------------------------------------------------------------------

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data ", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// //Callback hell
// getData(1, ()=>{
//     console.log("getting data 2....");
//     getData(2, ()=>{
//         console.log("getting data 3....");
//         getData(3, ()=>{
//             console.log("getting data 4....");
//             getData(4);
//         });
//     });
// })

//-----------------------------------------------------------------------
//PROMISES

// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("This is a promise.");
//         resolve("SUCCESS");
//         // reject("Some error ocurred in the promise");
//     });
// };

// let promise = getPromise();

// promise.then((res)=>{
//     console.log("Promise fulfilled.", res);
// })
// promise.catch((err)=>{
//     console.log("promise rejected", err);
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data ", dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//     })
// }
// let promise2 = getData(123);
// What happens here that getdata first gives us a promise that it will give us the data of the particular id and for the time being it is pending state but after the timeout end that is 5 secs here the data is printed and if we check the promise state it becomes fulfilled and resolve prints success

//-----------------------------------------------------------------------
//Promise chain

// function asyncFunc1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("SUCCESS");
//         }, 4000);
//     });
// };

// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("SUCCESS");
//         }, 4000);
//     });
// };

// console.log("Fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log("Fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{}
//     );
// });

//-----------------------------------------------------------------------

//solution to callback hell
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("data = ", dataId);
//         resolve("success");
//     }, 3000);
//     })
// }
// getData(1)
//  .then(()=>{
//     return getData(2);
//  })
//  .then(()=>{
//     return getData(3);
//  })
//  .then((res)=>{
//     console.log(res);
//  });

//-----------------------------------------------------------------------

//ASYNC-AWAIT
//Async function always returns a promise by default
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data = ", dataId);
            resolve("success");
    }, 3000);
    })
}

// async function fetchingData() {
//     await getData(1); //1st
//     await getData(2); //2nd
//     await getData(3); //3rd
// }
// console.log(fetchingData());

//there is one more thing i.e we neccessarily dont need to create another async function for using await rather we can do it by IIFEs(Immediately Invoked Function Expression). Its basic suntax is function keywork in a bracket without any name and again brackets at the end [(func)()];

(async function() {
    console.log("Getting data1");
    await getData(1); //1st
    console.log("Getting data2");
    await getData(2); //2nd
    console.log("Getting data3");
    await getData(3); //3rd
})();
//But iifes can be executed only once

//Also learned APIs in currency converter project