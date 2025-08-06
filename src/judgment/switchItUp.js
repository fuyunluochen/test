/**
 * 将数字(0-9)转换为对应的英文单词
 * @param {number} number - 要转换的数字(0-9)
 * @returns {string} 对应的英文单词，如果数字不在0-9范围内则返回"Invalid number"
 * @example
 * switchItUp(1) // returns "One"
 * switchItUp(5) // returns "Five"
 * switchItUp(10) // returns "Invalid number"
 */
function switchItUp(number) {
//Write your own Code!
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid number";
  }
}

console.log(switchItUp(1))