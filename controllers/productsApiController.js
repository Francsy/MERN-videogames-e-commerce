const Manufacturer = require('../models/manufacturers')
const Product = require('../models/products')



const getAllProducts = (req, res) => res.json({ state: "success"})




module.exports = {
    getAllProducts
}