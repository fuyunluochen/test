function validatePIN(pin) {
  //return true or false
  return /^\d{4}$|^\d{6}$/.test(pin);
}

console.log(validatePIN("1234"))
console.log(validatePIN("123456"))