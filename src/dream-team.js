module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members.filter(el => typeof el === 'string')
      .map(el => el.trim().charAt(0).toUpperCase())
      .sort()
      .join('');
};
