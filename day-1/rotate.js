function rotateArray(array, k) {
    let new_rotated_array = [];
    for (let i = 0; i < array.length; i++) {
        let newIndex = (i + k) % array.length; 
        new_rotated_array.push(array[newIndex]);
    }
    return new_rotated_array;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); 
