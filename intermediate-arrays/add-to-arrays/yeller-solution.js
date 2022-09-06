

let yeller = function(words) {
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newWords.push(word.toUpperCase() + '!');
    }

    return newWords;
};

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]