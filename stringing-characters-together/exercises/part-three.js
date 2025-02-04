//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let firstLetter = language.slice(0,1);
let secondLetter = language.slice(4,5);
console.log(firstLetter + secondLetter);
// after checking for solution
console.log(language.slice(0,1)+ language.slice(4,5));
let initials = (language.slice(0,1)+ language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace("ava", "")+language.replace("cript", ""));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${initials}.`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let lannguage2 = language.replace("Script", "Java").toUpperCase().slice(1, 7);
console.log(lannguage2);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(notTitleCase.replace("t", "T").replace('c', 'C'));
console.log(`${notTitleCase[0].toUpperCase()}${notTitleCase.slice(1)} ${notTitleCase[6].toUpperCase()}${notTitleCase.slice(7)}`);