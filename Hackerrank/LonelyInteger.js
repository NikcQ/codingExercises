"use strict";
// Hackerrank lonely integer problem
// Given an array of integers, where all elements but one occur twice, 
// Find the unique element.
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
function lonelyinteger(a) {
    // Write your code here
    var result = -1;
    a.sort(function (a, b) { return a - b; });
    console.log(a);
    console.log("len: " + a.length);
    for (var i = 0; i < a.length + 1; i = i + 2) {
        console.log(i);
        if (a[i] != a[i + 1]) {
            result = a[i];
            break;
        }
        else if (i + 1 >= a.length - 1 || result === -1) {
            result = a[a.length - 1];
        }
        ;
    }
    return result;
}
var input = [34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31];
console.log(lonelyinteger(input));
exports.a = 123;
