 function removeElement(array,target){
    let removed_array = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] != target){
           removed_array += array[i]
        }
        
    }
    return removed_array;
 }

 console.log(removeElement([1,2,3,4,5],4));