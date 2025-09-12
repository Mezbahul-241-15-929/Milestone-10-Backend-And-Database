const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
  res.send('this is data')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})