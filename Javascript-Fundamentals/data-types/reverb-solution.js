let reverb = function(word) {
    if (typeof word !== 'string') {
      return null;
    }
    let vowels = 'aeiouAEIOU';
    for (let i = word.length - 1; i >= 0 ;i--) {
      if (vowels.includes(word[i])) {
        return word + word.slice(i);
      }
    }
    return word;
  }
  
  console.log(reverb('running')); // runninging
  console.log(reverb('FAMILY'));  // FAMILYILY
  console.log(reverb('trash'));   // trashash
  console.log(reverb('DISH'));    // DISHISH
  console.log(reverb(197393));    // null