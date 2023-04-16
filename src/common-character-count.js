function getCommonCharacterCount(s1, s2) {
  const freq = {};
  for (const ch of s1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  let count = 0;
  for (const ch of s2) {
    if (freq[ch]) {
      count++;
      freq[ch]--;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
