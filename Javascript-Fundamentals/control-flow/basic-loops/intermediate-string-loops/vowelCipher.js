/*
    Vowel Cipher
    Write a function vowelCipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.
*/
function vowelCipher(string) {
    const vowels = 'aeiou';
    let newString = '';
    
    for (let i = 0; i < string.length; i++) {
        const index = vowels.indexOf(string[i]);
       
        if (index > -1) {
            newString += vowels[index + 1];
        } else {
            newString += string[i];
        }
    }
    return newString;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"