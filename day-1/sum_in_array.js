

function sum (array){
    sum = 0;
    for (let i = 0 ; i < array.length;i++){
        sum = sum + array[i];

    }

    return sum;
}

console.log(sum([1,2,3,4,5]));