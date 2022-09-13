/* 
    *********** Shortest Word ***********
Write a function shortestWord that accepts a sentence as an argument. 
The function should return the shortest word in the sentence. 
If there is a tie, return the word that appears later in the sentence.
*/

function shortestWord(string) {
    let words = string.split(' ');
    let shortestWord = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length <= shortestWord.length) {
            shortestWord = words[i];
        }
    }
    
    return shortestWord;
}



console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'