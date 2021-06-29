function Search2DMatrix(matrix, target) {
  let row = 0;
  let col = matrix.length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
}

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;

console.log(Search2DMatrix(matrix, target));

/**
 * 2차원 배열
 * row = 배열의 길이
 * col = [][0] 배열의 길이 - 1
 */
