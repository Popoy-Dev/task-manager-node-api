const {connectDB} = require('./db/connection')
const express = require('express')
const app = express()
const task = require('./routes/task')
const { notFound } = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
require('dotenv').config()



// middle wre
app.use(express.json())

const port = 3000

const start = async () => {

  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on port ${port}...`))

  }catch(err) {
    throw new Error(err)
  }
}

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/api/v1/tasks', task)

app.use(notFound)
app.use(errorHandlerMiddleware)

start()