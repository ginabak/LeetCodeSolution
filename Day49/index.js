/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let dp = new Array(m).fill(1).map(()=> new Array(n).fill(1));

    for(let i=1;i < dp.length;i++){
        for(let j = 1; j < dp[0].length; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1];
}