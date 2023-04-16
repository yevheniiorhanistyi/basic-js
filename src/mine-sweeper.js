function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      let count = 0;
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < numRows && y >= 0 && y < numCols && !(x == i && y == j)) {
            if (matrix[x][y]) {
              count++;
            }
          }
        }
      }
      row.push(count);
    }
    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper
};
