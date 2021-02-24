const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  const isCat = (el) => el === '^^';
  return matrix.flat().filter(isCat).length;
};