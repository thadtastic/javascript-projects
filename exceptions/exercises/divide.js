// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.
console.log(divide(6, 2));
console.log(divide(8,4));
// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."
console.log(divide(6, 0));

// Code your divide function here:
function divide(num, den){
    if (den === 0){
        throw Error;("Attempted to divide by zero.");
    }
   return num / den;

}
