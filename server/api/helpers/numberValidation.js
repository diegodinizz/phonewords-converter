const MAX_LENGTH = 9

const numberValidation = number => {
  if (!number || number.length >= MAX_LENGTH) return false
  const reg = new RegExp('^[2-9]+$')
  return reg.test(number)
}

module.exports = numberValidation
