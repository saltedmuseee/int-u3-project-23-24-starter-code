// Declare variables below to save the different divs of your story.
let body = document.querySelector(".body");
let header = document.querySelector(".h1");
let button = document.querySelector(".buttons");
let homepage= document.querySelector(".homepage");

let optionOnebutton= document.querySelector(".option-one");
let optionTwobutton= document.querySelector(".option-two");

let screenOne= document.querySelector(".option-one-screen") //wizard//
let screenTwo= document.querySelector(".option-two-screen") //shark//

let screenOneEnd=document.querySelector(".option-one-end") //shy p2//
let screenTwoEnd=document.querySelector(".option-two-end") //shy p2//

let screenOneOne=document.querySelector(".option-one-one") //confident p2//
let screenOneTwo=document.querySelector(".option-one-two") //confident p2//

let screenOneOneEnd=document.querySelector(".option-one-one-end") //confident p2//
let screenOneTwoEnd=document.querySelector(".option-one-two-end") //confident p2//

optionOnebutton.addEventListener("click", function() {
    homepage.style.display="none";
    screenOne.style.display="block";
});
screenOne.addEventListener("click", function() {
    screenOne.style.display="none";
    screenOneEnd.style.display="block";
});

optionTwobutton.addEventListener("click", function() {
    homepage.style.display="none";
    screenTwo.style.display="block";
});
screenTwo.addEventListener("click", function() {
    screenTwo.style.display="none";
    screenTwoEnd.style.display="block";
});

optionOneOnebutton.addEventListener("click", function() {
    homepage.style.display="none";
    screenOneOne.style.display="block";
});
screenOneOne.addEventListener("click", function() {
    screenOneOne.style.display="none";
    screenOneOneEnd.style.display="block";
});


optionOneTwobutton.addEventListener("click", function() {
    homepage.style.display="none";
    screenOneTwo.style.display="block";
});
screenOneTwo.addEventListener("click", function() {
    screenOneTwo.style.display="none";
    screenOneTwoEnd.style.display="block";
});


optionTwoOnebutton.addEventListener("click", function() {
    homepage.style.display="none";
    screenTwoOne.style.display="block";
});
screenTwoOne.addEventListener("click", function() {
    screenTwoOne.style.display="none";
    screenTwoOneEnd.style.display="block";
});


optionTwoTwobutton.addEventListener("click", function() {
    homepage.style.display="none";
    screenTwoTwo.style.display="block";
});
screenTwoTwo.addEventListener("click", function() {
    screenTwoTwo.style.display="none";
    screenTwoTwoEnd.style.display="block";
});
