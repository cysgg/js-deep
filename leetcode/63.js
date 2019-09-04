/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let n = obstacleGrid.length,
        m = obstacleGrid[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j] == 1) {
                obstacleGrid[i][j] = 0
            } else {
                if (i == 0 && j == 0) {
                    obstacleGrid[i][j] = 1
                } else if (i == 0) {
                    obstacleGrid[i][j] = obstacleGrid[i][j - 1]
                } else if (j == 0) {
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j]
                } else {
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
                }
            }
        }
    }
    return obstacleGrid[n - 1][m - 1]
};

let arr = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

console.log(uniquePathsWithObstacles(arr));