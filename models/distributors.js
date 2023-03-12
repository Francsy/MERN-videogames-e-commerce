require('../utils/db_mongo')

const mongoose = require('mongoose');

const objectSchema = {
    distributor_name: { 
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

const distributorSchema = mongoose.Schema(objectSchema);

const Distributor = mongoose.model('Distributor', distributorSchema);

module.exports = Distributor;

// const p = new Manufacturer({
//     distributor_name: "COEXDI",
//     CIF: "08949394854K",
//     address: "Plaza del Pilar Redondo"
// });

// p.save().then((data)=>console.log(data));