const mongoose = require('mongoose');

// async function connection(){
//     await mongoose.connect("mongodb://localhost:27017/Listings");

// }

const DataSchema = mongoose.Schema({
    "name" : {
        type : String,
        require
    },
        "address" : {
            type : String,
            require
        },
    "city" : {
        type: String,
        require
    },
    "state" : {
        type : String,
        require
    },
    "pin" : {
        type: Number,
        require
    }
    ,
    "price" : {
        type: Number,
        require
    },
    "hours" : {
        type: String,
        require
    },
    "image": {
        type: String,
        require
    },
}) 

const DataModel = mongoose.model("DataModel", DataSchema);

module.exports = DataModel;