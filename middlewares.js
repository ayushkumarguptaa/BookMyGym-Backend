

module.exports.IsLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        return res.redirect('/gymnastic/user/login');
    }
    next()
}

module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        req.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}