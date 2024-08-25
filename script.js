function diagonalSum(matriks){
    let n = matriks.length;
    let total = 0;

    for (let i = 0; i < n; i++) {
        total += matriks[i][i];
        if (i !== n - 1 - i) {
            total += matriks[i][n - 1-i];
        }
    }
    return total;
}


console.log(diagonalSum([ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
])) //25

console.log(diagonalSum([ 
    [ 1,  2,  3,  4], 
    [ 5,  6,  7,  8], 
    [ 9, 10, 11, 12], 
    [13, 14, 15, 16], 
])) //68