const express = require('express')
const cors = require('cors')
const path = require('path');
require('dotenv').config()


const errorHandler = require('./middlewares/errorHandler')


const productsApiRoutes = require(path.join(__dirname, 'routes', 'productsApiRoutes'))

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json({ extended: false }));


app.use('/api/products', productsApiRoutes); // Rutas web API products

if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


app.use(errorHandler);

app.listen(PORT, () => {
    console.log('Working on port ' + PORT)
})