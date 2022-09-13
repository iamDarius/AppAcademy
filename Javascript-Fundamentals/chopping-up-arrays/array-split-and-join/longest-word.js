/* 
********* Longest Word *********
Write a function longestWord(sentence) that takes in a sentence string as an argument.
 The function should return the longest word in the sentence. 
 If there is more than one "longest word", return the first of these instances.*/

function longestWord(string) {
    let longestWord = '';
    const strArr = string.split(' ');
    
    strArr.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })
    
    return longestWord;
}




console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''