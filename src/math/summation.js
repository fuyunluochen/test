/**
 * 计算从1到给定数字的累加和
 * @param {number} num - 要计算累加和的目标数字
 * @returns {number} 从1到目标数字的累加和
 */
function summation(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

module.exports = summation;
