require('../utils/db_Mongo');
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