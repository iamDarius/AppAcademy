/**
 * 
 * Fizz Buzz
    Define a function fizzBuzz(max) that takes a number and prints every number from 0 to max (not inclusive)
    that is divisible by either 3 or 5, but not both.} max 
 */

 const isDivisibleBy3 = (i) => i % 3 === 0;

 const isDivisibleBy5 = (i) => i % 5 === 0;
 
 function fizzBuzz(max) {
    for (let i = 1; i < max; i++) {
        if ((isDivisibleBy3(i) && !isDivisibleBy5(i)) || (isDivisibleBy5(i) && !isDivisibleBy3(i))) {
            console.log(i);
        }
    }
}

fizzBuzz(20); // prints out:
/*3
5
6
9
10
12
18*/