/*
    Dynamic Fizz Buzz
Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2). 
The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.
*/
function dynamicFizzBuzz(max, num1, num2){
    const arr = [];
    for (let i = 0; i < max; i++) {
        const isDivisibleBYNum1 = i % num1 === 0;
        const isDivisibleBYNum2 = i % num2 === 0;
        
        if ((isDivisibleBYNum1 && !isDivisibleBYNum2) || (!isDivisibleBYNum1 && isDivisibleBYNum2)) {
            arr.push(i);
        }
    }
    return arr;
}


console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]