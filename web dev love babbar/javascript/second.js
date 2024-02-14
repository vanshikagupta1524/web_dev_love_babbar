// loops and strings
// for(i=1;i<=5;i++){
//     console.log("humaari baatein");
// }

// sum 1 to 5
// let sum=0;
// for(let i =0;i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum);

// while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// do while loop
// let i=25;
// do{
//     console.log(i);
//     i++;
// }while(i>30);

// for-of loop
// str="hummare";
// let size=0;
// for(let val of str){
//     console.log(val);
//     size++;
// }
// console.log(size);

// let student={
//     name:"vanshika",
//     age:30,
//     cgpa:9.0,
//     isPass: true,
// };
// for(let i in student){
//     console.log(i);
// }
// for(let key in student){
//     console.log("key:",key,"value:",value=student[key]);
// }

//Q1 print all even number from 0 to 100
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Q2
// guess the number
// let b=25;
// let a=prompt("guess the number");
// while(a!=b){
//     a=prompt("you entered wrong no");
// }
// console.log("yes,you entered correct no");

// strings
// let str="Kunal lata";
// let str2="vanshika Gupta";
// console.log(str[1]);

// template literals
// let sentence=`this is template literals`;
// console.log(sentence);
// console.log( typeof sentence);

// let obj={
//     item:"pen ",
//     price:" 5",
// };
// `the cost of ${obj.item} is ${obj.price}`;
// let output=`the cost of ${obj.item}is${obj.price}`;
// console.log(output);
// console.log("the cost of:",obj.item,"is",obj.price);

// let str=`this is template literal ${1+2+6}`;
// console.log(str);

// escape characters
// let str ="Apno\nRajasthan";
// console.log(str.length);
// tab
// let md="Apno\tRajasthan";
// console.log(md.length);

// uppercase
// let str="apna rajasthan";
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.slice(1,4));
// let str1="   apna rajasthan   ";
// console.log(str1.trim());
// console.log(str.concat(str1));
// console.log(str.replace("a","j"));
// console.log(str.charAt(2));

// Q
let str1="@";
let str2=prompt("Enter your name:");
let str3="123";
console.log(str1+str2+str3);
