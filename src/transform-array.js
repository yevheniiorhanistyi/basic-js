function transform(arr) {
  if(!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`);

  const newArray = [];

  for(let i = 0; i < arr.length; i++) {

      switch (arr[i]) {
        case '--discard-next':
          arr.length > i + 1 ? i++ : null
          break;
        case '--discard-prev':
          newArray.length > 0 && newArray[newArray.length - 1] === arr[i - 1] ? newArray.pop() : null
          break;
        case '--double-next':
          arr.length > i + 1 ? newArray.push(arr[i + 1]) : null
          break;
        case '--double-prev':
          arr[i - 1] && arr[i - 2] != '--discard-next' ? newArray.push(arr[i - 1]) : null
          break;
        default:
          newArray.push(arr[i]);
      }
      
  }

  return newArray
}

module.exports = {
  transform
};
