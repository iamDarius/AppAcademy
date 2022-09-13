/* 
******* Yeller *******
Write a function yeller(words) that takes in an array of words. 
The function should return a new array where each element of the original array is yelled. 

*/

function yeller(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase() + '!';
    }
    return arr;
}



console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]