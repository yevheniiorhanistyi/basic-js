function getSeason(date) {

  if (date === undefined) return 'Unable to determine the time of year!';

  try {
    date.getTime();
  } catch {
    throw new Error('Invalid date!');
  }

  const seasons = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
    'winter': [11, 0, 1],
  }

  for (key in seasons) {
    if (seasons[key].includes(date.getMonth())) {
      return key
    }
  }
}

module.exports = {
  getSeason
};
