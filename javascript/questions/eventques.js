// Q1
// create a toggle button that changes screen to dark mode when clicked and light mode
// when clicked again
let btn1=document.querySelector("#btn1");

let currentMode="light";
let body=document.querySelector("body")

btn1.addEventListener("click",()=>{
if(currentMode==="light"){
    currentMode="dark";
    // document.querySelector("body").style.backgroundColor="black";
    body.classList.add("dark");
     body.classList.remove("light");
}
else{
    currentMode="light";
    // document.querySelector("body").style.backgroundColor="white";
    body.classList.add("light");
     body.classList.remove("dark");
}
console.log(currentMode);

});