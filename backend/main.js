const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const engine = require('ejs-mate')
const wrapAsync = require('./utils/wrapAsync')
const gymnastic = require('./routes/gym')
const user = require('./routes/user')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/clients')
const expressSession = require('express-session')
const flash = require('connect-flash')
const cors = require('cors')
const ExpressError = require('./utils/ExpressError')
// const payments = require('./routes/payments.routes')


    async function connectdb(){
        await mongoose.connect("mongodb://localhost:27017/Listings");
    }
    connectdb().then(()=>{
        console.log("databse connected!");
    })

    // 

    app.use(cors())
    app.use(expressSession({
        secret : "mynewsecret",
        resave : false,
        saveUninitialized : true,
        cookie: {
            expire : Date.now() + 7 * 24 * 60 * 60 * 1000,
            maxAge : 7 * 24 * 60 * 60 * 1000
        }}))

    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, '/views'))
    app.engine('ejs', engine)
    app.use(express.static(path.join(__dirname, '/public')))
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(flash())

    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()))
    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser())

    app.use((req, res, next)=>{
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error");
    res.locals.curUser = req.user;
    next();
})
// 
    app.use('/gymnastic/user', user);
    
    app.use('/gymnastic', gymnastic)
    

    app.get('/', (req, res)=>{
        res.send("i am root");
    })

// app.all('*', (req, res, next)=>{
//     next(new ExpressError(404, "Page not found!!"));
// })

app.use((err, req, res, next)=>{
    let {status = 404, message = "Something Went Wrong"} = err;
    res.render('error.ejs', {err});
    res.status(status).send(message);
})




app.listen(8080, ()=>{
    console.log("Server is listen on port 8080!");
})