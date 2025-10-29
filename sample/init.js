const Initdata = require('./Data')
const mongoose = require('mongoose');
const DataSchema = require('../models/Listing')
const Topexercise = require('../models/topexercises')
const Topexercisedata = require('./Topexercisedata')
const TopEquipments = require('./equipments')
const Equipment = require('../models/topEquipments')

async function connection(){
    await mongoose.connect("mongodb://localhost:27017/Listings");

}

connection().then(()=>{
    console.log("Database connected");
})
// inserting gym related into db
// async function insertdata(){
//     let result = await DataSchema.insertMany(Initdata);
//     console.log(result);
// }

// insertdata();

async function insertdata(){
    let result = await Equipment.insertMany(TopEquipments);
    console.log(result);
}

insertdata();

// inserting top exercises in db

// async function insertingtop(){
//     let result = await Topexercise.insertMany(Topexercisedata);
//     console.log(result);
// }

// insertingtop();

