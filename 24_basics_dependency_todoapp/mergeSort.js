console.log("inside mergesort");
 
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index
    const mid = Math.floor(arr.length / 2);

    // Divide the array into two halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare elements from both arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// // Example
// const arr1 = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(arr1)); // [3, 9, 10, 27, 38, 43, 82]

module.exports = mergeSort;

// module.exports = {
//     mergeSort
// }