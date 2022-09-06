/* Unique

Write a function unique that accepts an array as an argument. 
The function should return a new array containing elements of the input array, without duplicates.

*/

function unique(array) {
    const inputArr = array.sort();
    const arr = [inputArr[0]];
    
    let i = 1;
    
    while (i < inputArr.length) {
        if (arr[arr.length - 1] !== inputArr[i]) {
           arr.push(inputArr[i]); 
        }
        
        i++;
    }
    
    return arr;
}


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']