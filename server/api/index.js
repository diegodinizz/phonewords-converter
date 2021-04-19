const express = require('express')
const numberValidation = require('./helpers/numberValidation')
const getPhoneWords = require('./helpers/numberToWordConverter')
const { error, response } = require('./helpers/handleResponse')

const router = express.Router()

router.get('/:number', (req, res) => {
  let data = {}

  if (numberValidation(req.params.number)) {
    phonewords = getPhoneWords(req.params.number)
    data = response(true, phonewords, undefined)
    res.statusCode = 200
  } else {
    data = response(false, null, error.errorMessage)
    res.statusCode = 400
  }

  res.json(data)
})

module.exports = router
