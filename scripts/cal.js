function calculate(a, b, jhon) {
    jhon(a + b);
  }
  
  
function displayResult(result) {
    console.log('The result is: ' + result);
  }

calculate(2,3,displayResult) //the function callback is a distractor you should call the displayResult 
                            //to get the result