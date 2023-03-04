const mongoose = require('mongoose');
require('../utils/db_mongo')

const objectSchema = {
    name: {
        type: String,
        required: true,
        unique: true
    },
    relevance: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manufacturer',
        required: true
    }
}

const productSchema = mongoose.Schema(objectSchema);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// const p = new Product({
//     name: "Heura",
//     relevance: 8,
//     price: 3.80,
//     manufacturer: "63d0023844abf01339ee1697"
// });

// p.save().then((data)=>console.log(data));