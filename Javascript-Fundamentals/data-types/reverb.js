/*
Reverb
-----------
Write a function reverb that accepts a word as an argument. 
The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. 
If the value passed in is not a string, say someone passes in a number as an argument, then return null.

*/

const vowels = 'aeiou';

function reverb(str) {
    if (typeof str === 'string') {

        for (let i = str.length - 1; i >= 0; i--) {
            const currentLetter = str[i].toLowerCase();
            const vowelFound = vowels.lastIndexOf(currentLetter) > -1;

            if (vowelFound) {
                const lettersToRepeat = str.slice(i);
                return str + lettersToRepeat;
            }
        }
    }
    return null;
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null