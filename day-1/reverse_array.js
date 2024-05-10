

function reverseArray(array){
    reverseArrayList = [];
    for (let i = 0; i < array.length;i++){
        reverseArrayList += array[array.length -1 - i];

    }
    return reverseArrayList;
}

console.log(reverseArray([1,2,3,4,5]));