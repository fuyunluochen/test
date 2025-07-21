/**
 * 计算数组中值为true的羊的数量（使用for循环实现）
 * @param {Array<boolean>} sheep - 包含布尔值的数组，表示羊是否存在
 * @returns {number} 返回true值的数量
 */
function countSheeps(sheep) {
  let count = 0;
  for (const sheepKey in sheep) {
    if (sheep[sheepKey] === true) {
      count++
    }
  }
  return count;
}

/**
 * 计算数组中值为true的羊的数量（使用filter方法实现）
 * @param {Array<boolean>} sheep - 包含布尔值的数组，表示羊是否存在
 * @returns {number} 返回true值的数量
 */
function countSheeps2(sheep) {
  return sheep.filter(Boolean).length;
}

console.log(countSheeps2([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]
))
console.log(countSheeps([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]
))
