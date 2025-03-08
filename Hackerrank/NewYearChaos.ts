function minimumBribes(q: number[]): void {
    let bribes = 0;

    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }

        // Count how many people ahead of q[i] have a larger number
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }

    console.log(bribes);
}

console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]))