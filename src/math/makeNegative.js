/**
 * 将正数转换为负数，如果输入为负数或零则保持不变（条件语句实现）
 * @param {number} num - 要转换的数字
 * @returns {number} 转换后的负数或原始数字
 */
function makeNegative(num) {
  if (num < 0) {
    return num;
  }
  if (num > 0) {
    return -num;
  }
  if (num === 0) {
    return num;
  }
}

/**
 * 将正数转换为负数，如果输入为负数或零则保持不变（三元运算符实现）
 * @param {number} num - 要转换的数字
 * @returns {number} 转换后的负数或原始数字
 */
function makeNegative2(num) {
  return num > 0 ? -num : num;
}

module.exports = {makeNegative, makeNegative2};
