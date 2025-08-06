/**
 * 反转字符串中的每个单词，但保留所有空格
 * @param {string} str - 输入的字符串
 * @returns {string} 反转每个单词后的字符串
 *
 * @example
 * reverseWords("This is an example!") // returns "sihT si na !elpmaxe"
 * reverseWords("double  spaces") // returns "elbuod  secaps"
 */
function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(
      ' ');
}

console.log(reverseWords("This is an example!"))