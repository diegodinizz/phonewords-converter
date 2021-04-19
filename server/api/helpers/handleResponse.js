const error = {
  errorMessage:
    'The phone number has to contain only digits from 2 to 9. Max of 9 digits.'
}

const response = (success, phonewords, error) => {
  return {
    success: success,
    phonewords: phonewords,
    error: error
  }
}

module.exports = {
  error,
  response
}
