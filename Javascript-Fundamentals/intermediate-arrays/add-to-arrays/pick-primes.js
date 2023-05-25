/*
    Problem: Write a function pickPrimes that takes in an array of numbers and returns a new array containing only the prime numbers.
*/

function pickPrimes(array) {
    return array.filter(isPrime);
}

function isPrime(num) {
    for (let i = 1; i < num; i++) {
        if ((num % i === 0) && (i !== num && i !== 1)) {
            return false;
        }
    }
    return true;
}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]