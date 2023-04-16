function sortByHeight(arr) {
  const heights = arr.filter(x => x !== -1);
  heights.sort((a, b) => a - b);
  let i = 0;
  return arr.map(x => {
    if (x !== -1) {
      i++;
      return heights[i - 1];
    }
    return x;
  });
}

module.exports = {
  sortByHeight
};
