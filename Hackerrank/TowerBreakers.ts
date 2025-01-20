// Hackerrank Tower breakers challenge

// Two players are playing a game of Tower Breakers! Player  always moves first, 
// and both players always play optimally.The rules of the game are as follows:

/*
Initially there are  towers.
Each tower is of height .
The players move in alternating turns.
In each turn, a player can choose a tower of height  and reduce its height to , where  and  evenly divides .
If the current player is unable to make a move, they lose the game.
Given the values of  and , determine which player will win. If the first player wins, return . Otherwise, return .
*/

//this is a reading and logic excersise

function towerBreakers(n: number, m: number): number {
    // If all towers have height 1, Player 2 automatically wins
    if (m === 1) return 2;

    // If the number of towers is even, Player 2 has a winning strategy
    // If the number of towers is odd, Player 1 has a winning strategy
    return n % 2 === 0 ? 2 : 1;
}

console.log(towerBreakers(2,6))