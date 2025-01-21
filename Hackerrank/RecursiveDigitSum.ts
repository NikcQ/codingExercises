// Hackerrank Recursive Digit Sum Challenge

function superDigit(n: string, k: number): number {

    // Accumulation variable
    let sumation: number = 0;

    //Iterate the string and sum each digit
    for (let i of n){
        sumation += parseInt(i);
    }

    // Multiply by the times the string is supposed to repeat (number k)
    sumation *= k;

    // Count the number of digits and make the function recursive
    // By making it call itself
    return sumation.toString().length === 1 ? sumation : superDigit(sumation.toString(),1)

}


console.log(superDigit('9875', 4));