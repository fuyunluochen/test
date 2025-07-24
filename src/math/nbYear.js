/**
 * 计算人口达到目标数量所需的年数
 * @param {number} p0 - 初始人口数量
 * @param {number} percent - 每年人口增长的百分比
 * @param {number} aug - 每年新增/迁入的固定人口数量
 * @param {number} p - 目标人口数量
 * @returns {number} 达到目标人口数量所需的年数
 */
function nbYear(p0, percent, aug, p) {
  let years = 0;
  let currentPopulation = p0
  const percentMultiplier = 1 + percent / 100
  while (currentPopulation < p) {
    currentPopulation = currentPopulation * percentMultiplier + aug
    years++
  }
  return Number(years);
}

module.exports = nbYear;
