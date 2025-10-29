const express = require('express')
const router = express.Router()
const Clients = require('../models/clients')
const {IsLoggedIn, saveRedirectUrl} = require('../middlewares')
const Passport = require('passport');
const wrapAsync = require('../utils/wrapAsync');

router.get('/signup', (req, res)=>{
    res.render('signup.ejs');
    })

    router.post('/signup', async(req, res)=>{
        const {username, email, password} = req.body;
        let newUser = new Clients({username, email});
        let regUser = await Clients.register(newUser, password);
        console.log(newUser);
        req.login(regUser, (err)=>{
            if(err) return next(err);
        })
        req.flash("success", "signup success");
        res.redirect('/gymnastic');
        // console.log(username);

    })

    router.get('/login', (req, res)=>{
        res.render('login.ejs');
    })

    router.post('/login',saveRedirectUrl, Passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), async(req, res)=>{
        // req.flash("success", "Welcome to Wanderlust!");
        res.redirect(res.locals.redirectUrl || "/gymnastic");
    })

router.get('/book', (req, res)=>{
    // res.send("hello");
    res.render('book.ejs');
})

module.exports=router;