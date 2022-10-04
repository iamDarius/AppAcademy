/*
    ----- Vowel Counter -------
Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/
function countVowels(word) {
    // your code here...
    let index = 0;
    let count = 0;
    const vowels = [ 'a', 'e', 'i', 'o', 'u'];
      
      
      while (index < word.length) {
          const letter = word[index];
          
          if (vowels.includes(letter)) {
              count++;
          }
          index++;
      }
      
      return count;
    
  };
  
  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2