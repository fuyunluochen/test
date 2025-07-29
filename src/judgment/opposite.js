/**
 * 返回给定数字的相反数
 * @param {number} number - 需要获取相反数的数字
 * @returns {number} 输入数字的相反数
 */
function opposite(number) {
  //your code here
  if (number > 0) {
    return -number;
  }
  return number * -1;
}