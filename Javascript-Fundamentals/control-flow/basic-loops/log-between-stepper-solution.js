function logBetweenStepperFor(min, max, step) {
    for (let i = min; i <= max; i += step) {
      console.log(i);
    }
  }
  
  function logBetweenStepper(min, max, step) {
    let i = min;
    while (i <= max) {
      console.log(i);
      i += step;
    }
  }