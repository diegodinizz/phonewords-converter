// Added MAX_LENGTH on node API to prevent overflow
const MAX_LENGTH = 6

const numberValidation = number => {
  if (!number || number.length >= MAX_LENGTH) return false
  const reg = new RegExp('^[2-9]+$')
  return reg.test(number)
}

module.exports = numberValidation
