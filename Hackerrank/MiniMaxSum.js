"use strict";
// Hackerrank Mini Max Sum
// Given five positive integers, find the minimum and maximum values that 
// can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single 
// line of two space-separated long integers.
Object.defineProperty(exports, "__esModule", { value: true });
exports.i = void 0;
function miniMaxSum(arr) {
    //Empty array for pushing sum results
    var resultArray = [];
    // Since we know the size of the array (5), Lets just
    // add all of the numbers together
    var sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    // Looping throug the array we can subtract each number
    // from the sum to get the five possible sums
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        resultArray.push(sum - arr[i_1]);
    }
    // We can now sort the additions, meaning
    // the first element will be the smallest sum 
    // and the last will be the largest sum
    resultArray.sort();
    // Return the smallest number (first index)
    // and the largest number (last index) [again, we know the size of the array]
    return console.log(resultArray[0] + " " + resultArray[4]);
}
var inputArray = [1, 3, 5, 7, 9];
console.log(miniMaxSum(inputArray));
exports.i = 123; // Still idek why this is "required"
