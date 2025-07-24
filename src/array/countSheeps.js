/**
 * 计算数组中值为true的羊的数量（使用for循环实现）
 * @param {Array<boolean>} arrayOfSheep - 包含布尔值的数组，表示羊是否存在
 * @returns {number} 返回true值的数量
 */
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (const sheepKey in arrayOfSheep) {
    if (arrayOfSheep[sheepKey] === true) {
      count++
    }
  }
  return count;
}

/**
 * 计算数组中值为true的羊的数量（使用filter方法实现）
 * @param {Array<boolean>} arrayOfSheep - 包含布尔值的数组，表示羊是否存在
 * @returns {number} 返回true值的数量
 */
function countSheeps2(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

module.exports = {countSheeps, countSheeps2};
