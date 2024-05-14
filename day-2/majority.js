
/**
 * 
 * Find the Majority Element: Write a function to find the majority element in an array 
 * (the element that appears more than n/2 times where n is the length of the array).
 * give me the answer in the javascript 
 */
function majorityElement(array){
    const counts = {};

    for (let num of array){
        counts[num] = (counts[num] || 0) + 1;
    }

    for (let key in counts){
        if (counts[key] > array.length/2){
            return parseInt(key);
        }
    }

}


console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4]));