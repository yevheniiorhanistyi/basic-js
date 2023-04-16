function getMatrixElementsSum(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let sum = 0;

  for (let j = 0; j < numCols; j++) {
    for (let i = 0; i < numRows; i++) {
      if (matrix[i][j] === 0) {
        break;
      }
      sum += matrix[i][j];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
