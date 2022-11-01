/* 
Abbreviate
Write a function abbreviate(word) that takes in a string arg. 
The function should return a new string where all of its vowels are removed. */

function abbreviate(str) {
    const stringArr = str.toLowerCase().split('');
    const vowels = [ 'a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    stringArr.forEach(letter => {
        const letterIsAVowel = vowels.includes(letter);

        if (!letterIsAVowel) {
            newStr += letter;
        }
    });

    return newStr;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'