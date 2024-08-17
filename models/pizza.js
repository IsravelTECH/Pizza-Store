const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true      
    },
    size: {
        type: String,
        required: true, 
        enum: ['small', 'medium', 'large'] 
    },
    price: {
        type: Number,
        required: true, 
        min: 0          
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Pizza', pizzaSchema);
