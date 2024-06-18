//give an array caculate the sum of array values except first two values
//  [1,2,3,4,5] = 5+4+3 = 12
//Destructuring arrays.

function sumOfArray(numbersArray){
    let sum = 0;
    let [fistNumber,secondNumber,...rest] = numbersArray;
    for (let item of rest){
        sum = sum + item;
    }
    return sum;
}

let numbersArray = [ 1, 2, 3, 4, 5 ];
let ArraySum = sumOfArray(numbersArray);
console.log(ArraySum);

