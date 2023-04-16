function repeater(str, options) {

  const {
    separator = '+',
    addition = '',
    additionSeparator = '|',
    additionRepeatTimes = 1,
    repeatTimes = 1
  } = options;

  const createString = (repeat, fill, separator) => new Array(repeat).fill(fill + '').join(separator);
  const addit = createString(additionRepeatTimes, addition, additionSeparator);
  return createString(repeatTimes, str + addit, separator);
}

module.exports = {
  repeater
};
