
function createDreamTeam(members) {
  if(Array.isArray(members)) {
    return members.filter(str => typeof(str) === 'string')
                  .map(str => str.trim()[0].toUpperCase())
                  .sort()
                  .join('')
  } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
