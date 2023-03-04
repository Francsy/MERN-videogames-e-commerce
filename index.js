const express = require('express')
const morgan = require('morgan')
const errorHandler = require('./middlewares/errorHandler')




const productsApiRoutes = require('./routes/productsApiRoutes')



const app = express()
const port = 3000

app.use(morgan('dev'))

app.use('/api/products',productsApiRoutes); // Rutas web API products



app.get('/', (req, res) => res.send('Hello World'))

app.use(errorHandler);

app.listen(port, () => {
    console.log('Working on port ' + port)
})