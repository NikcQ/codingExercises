function zigzag(arr: number[]): number[]{
    arr.sort()
    let mid = ((arr.length + 1)/2)-1;
    let fHalf = arr.slice(0, mid);
    let sHalf = arr.slice(mid).reverse();
    var newArray = fHalf.concat(sHalf)
    
    return newArray;
}

var input: number[] = [1,2,3,4,5,6,7];
console.log(zigzag(input));
export let x =1223;