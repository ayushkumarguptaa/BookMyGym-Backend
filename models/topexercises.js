const mongoose = require('mongoose');

let TopSchema = mongoose.Schema({
    "title" : {
        type: String,
        require
    },
    "image" :{
        type: String,
        require
    }

})


let topExercise = mongoose.model("Topexercise", TopSchema);

module.exports = topExercise;