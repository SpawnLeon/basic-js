module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 1;
    }

    let max = 1;
    arr.forEach(el => {
      if (Array.isArray(el)) {
        const depthLevel = this.calculateDepth(el) + 1;
        if (max < depthLevel) {
          max = depthLevel;
        }
      }
    });
    return max;
  }
};