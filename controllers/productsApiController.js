const Manufacturer = require('../models/manufacturers')
const Product = require('../models/products')



const getAll = async (req, res) => {
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer');
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllSortByName = async (req, res) => {
    const { order } = req.query // asc or des
    let orderInfo;
    order === 'asc' ? orderInfo = 1 : orderInfo = -1;
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer').sort({name: orderInfo});
        res.status(200).json(products);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllSortByRelevance = async (req, res) => {
    const { order } = req.query 
    let orderInfo;
    order === 'asc' ? orderInfo = 1 : orderInfo = -1;
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer').sort({relevance: orderInfo});
        res.status(200).json(products);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const getAllSortByPrice = async (req, res) => {
    const { order } = req.query 
    let orderInfo;
    order === 'asc' ? orderInfo = 1 : orderInfo = -1;
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer').sort({price: orderInfo});
        res.status(200).json(products);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}



module.exports = {
    getAll,
    getAllSortByName,
    getAllSortByRelevance,
    getAllSortByPrice

}