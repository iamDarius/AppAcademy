/* Two Dimensional Product
Write a function two DimensionalProduct(array) that takes in a 2D array of numbers as an argument. 
The function should return the total product of all numbers multiplied together. */

// your code here

function twoDimensionalProduct(array) {
    let product = 1;
    
    for(let i =0; i < array.length; i++) {
        let row = array[i];
        
        for(let j = 0; j < row.length; j++) {
            product = product * row[j];
        }
    }
    
    return product;
}



let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88