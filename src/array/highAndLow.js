/**
 * 查找数字字符串中的最大值和最小值
 * @param {string} numbers - 由空格分隔的数字字符串
 * @returns {string} 返回包含最大值和最小值的字符串，格式为"最大值 最小值"
 */
function highAndLow(numbers) {
  let arr = numbers.split(' ').map(Number)
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}

module.exports = highAndLow;
