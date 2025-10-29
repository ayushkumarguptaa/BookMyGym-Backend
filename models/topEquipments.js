const mongoose = require('mongoose')



const equipmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

})

const Equipment = mongoose.model("Equipment", equipmentSchema);

module.exports = Equipment;