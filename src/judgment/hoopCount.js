/**
 * 根据完成的圈数返回相应的鼓励信息
 * @param {number} n - 完成的圈数
 * @returns {string} 如果圈数大于等于10返回鼓励进阶的消息，否则返回继续努力的消息
 */
function hoopCount(n) {
  //your code goes here
  if (n >= 10) {
    return "Great, now move on to tricks"
  }
  return "Keep at it until you get it"
}

console.log(hoopCount(3))