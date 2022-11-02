function doubleLetterCount(string) {
    let doubleLetterCount = 0;
    
    for (let i = 0; i < string.length; i++) {
        const doubleLetterFound = string[i] === string[i + 1];
        
        if (doubleLetterFound) {
           doubleLetterCount += 1; 
        }
    }
    
    return doubleLetterCount;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1