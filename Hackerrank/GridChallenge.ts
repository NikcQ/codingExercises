/*
function gridChallenge(grid: string[]): string {
    
    let comparator: string[] = []
    let organised: string[] = [];
    let organisedFlag : Boolean = false;

    for (let i = 0; i < grid.length; i++) {
        
        organised.push(grid[i].split("").sort().join(""))
        comparator.push(organised.split("")[0])
    }


    for (let i = 0; i < comparator.length; i++) {
        const element = array[i];
        
    }

    console.log(organised)
    console.log(comparator)

    return [...comparator].sort().join("") === comparator.join("") ? "YES": "NO";

}

console.log(gridChallenge(['kc','iu']))
console.log(gridChallenge(['uxf','vof','hmp']))
*/