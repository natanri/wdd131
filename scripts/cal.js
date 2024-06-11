function calculate(a, b, jhon) {
    jhon(a + b);
  }
  
  
function displayResult(result) {
    console.log('The result is: ' + result);
  }

calculate(2,3,displayResult) //the function callback is a distractor you should call the displayResult 
                            //to get the result

const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
console.log(countriesLong)