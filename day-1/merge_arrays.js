

function merge_arrays(array_one,array_two){
    arrays = [];

    for (let i = 0; i < array_one.length; i++){
        arrays.push(array_one[i]);
    }

    for (let i = 0; i < array_two.length; i++){
        arrays.push(array_two[i]);
    }


    for (let i = 0; i < arrays.length; i++){
        for (let j = 0; j < arrays.length -1 - i; j++){
            if (arrays[j] > arrays[j+1]){
                temp = arrays[j];
                arrays[j] = arrays[j+1];
                arrays[j+1] = temp;
            }


        }
    }
    return arrays;
}

console.log(merge_arrays([1,2,3,5,7],[4,6,8]));


