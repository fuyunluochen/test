/**
 * 将正数转换为负数，如果输入为负数或零则保持不变
 * @param {number} num - 要转换的数字
 * @returns {number} 转换后的负数或原始数字
 */
function makeNegative(num) {
  // Code?
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

console.log(makeNegative(1))