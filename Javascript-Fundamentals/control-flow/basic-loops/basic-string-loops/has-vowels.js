/* 
    ------ Has Vowel --------
Write a function hasVowel(str) that takes in a string. 
The function should return a boolean, true if the string contains at least one vowel, false otherwise.

Vowels are the letters a, e, i, o, u.
*/
function hasVowel(str) {
    const vowels = [ 'a', 'e', 'i', 'o', 'u'];
    let index = 0;
    
    while (index < str.length) {
        if (vowels.includes(str[index])) {
            return true;
        }
        index++;
    }
    
    return false;
}






console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false