// 导入数组相关函数
const {maps, maps2} = require('./array/maps');
const highAndLow = require('./array/highAndLow');
const {smallEnough, smallEnough2} = require('./array/smallEnough');
const {countSheeps, countSheeps2} = require('./array/countSheeps');

// 导入数学相关函数
const nbYear = require('./math/nbYear');
const solution = require('./math/solution');
const summation = require('./math/summation');
// 测试数组相关函数
console.log('Maps:', maps([1, 2, 3]));
console.log('Maps2:', maps2([1, 2, 3]));
console.log('High and Low:', highAndLow("1 2 3 4 5"));
console.log('Small Enough:', smallEnough([1, 2, 3], 4));
console.log('Small Enough2:', smallEnough2([1, 2, 3], 4));
console.log('Count Sheeps:', countSheeps([true, false, true]));
console.log('Count Sheeps2:', countSheeps2([true, false, true]));

// 测试数学相关函数
console.log('NB Year:', nbYear(1000, 2, 50, 1200));
console.log('Solution:', solution(10));
console.log('Summation:', summation(8));

