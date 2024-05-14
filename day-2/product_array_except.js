

function product_Array(array){
    
    multiplied_array = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 1; j < array.length - 1 - i ; j++){
            multiplied_array = array[j]*array[j+1];
        }

    }
    return multiplied_array;

}


console.log(product_Array([1,2,3,4]));