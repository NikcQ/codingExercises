// Hackerrank Plus minus problem
// Given an array of integers, calculate the ratios of its
// elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.


function plusMinus(arr: number[]): void {

    // Setters for the count of positive, negative and zeroes
    let positiveDelta = 0;
    let negativeDelta = 0;
    let zeroDelta = 0;


  for (const i in arr) {
    if (arr[i] > 0) { //if current index is positive
        positiveDelta++
    }
    else if(arr[i]<0){ //if current index is negative
        negativeDelta++
    }else if(arr[i] === 0){ //if current index equals to zero
        zeroDelta++
    }
  }

  // Print the decimal value of each fraction on a new line with '6' places after the decimal.
    console.log((positiveDelta/arr.length).toFixed(6));
    console.log((negativeDelta/arr.length).toFixed(6));
    console.log((zeroDelta/arr.length).toFixed(6));

}


let inputArray = [1, 1, 0, -1, -1];

console.log(plusMinus(inputArray))
export let x = 123; // I now know why I need this
// If i share variable names between files, this prevents it from blowing up
