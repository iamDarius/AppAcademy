let reverseSentence = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        newWords.push(words[i]);
    }

    let newSentence = newWords.join(' ');
    return newSentence;
};

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'