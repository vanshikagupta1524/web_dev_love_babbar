// array=collection of items
// let hero = ["ironman","batman","spiderman"];
// let list = ["hero",86,"ship"];
// let marks = [444,55,33,122];
// marks[0]=1;
// console.log(marks);
// console.log( typeof marks);
// console.log(marks.length);
// console.log(list);
// console.log(hero);

// strings are immutable
// array are mutable

// looping over an array
// for loop
// for(let i=0;i<hero.length;i++){
//     console.log(hero[i]);
// }
// for of
// for( let j of list){
// console.log(j);
// }

// =======================================================
// Q1
// let array = [1,2,3,4,5,6];
// let sum=0;
// for(let j of array){
//     sum=sum+j;
// }
// let p = array.length;
// let avg=sum/p;
// console.log(`avg marks of the class is = ${avg}`);

// Q2
// let array = [250,645,300,900,50];
// let offer=1/10;
// let index=0;
// for(let i of array){
// i=i*offer;
// array[index]=array[index]-i;
// console.log(`the value at ${index} after offer is ${array[index]}`);
// index++;
// }
// =======================================================

// array methods

// push=add to end
// pop=delete from end and return
// toString()=convert array to string
// concat()=join multiple arrays and return Result
// unshift()=add to start
// shift()=delete from start and return
// slice()=return a piece of array
// splice()=change original array
// slice(startindex,endindex);
// splice(add element after index,remove no of elements,replace);

// let foodItems=["gujiya","marshmallows","soft drinks"];
// foodItems.push("papad");
// let deletedItem=foodItems.pop();
// console.log("deleted",deletedItem);
// console.log(foodItems.toString());

// let marvelHeros=["spiderman","thor","ironman"];
// let dcHeros=["batman","superman"];
// marvelHeros.unshift("antman");
// let hero=marvelHeros.concat(dcHeros);
// console.log(hero);
// let deletedItem=marvelHeros.shift();
// console.log("deleted",deletedItem);

// let foodItems=["gujiya","marshmallows","soft drinks","papaya","prantha"];
// console.log(foodItems);
// console.log(foodItems.slice(1,))
// console.log(foodItems.slice(2,4))

// let arr=[1,2,3,4,5,6];
// arr.splice(4,1,101,102);

// add element
// arr.splice(1,0,11);

// delete element
// arr.splice(2,1);

// replace element
// arr.splice(1,2,103);

// practise question
// Q1
// let companies=["bloomberg","microsoft","uber","google","ibm","Netflix"];
// // let v=companies.shift();
// // console.log(v);
// let v=companies.splice(2,1,"ola");
// console.log(v);
// let v=companies.push("Amazon");
// console.log(v);
// ====================================================

// // function
// function myfunc(){
// console.log("mera function");
// }
// myfunc();
// not a number
// function myfunction(msg,a){
//     console.log(msg*a);
// }
// myfunction("krish",10);

// function sum(x,y){
//     console.log(x+y);
// }
// sum(1,3);

// arrow function
// const sum=(a,b)=>{
// return a+b;
// }
// console.log(sum);
// const mul=(a,b)=>{
//     return a*b;
// }
// console.log(mul);
// ======================================================
// Q1
// let count=0;
// function convert(msg){
//     for(const char of msg){
//         if(char==='a'||char==='e'||char=== 'i'||char==='o'||char==='u'){
//             console.log(char);
//             count++;
//         }
        
//     }
    
//    console.log(count);
// }
// convert("helloc");

// const a=(helloc)=>{
//     for(const char of msg){
//         if(char==='a'||char==='e'||char=== 'i'||char==='o'||char==='u'){
//             console.log(char);
//             count++;
//         }
        
//     }
    
//    console.log(count);
// }

// console.log(a);

// ============================================
// for each loop in array
// syntax for each loop
// array.forEach(callbackfunction)
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// });


// arr.forEach(function printValue(val) {
//     console.log(val);
// });
// let venom=["pune","hyderabad","Delhi"];
// venom.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// });

// =====================================================
// for a given array of numbers print the square of each value using for each loop
// let array=[1,2,3,4,5,6];
// array.forEach((val)=>{
// console.log(val*val);
// });

// anothermethod
// let nums=[1,4,8];
// let calcsquare=(num)=>{
//     console.log(num*num);
// }
// nums.forEach(calcsquare);

// ====================================================
// some more array methods

// 1)map=creates a new array with result of some operation the value its callback returns are used
// to form new array
// Array.map(callbackfunction(value,index,arr))
// let num=[1,2,3];
// num.map((val)=>{
// console.log(val*2);
// });

// 2)filter=create a new array for element that give true for condition/filter
// let arr=[1,2,3,4,5,6];
// let evenArr=arr.filter((val)=>{
//     return val%2==0;
// })
// console.log(evenArr);

// 3)reduce= perform some operation and reduce the array to single value it returns that single value
// eg.1)
//  let num=[1,2,3,4,5,6];
// const p=num.reduce((result,current)=>{
//     return result+current;
// });
// console.log(p);
// hint:
// first it take result=1 and current=2

// eg.2)
// let arr=[1,2,3,4,5,6];
// const out=arr.reduce((prev,current)=>{
//     return prev > current ? prev : current;
// });
// console.log(output);

// =============================practise question=====================
// Q1
//  we are agiven an array of marks of student .filter out the marks of students that score greater than 90+
// let arr=[10,22,95,91,33,98];
// const output=arr.filter((num)=>{
//     return num>90;
// });
// console.log(output);

// Q2
// take a number n as input from user.create an array of numbers from 1 to n
// use reduce method to calculate sum of all numbers in the array
// use reduce method to calculate product of all numbers in the array
// let n=prompt("enter the number");
// let arr=[];
// for(let i=1;i<=n;i++){
// arr[i-1]=i;
// }
// console.log(arr);
// let output=arr.reduce((prev,current)=>{
//     return prev+current;
// });
// console.log(output);
// let out=arr.reduce((prev,current)=>{
//     return prev*current;
// });
// console.log(out);

