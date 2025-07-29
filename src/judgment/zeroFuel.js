/**
 * 判断汽车是否能够到达加油站
 * @param {number} distanceToPump - 到加油站的距离（英里）
 * @param {number} mpg - 每加仑汽油可以行驶的英里数
 * @param {number} fuelLeft - 剩余汽油量（加仑）
 * @returns {boolean} 如果剩余汽油足够到达加油站则返回true，否则返回false
 */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump;

};
console.log(zeroFuel(50, 25, 2))