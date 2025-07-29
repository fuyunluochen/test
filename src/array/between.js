/**
 * 生成一个从a到b（包含）的连续整数数组
 * @param {number} a - 起始数字
 * @param {number} b - 结束数字
 * @returns {number[]} 包含从a到b所有整数的数组
 */
function between(a, b) {
  // your code here
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}

console.log(between(1, 4))