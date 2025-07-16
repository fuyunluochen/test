/**
 * 将输入数组中的每个元素乘以2（使用for...in循环实现）
 * @param {number[]} x - 输入的数字数组
 * @returns {number[]} 返回一个新数组，其中每个元素都是输入数组中对应元素的2倍
 */
function maps(x) {
  let newArray = [];
  for (const xKey in x) {
    newArray.push(x[xKey] * 2)
  }
  return newArray;
}

/**
 * 将输入数组中的每个元素乘以2（使用map方法实现）
 * @param {number[]} x - 输入的数字数组
 * @returns {number[]} 返回一个新数组，其中每个元素都是输入数组中对应元素的2倍
 */
function maps2(x) {
  return x.map(n => n * 2);

}

console.log(maps2([1, 2, 3]))
console.log(maps([1, 2, 3]))
console.log(maps([1, 2, 3, 4, 5]))