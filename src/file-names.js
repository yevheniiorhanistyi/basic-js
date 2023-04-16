function renameFiles(names) {
  const counts = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (name in counts) {
      const suffix = `(${counts[name]})`;
      let newName = `${name}${suffix}`;

      while (newName in counts) {
        counts[name]++;
        newName = `${name}(${counts[name]})`;
      }
      counts[newName] = 1;
      names[i] = newName;
    } else {
      counts[name] = 1;
    }
  }

  return names;
}

module.exports = {
  renameFiles
};
