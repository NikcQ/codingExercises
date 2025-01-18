// hackerrank test#2
// WHAT THE FUCK IS THIS SHIT? a lot of thinking-outside-the-box
// i have an idea to refactor diagonalSum

function flippingMatrix(matrix: number[][]): number {
  let n = matrix.length - 1;
  let currentSum: number = 0;

  for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      currentSum += Math.max(
        matrix[i][j],
        matrix[i][n - j],
        matrix[n - i][j],
        matrix[n - i][n - j]
      );
    }
  }

  return currentSum;
}

let input: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(flippingMatrix(input));
