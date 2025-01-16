"use strict";
// Hackerrank diagonal difference problem
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
// Given a square matrix, calculate the absolute difference
// between the sums of its diagonals.
// j is the X axis (horizontal)
// i is the Y axis (vertical)
function diagonalDifference(arr) {
    // Array to store diagonal's sums
    var diagonalSum = [];
    // Iterating through the matrix's first diagonal
    for (var i = 0; i < arr[0].length; i++) {
        for (var j = i; j < arr[0].length; j++) {
            // Storing Matrix index value into the first
            // index of the sum array & adding values
            if (diagonalSum[0] === undefined) {
                diagonalSum[0] = arr[i][j];
            }
            else {
                diagonalSum[0] += arr[i][j];
            }
            break; // breaks the horizontal loop because the index has already
            // been accessed
        }
    }
    // For-loop inversion to facilitate iteration
    for (var j = 0; j <= arr[0].length - 1; j++) {
        for (var i = (arr[0].length - 1) - j; i >= 0; i--) {
            // Storing Matrix index value into the second
            // index of the sum array & adding values
            if (diagonalSum[1] === undefined) {
                diagonalSum[1] = arr[i][j];
            }
            else {
                diagonalSum[1] += arr[i][j];
            }
            break;
        }
    }
    return Math.abs(diagonalSum[0] - diagonalSum[1]); // Return the positive number
}
var input = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
console.log(diagonalDifference(input));
exports.a = 123;
