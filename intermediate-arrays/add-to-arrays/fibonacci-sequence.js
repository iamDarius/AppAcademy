/* 

********** Fibonacci Sequence **********
Write a function fibonacciSequence that accepts a number as an argument. 
The function should return an array representing the fibonacci sequence up to the 
given length. The first and second numbers of the sequence are 1 and 1. 

To generate subsequent numbers of the sequence, 
we take the sum of the previous two numbers of the sequence. */

// Your code here
function fibonacciSequence(maxLength) {
    
    let arr = [1, 1];
    let i = 1;
    
    if (!maxLength) return [];
    
    if (maxLength === i) return [1];
    
    while (i < maxLength - 1) {
        const firstNum = arr[arr.length - 2];
        const secondNum = arr[arr.length - 1];
        
        arr.push(firstNum + secondNum);
        i++;
    }
    return arr;
}


console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]