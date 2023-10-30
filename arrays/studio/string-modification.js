const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(0,3);
let nchcode = str.slice(3);
console.log(nchcode +str2);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} turns into ${nchcode}${str2}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("How many letters will be relocated? ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
// input should = str2.length
console.log(str.length);
if (userInput > str.length){
    userInput = 3;
    console.log(`Exceeded allowed amount defualted to 10`);}

    let str3 = str.slice(0,userInput);
let theButt = str.slice(userInput);
console.log(theButt +str3);