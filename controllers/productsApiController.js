const Manufacturer = require('../models/manufacturers')
const Product = require('../models/products')



const getAll = async (req, res) => {
    const { limit, skipIndex } = req.pagination
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer').skip(skipIndex).limit(limit);
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllSortByName = async (req, res) => {
    const { order } = req.query // asc or des
    const { limit, skipIndex } = req.pagination
    let orderInfo;
    order === 'asc' ? orderInfo = 1 : orderInfo = -1;
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer').sort({name: orderInfo}).skip(skipIndex).limit(limit);;
        res.status(200).json(products);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllSortByRelevance = async (req, res) => {
    const { order } = req.query 
    const { limit, skipIndex } = req.pagination
    let orderInfo;
    order === 'asc' ? orderInfo = 1 : orderInfo = -1;
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer').sort({relevance: orderInfo}).skip(skipIndex).limit(limit);;
        res.status(200).json(products);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const getAllSortByPrice = async (req, res) => {
    const { order } = req.query 
    const { limit, skipIndex } = req.pagination
    let orderInfo;
    order === 'asc' ? orderInfo = 1 : orderInfo = -1;
    try {
        let products = await Product.find({}, '-_id -__v -manufacturer').sort({price: orderInfo}).skip(skipIndex).limit(limit);;
        res.status(200).json(products);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getProductInfo = async (req, res) => {
    const {id} = req.params;
    try {
        let product = await Product.findOne({ id }, { "_id": 0, "__v": 0 }).populate('manufacturer', '-_id -__v'); // []
        if (product) {
            res.status(200).json(product); // 
        }
        else {
            res.status(404).json({ message: "product wit id " + req.params.id + " not found"}); 
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }

}

module.exports = {
    getAll,
    getAllSortByName,
    getAllSortByRelevance,
    getAllSortByPrice,
    getProductInfo

}