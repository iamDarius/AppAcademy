let sillyString = function(word) {
    let vowels = "aeiou";
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (vowels.includes(char)) {
        newWord += char + "b" + char;
      } else {
        newWord += char;
      }
    }
    return newWord;
};

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber