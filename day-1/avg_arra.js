
function averageArray(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    let average = sum/array.length;
    return average;
}

console.log(averageArray([1, 2, 3]));
