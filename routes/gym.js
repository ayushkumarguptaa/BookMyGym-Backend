const express= require('express')
const router = express.Router()
require('dotenv').config();
const wrapAsync = require('../utils/wrapAsync')
const ExpressError = require('../utils/ExpressError')
const DataModel = require('../models/Listing')
const topExercise = require('../models/topexercises')
const Equipment = require('../models/topEquipments')
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



    router.get('/', async(req, res)=>{
        let gyminfo = await DataModel.find({})
        let equipments = await Equipment.find({})
        let topexercises = await topExercise.find({})
        res.render('home.ejs', {topexercises, equipments, gyminfo});
        // res.send({topexercises, equipments, gyminfo});
    })

    // top exercises

    router.get('/top-exercises', async(req, res)=>{
        // res.send({datas: topexercises});
        const topexercises = await topExercise.find({});
        res.render('topexercises.ejs',{datas: topexercises})
    })
    // ALL LISTED GYMS
    router.get('/allgyms', async(req, res)=>{
        // req.flash("success", "Loggedin successful")
        let gyminfo = await DataModel.find({})
        // res.send({gyminfo})
        res.render('allgyms.ejs', {gyminfo})
    })

    // GYM DETAIL
    router.get('/allgyms/:id',async(req, res)=>{
        // res.send("done");
        let {id} = req.params;
        let fltrdata = await DataModel.findById(id);
        let response = await geocodingClient.forwardGeocode({
        query: fltrdata.city,
        limit:1 
        })
        .send();
        // console.log(fltrdata);
        // console.log(response.body.features[0].center);
        fltrdata.coordinate=response.body.features[0].center;
        res.render('details.ejs', {fltrdata});
    })






    module.exports = router;