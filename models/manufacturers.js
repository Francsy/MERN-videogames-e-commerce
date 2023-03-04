const mongoose = require('mongoose');
require('../utils/db_Mongo');

const objectSchema = {
    manufacturer_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true
    },
    address: { 
        type: String, 
        required: true 
    }
};

const manufaturerSchema = mongoose.Schema(objectSchema);

const Manufacturer = mongoose.model('Manufacturer', manufaturerSchema);

module.exports = Manufacturer;

// const p = new Manufacturer({
//     manufacturer_name: "COEXDI",
//     CIF: "08949394854K",
//     address: "Plaza del Pilar Redondo"
// });

// p.save().then((data)=>console.log(data));