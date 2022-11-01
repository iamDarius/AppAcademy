/* Has Three Vowels
Write a function hasThreeVowels that accepts a string as an argument. 
The function should return a boolean indicating whether or not the string contains at least three different vowels. */

function hasThreeVowels(str) {
    const newStr = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsFound = [];

    for (let i = 0; i < newStr.length; i++) {
        const vowel = vowels.find(vowel => vowel === newStr[i]);
        const vowelAlreadyExists = vowel && vowelsFound.includes(vowel);
        
        if (vowel && !vowelAlreadyExists) {
            vowelsFound.push(vowel);
        }
    }
    
    return vowelsFound && vowelsFound.length > 2;
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false