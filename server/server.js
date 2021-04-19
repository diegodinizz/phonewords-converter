const express = require('express')
const router = require('./api')

const app = express()
const port = process.env.PORT || 5000

app.use('/api', router)

app.listen(port, () => {
  console.log('Server running on port ' + port)
})
