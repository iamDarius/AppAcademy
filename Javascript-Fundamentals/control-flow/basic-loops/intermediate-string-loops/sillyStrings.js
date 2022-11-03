/*
Silly Strings
----------------------------------------------------------
Write a function sillyString that accepts a word as an argument. 
The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. 
For example, 'siren' would turn into 'sibireben'.

*/

function sillyString(string) {
    const vowels = 'aeiou';
    let updatedWord = '';
   
    for (let i = 0; i < string.length; i++) {
        updatedWord += string[i];
        
        if (vowels.includes(string[i])) {
            updatedWord += `b${string[i]}`;
        }
    }
    
    return updatedWord;
    
}


console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber