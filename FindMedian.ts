// Hackerrank Day 1 test
// I had to learn how to properly sort a number[] array
// I had to learn that .length() and .length are TWO DIFFERENT METHODS

// Find the median number of a uneven length number array

// The arrays are always uneven, but with unknown length
let aa: number[] = [5,3,1,2,4,10,8,7,6,9,11];

function findMedian(arr: number[]): number {
    
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // By subtracting 1 from the arr.length we make it even
    let len = arr.length - 1

    //by dividing by two we get the exact index where the median is
    return arr[len/2]

}

console.log(findMedian(aa))

//this was easy