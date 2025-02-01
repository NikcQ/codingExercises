// Hackerrank Mini Max Sum
// Given five positive integers, find the minimum and maximum values that 
// can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single 
// line of two space-separated long integers.

function miniMaxSum(arr: number[]): void {
    
    //Empty array for pushing sum results
    let resultArray: Number[] = []; 

    // Since we know the size of the array (5), Lets just
    // add all of the numbers together
    let sum: number = arr[0]+arr[1]+arr[2]+arr[3]+arr[4];

    // Looping throug the array we can subtract each number
    // from the sum to get the five possible sums

    for(const i of arr){
        resultArray.push(sum - i);
    }

    // We can now sort the additions, meaning
    // the first element will be the smallest sum 
    // and the last will be the largest sum
    resultArray.sort()

    // Return the smallest number (first index)
    // and the largest number (last index) [again, we know the size of the array]
    return console.log(resultArray[0] + " " +resultArray[4])

}

let inputArray: number[] = [1,3,5,7,9];
console.log(miniMaxSum(inputArray));
export let x = 123;


