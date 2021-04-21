const express = require('express')
const router = require('./api')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })
}

app.use('/phonewords/api', router)

app.listen(port, () => {
  console.log('Server running on port ' + port)
})
