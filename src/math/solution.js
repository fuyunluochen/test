/**
 * 计算小于给定数字的所有3或5的倍数之和
 * @param {number} number - 上限数字
 * @returns {number} 所有3或5的倍数的总和
 */
function solution(number) {
  let sum = 0
  if (number < 0) {
    return 0
  }
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

module.exports = solution;
