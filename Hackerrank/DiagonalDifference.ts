// Hackerrank diagonal difference problem

// Given a square matrix, calculate the absolute difference
// between the sums of its diagonals.

// j is the X axis (horizontal)
// i is the Y axis (vertical)

function diagonalDifference(arr: number[][]): number {
  // O(n^4) I know i can make this better

  // Array to store diagonal's sums
  let diagonalSum: number[] = [];

  // Iterating through the matrix's first diagonal
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      // Storing Matrix index value into the first
      // index of the sum array & adding values
      if (diagonalSum[0] === undefined) {
        diagonalSum[0] = arr[i][j];
      } else {
        diagonalSum[0] += arr[i][j];
      }
      break; // breaks the horizontal loop because the index has already
      // been accessed
    }
  }

  // For-loop inversion to facilitate iteration
  for (let j = 0; j <= arr[0].length - 1; j++) {
    for (let i = arr[0].length - 1 - j; i >= 0; i--) {
      // Storing Matrix index value into the second
      // index of the sum array & adding values
      if (diagonalSum[1] === undefined) {
        diagonalSum[1] = arr[i][j];
      } else {
        diagonalSum[1] += arr[i][j];
      }
      break;
    }
  }

  return Math.abs(diagonalSum[0] - diagonalSum[1]); // Return the positive number
}

function betterDiagonal(arr: number[][]): number {
  // O(n^2) Way better

  let diagonalSum: number[] = [0, 0]; // Initialising the array eliminates if statement
  let len = arr.length - 1; // array index

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      diagonalSum[0] += arr[i][j];
      diagonalSum[1] += arr[i][len - j]; // i just take the opposite side and that's it
      // i only traverse one time
    }
  }

  return Math.abs(diagonalSum[0] - diagonalSum[1]);
}

function evenBetter(arr: number[][]): number { // O(n) Even better
  let diagonalSum: number[] = [0, 0];

  // Since it's a diagonal, that means that i === j so we can get rid of
  // the second for-loop and we can also drop the len variable and just math it
  // directly into the indexes.

  for (let i = 0; i < arr.length; i++) {
    diagonalSum[0] += arr[i][i];
    diagonalSum[1] += arr[i][arr.length - i - 1];
  }

  return Math.abs(diagonalSum[0] - diagonalSum[1]);
}

var input: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(input));
console.log(betterDiagonal(input));
console.log(evenBetter(input));
console.log(diagonalDifference(input) === betterDiagonal(input) && betterDiagonal(input) === evenBetter(input) ? true : false);
export let a = 123;
