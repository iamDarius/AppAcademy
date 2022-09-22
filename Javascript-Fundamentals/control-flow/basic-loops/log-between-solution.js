function logBetween(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i += 1) {
      console.log(i);
    }
  }
  
  function logBetweenWhile(lowNum, highNum) {
    let i = lowNum;
    while (i <= highNum) {
      console.log(i);
      i++;
    }
  }