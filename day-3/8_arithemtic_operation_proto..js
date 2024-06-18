
//function to add prototypes to the function prototype
function ArithmeticOperations(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
}


  const firstNumber = JSON.parse(readLine());
  const secondNumber = JSON.parse(readLine());
  
  const operation1 = new ArithmeticOperations(firstNumber, secondNumber);
  
  ArithmeticOperations.prototype.sumOfNumbers= function(){
      return firstNumber + secondNumber;
  }
  
  ArithmeticOperations.prototype.productOfNumbers = function (){
      return firstNumber * secondNumber;
  }
  
  ArithmeticOperations.prototype.differenceOfNumbers = function () {
      return firstNumber - secondNumber;
  }

  console.log(operation1.sumOfNumbers());
  console.log(operation1.productOfNumbers());
  console.log(operation1.differenceOfNumbers());
