const express = require('express')
const morgan = require('morgan')
const errorHandler = require('./middlewares/errorHandler')


const app = express()
const port = 3000


app.use(morgan('dev'))


app.get('/', (req, res) => res.send('Hello World'))

app.use(errorHandler);

app.listen(port, () => {
    console.log('Working on port ' + port)
})