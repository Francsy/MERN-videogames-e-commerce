const mongoose = require('mongoose');
require('../utils/db_Mongo');

const objectSchema = {
    manufaturer_name: { 
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

// Insertar un provider
// const p = new Manufacturer({
//     manufaturer_name: "COEXDI",
//     CIF: "08949394854K",
//     address: "Plaza del Pilar Redondo"
// });

// p.save().then((data)=>console.log(data));