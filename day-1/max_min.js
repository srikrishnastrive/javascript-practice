

function min_max(array){
    let  min = Infinity;
    let max = -Infinity;
    for (let  i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
        if (array[i] < min){
            min = array[i];
        }

    }
    return [min,max];
   
}

console.log(min_max([1,2,3,4,5,6]));