const express = require('express')
const helmet = require("helmet")
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(helmet())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/soap', function(req, res) {
    res.send('Hello Beautiful World!')
  })

app.get('/rest', function(req, res) {
    res.send('Hello Great World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})