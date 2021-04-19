const numberValidation = number => {
  if (!number) return false
  const reg = new RegExp('^[2-9]+$')
  return reg.test(number)
}

const error = {
  errorMessage: 'Phone number not valid. Only digits 2 to 9.'
}

const response = (success, phonewords, error) => {
  return {
    success: success,
    phonewords: phonewords,
    error: error
  }
}

module.exports = {
  numberValidation,
  error,
  response
}
