// yaha pe humne wait nhi kiya promise ko execute hone ka
// fir sidha data k nice waali line execute ho gya
// ab chaahe promise pending m execute hota rhe pr neeche
// waala data toh execute ho chuka h
// function getData(){
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//        resolve(455); 
//     }, (2000));
// })
// }
// console.log("loading modules");
// console.log("do something else");

// console.log("Load data");
// let data=getData();
// console.log(data);
// console.log("process data");

/////////////////////////////////////////////
// yaha pe na .then toh calback function ka kaam kr rha h
// toh yeh 2 sec baaad apna execution kr dega
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//            resolve(455); 
//         }, (2000));
//     })
//     }
//     console.log("loading modules");
//     console.log("do something else");
    
//     console.log("Load data");
//     let data=getData();
//     data.then((v)=>{
//         console.log("55");
//     })
//////////////////////////////////
// ab data kaa intezar krne k liye ek new tarika bnaaya
// async await ne toh then nhi krenge hum
// ab hum async function bnaayenge taaki vo function
// background m chalta rhe aaar m chahti hu
// ki m async functioon ka intezar kru toh m await lga
// dungi ab na jab hum await lgaate h toh hume ek aur function bnaana padta h
// toh hum na wrap krenge await k liye main function
// waise hum bina async k bhi await ko use kr skte pr vo hum aaage sikhenge

//  async function getData(){
//     // simulate getting data from server
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                resolve(455); 
//             }, (2000));
//         })
//         }
//         async function main(){
//         console.log("loading modules");
//         console.log("do something else");
//         console.log("Load data");
        
//         let data= await getData();
//         console.log(data);
//       console.log("finish");
//     }
//     main();

// ab dekhenge fetch api fir json place holder website m jaayegen
// aur fetch api le lenge lene k baad .then promise return krega
// aur fir dussra then json m parse hone ka wait krenga
// aur hum na data ko text me bhi parse kr skte h Fir vo text format m aayega
async function getData(){
    // simulate getting data from server
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json()
    // let data=await x.text()
  console.log(data)
    // .then(response => response.json())
    // .then(json => console.log(json))
        }
        async function main(){
        console.log("loading modules");
        console.log("do something else");
        console.log("Load data");
        
        let data= await getData();
        console.log(data);
      console.log("finish");
    }
    main();

