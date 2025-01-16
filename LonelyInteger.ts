// Hackerrank lonely integer problem
// Given an array of integers, where all elements but one occur twice, 
// Find the unique element.

// I got the idea at first, but it required a lot
// fine tuning to get it right

function lonelyinteger(a: number[]): number {

    // Variable to store the lonely number
    // It's set to negative for check purposes
    let result : number = -1;
    a.sort((a,b) => a-b); // I learned

    /*  The idea of sorting the array is that each pair of
        a[n] AND a[n+1] (starting on n=0) are the same value, since
        there is only ONE number that does not repeat,
        that means that if a[n] != a[n+1] is ALWAYS true that
        a[n] is the "lonely value".

        We must iterate in steps of 2
    */

    for (let i = 0; i < a.length + 1; i = i+2) { // increasing in steps of two prevents false positives

        if (a[i] != a[i+1]){
            result= a[i]
            break; // It's important to break the loop here becauseif not
            // the function will return the value in the last index

        }else if (i+1 >= a.length - 1 || result === -1){ // If we haven't found the lonely number yet, then it's the last index
            result = a[a.length-1]
        };

    }

    return result;
}

var input: number[] = [34,95,34,64,45,95,16,80,80,75,3,25,75,25,31,3,64,16,31];
console.log(lonelyinteger(input));
export let a=123;