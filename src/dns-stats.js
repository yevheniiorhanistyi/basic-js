function getDNSStats(domains) {
  const dnsCounts = {};

  domains.forEach((domain) => {
    const parts = domain.split(".").reverse();
    let dns = "";

    parts.forEach((part) => {
      dns += "." + part;
      dnsCounts[dns] = (dnsCounts[dns] || 0) + 1;
    });
  });

  return dnsCounts;
}

module.exports = {
  getDNSStats
};
