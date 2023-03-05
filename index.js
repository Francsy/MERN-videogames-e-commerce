const express = require('express')
const cors = require('cors')
require('dotenv').config()


const morgan = require('morgan')
const errorHandler = require('./middlewares/errorHandler')


const productsApiRoutes = require('./routes/productsApiRoutes')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(morgan('dev'))

app.use('/api/products',productsApiRoutes); // Rutas web API products


app.get('/', (req, res) => res.send('Welcome to our api'))

app.use(errorHandler);

app.listen(PORT, () => {
    console.log('Working on port ' + PORT)
})