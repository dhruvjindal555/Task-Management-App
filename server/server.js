const express = require('express')
const app = express()
const port = 8888
var cors = require('cors')
const connectToDatabse = require('../server/db/database')
connectToDatabse()

app.use(express.json())
app.use(cors())
app.use('/api', require('../server/routes/taskRouter'))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})