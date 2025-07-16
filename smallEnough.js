/**
 * 检查数组中的所有元素是否小于或等于给定的限制值
 * @param {number[]} a - 要检查的数字数组
 * @param {number} limit - 限制值
 * @returns {boolean} 如果所有元素都小于或等于限制值则返回true，否则返回false
 */
function smallEnough(a, limit) {
  for (const aKey in a) {
    if (a[aKey] > limit) {
      return false;
    }
  }
  return true;
}

console.log(smallEnough([1, 2, 3], 2))