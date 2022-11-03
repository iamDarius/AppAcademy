/*
    Caesar Cipher
    --------------------------------------
Write a method caesarCipher that takes in a string and a number. 
The function should return a new string where every character of the original is shifted num characters in the alphabet.
*/

// Feel free to use this variable:
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    let newString = [];

    for (let i = 0; i < string.length; i++) {
       let index = alphabet.indexOf(string[i]);
       
       // if the index + the num param is greater than length of alphabet
       // reset the index
       if (index + num > alphabet.length) {
          let remainder = (index + num) - alphabet.length;
          index = 0;
          index = remainder;
          newString[i] = alphabet[index];
          continue;
       }
       
       newString.push(alphabet[index + num]);
    }
    
    return newString.join('');
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"