/* Problem: Define a function isPrime(number) that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself. */
function leastCommonMultiple(num1, num2) {
    let maxNum = num1 * num2;
    let i = 1;
    
    while (i <= maxNum) {
        if ( (i % num1 === 0) && (i % num2 === 0) ) {   
            return i;
        }
        i++;
    }
}


console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10