// Hackerrank diagonal difference problem

// Given a square matrix, calculate the absolute difference
// between the sums of its diagonals.

// j is the X axis (horizontal)
// i is the Y axis (vertical)

function diagonalDifference(arr: number[][]): number {

    // Array to store diagonal's sums
    let diagonalSum: number[] = [];
    
    // Iterating through the matrix's first diagonal
    for (let i = 0; i < arr[0].length; i++){
        for(let j = i ; j < arr[0].length; j++){

            // Storing Matrix index value into the first
            // index of the sum array & adding values
            if(diagonalSum[0] === undefined){
                diagonalSum[0] = arr[i][j];
            }else{
                diagonalSum[0] += arr[i][j];
            }
            break; // breaks the horizontal loop because the index has already
            // been accessed
        }
    }

    // For-loop inversion to facilitate iteration
    for (let j = 0 ; j <= arr[0].length - 1; j++){
        for(let i = (arr[0].length - 1) - j ; i >= 0; i--){


            // Storing Matrix index value into the second
            // index of the sum array & adding values
            if(diagonalSum[1] === undefined){
                diagonalSum[1] = arr[i][j];
            }else{
                diagonalSum[1] += arr[i][j];
            }
            break;
        }
    }

    return Math.abs(diagonalSum[0] - diagonalSum[1]) // Return the positive number

}


var input: number[][] = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
];

console.log(diagonalDifference(input));
export let a = 123;