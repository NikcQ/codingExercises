"use strict";
// Hackerrank Plus minus problem
// Given an array of integers, calculate the ratios of its
//  elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
function plusMinus(arr) {
    console.log(arr);
    console.log(arr[0].valueOf);
    console.log(arr.length);
    var positiveDelta = 0;
    var negativeDelta = 0;
    var zeroDelta = 0;
    for (var i = 0; i <= arr.length; i++) {
        console.log(typeof arr[i]);
        if (arr[i] > 0) {
            console.log("before: " + positiveDelta);
            positiveDelta = positiveDelta + 1;
            console.log("after: " + positiveDelta);
        }
        else if (arr[i] < 0) {
            negativeDelta++;
        }
        else {
            zeroDelta++;
        }
    }
    console.log((positiveDelta / arr.length).toFixed(6));
    console.log((negativeDelta / arr.length).toFixed(6));
    console.log((zeroDelta / arr.length).toFixed(6));
}
var inputArray = [1, 1, 0, -1, -1];
console.log(plusMinus(inputArray));
exports.x = 123;
