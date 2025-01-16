// Hackerrank Day 1 test
// I had to learn how to properly sort a number[] array
// Find the median number of a uneven length number array
var aa = [5, 3, 1, 2, 4, 10, 8, 7, 6, 9, 11];
function findMedian(arr) {
    arr.sort(function (a, b) { return a - b; });
    var len = arr.length - 1;
    return arr[len / 2];
}
console.log(findMedian(aa));
