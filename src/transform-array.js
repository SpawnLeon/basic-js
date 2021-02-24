const ruleMap = {
  '--double-next': 1,
  '--double-prev': 2,
  '--discard-next': 3,
  '--discard-prev': 4,
};

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    switch (ruleMap[arr[i]]) {
      case 1:
        result.push(arr[i + 1]);
        break;
      case 2:
        result.push(result[result.length - 1]);
        break;
      case 3:
        result.push(undefined);
        i += 1;
        break;
      case 4:
        result.pop();
        break;
      default:
        result.push(arr[i]);
    }
  }
  return result.filter(function(el) {
    return el !== undefined;
  });
};