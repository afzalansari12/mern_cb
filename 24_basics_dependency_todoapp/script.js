// const merge = require("./mergeSort");

// console.log(merge);

// const { mergeSort } = require("./mergeSort");

// // console.log(merge);       // calling function by name 
// const arr = [38,27,43,3,9,82,10];

// console.log(mergeSort(arr));

const mergeSort = require("./mergeSort");
const bubbleSort = require("./bubblesort");

const arr = [38, 27, 43, 3, 9, 82, 10];

console.log("Merge Sort:", mergeSort([...arr]));
console.log("Bubble Sort:", bubbleSort([...arr]));



// let person = {
//     name : 'kartik',
//     address :'Delhi',
//     country :'India'
// }