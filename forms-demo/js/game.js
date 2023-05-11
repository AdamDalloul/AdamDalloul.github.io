// This file is for code needed for input, quiz, and truth game

// Global variable for first name, this is a variable that can be used for all functions 

// First name
let fname = "";

// Function to get info from intro form
// Check input, and produce a sentence
function greet() {
    let greetParagraph = document.getElementById("greet");

    // Get the values from the form
    fname = document.getElementById("fname").value; 
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // Check the input
    if (fname==="" || lname==="") {
        alert("First and last name cannot be an empty text!")
        return;
    }

    // Age check
    if (age==="" || age < 18) {
        alert("Invalid age! You must be 18 or older.")
        return;
    }

    // Update output paragraph
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
    
}

// Function to play the trivia game
function trivia1(){
    // get handle to answer paragraph
    let triviaAnswer = document.getElementById("trivia-answer")

    // get handles and values from radio selections
    let chocSelected = document.getElementById("chocolate").checked;

    let tunaSelected = document.getElementById("tuna").checked;

    let honeySelected = document.getElementById("honey").checked;


    if (chocSelected) {
        triviaAnswer.innerHTML = fname + " you got it wrong. Sweet tooth huh?";
        triviaAnswer.style.color = '#FF0000'; //red
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + " you got it wrong. Come on, you know fish goes bad.";
        triviaAnswer.style.color = '#FF0000'; //red
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + " wow, you actually got it right. Honey never goes bad!";
        triviaAnswer.style.color = '#04b976'; //green
    }
    else {
        triviaAnswer.innerHTML = fname + "Uh oh. Something went wrong!";
        triviaAnswer.style.color = '#FF0000'; //red
    }
}

function truth_and_lie() {
    // get handle to answer paragraph
    let triviaAnswer = document.getElementById("lie-answer")

    // get handles and values from radio selections
    let ukSelected = document.getElementById("U.K.").checked;

    let librarianSelected = document.getElementById("Librarian").checked;

    let lebanonSelected = document.getElementById("Lebanon").checked;


    if (ukSelected) {
        triviaAnswer.innerHTML = fname + " you got it wrong. I was actually born in the U.K.";
        triviaAnswer.style.color = '#FF0000'; //red
    }
    else if (librarianSelected) {
        triviaAnswer.innerHTML = fname + " you got it right. Who wants to be a librarian when they grow up?";
        triviaAnswer.style.color = '#04b976'; //green
    }
    else if (lebanonSelected) {
        triviaAnswer.innerHTML = fname + " you got it wrong. My parents are actually from Lebanon.";
        triviaAnswer.style.color = '#FF0000'; //red 
    }
    else {
        triviaAnswer.innerHTML = fname + "Uh oh. Something went wrong!";
        triviaAnswer.style.color = '#FF0000'; //red 
    }
}

