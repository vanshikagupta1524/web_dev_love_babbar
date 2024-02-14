// 1. Write a JavaScript function to calculate the sum of two numbers. 
// sum(1,3);
// function sum(a,b){
// return a+b;
// }
// console.log(sum(1,3));

// function sum(x,y){
//     console.log(x+y);
// }
// sum(1,3);

// ===================================================
// 2. Write a JavaScript program to find the maximum number in an array. 
// function maxNum(numbers){
//     let temp=numbers[0];
// if(numbers.length==0){
//     console.log("array is empty");
// }
// else{
//     for(let i = 0;i<numbers.length;i++){
//      if(numbers[i]>temp){
//         temp=numbers[i];
//      }
//     }

// }
// return temp;
// }
// const arr=[10,20,2,1,5,9];
// console.log("max no in array is: " + maxNum(arr));

// ============================================================================
// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
// const str="12321";
// function checkPalindrome(num){
//    for(let i=0;i<=num.length;i++){
//     if(str[i]!=str[str.length-i-1]){
//         return false;
//     }
//     return true;
//    }
// }
// console.log("palindrome: "+checkPalindrome(str));
// ================================================================================
// 4. Write a JavaScript program to reverse a given string. 
// function stringReversed(str){
//  let rev="";
// for(let i=str.length-1;i>=0;i--){
// rev=rev+str[i];
// }
// return rev;
// }
// const string="hemloo";
// console.log(stringReversed(string));

// another method
// function reverseString(str) {
//     // Split the string into an array of characters, reverse the array, and join it back into a string
//     return str.split('').reverse().join('');
// }

// // Example usage:
// const originalString = "Hello, world!";
// const reversedString = reverseString(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);
// ======================================================================
// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
// const num=[1,2,3,4,5,6];
// const numss=[];
// function even(num){
//     for(let i = 0;i<num.length;i++){
//         if(num[i]%2==0){
//             numss[i]=num[i];
//         }
//     }
//   return numss;
// }
// const vari=even(num);
// for(let i = 0;i<numss.length;i++){
//     console.log(numss[i]);
// }

// ==================================================================
// Write a JavaScript program to calculate the factorial of a given number. 
