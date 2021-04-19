const express = require('express')
const { numberValidation, error, response } = require('./helpers/handleErrors')
const { getPhoneWords } = require('./helpers/numberToWordConverter')

const router = express.Router()

router.get('/:number', (req, res) => {
  let data = {}

  if (numberValidation(req.params.number)) {
    phonewords = getPhoneWords(req.params.number)
    data = response(true, phonewords, '')
    res.statusCode = 200
  } else {
    data = response(false, [], error.errorMessage)
    res.statusCode = 400
  }

  res.json(data)
})

module.exports = router
