/**
 * 验证PIN码是否符合规则
 * @param {string} pin - 需要验证的PIN码字符串
 * @returns {boolean} 如果PIN码是4位或6位数字则返回true，否则返回false
 */
function validatePIN(pin) {
  //return true or false
  return /^\d{4}$|^\d{6}$/.test(pin);
}