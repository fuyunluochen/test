function maps(x) {
  let newArray = [];
  for (const xKey in x) {
    newArray.push(x[xKey] * 2)
  }
  return newArray;
}

function maps2(x) {
  return x.map(n => n * 2);

}

console.log(maps2([1, 2, 3]))
console.log(maps([1, 2, 3]))
console.log(maps([1, 2, 3, 4, 5]))