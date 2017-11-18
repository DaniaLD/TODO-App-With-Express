'use strict';

let home =  (req, res) => {
    res.render('home');
};

let notFound = (req, res, next) => {
    res.status(404);
    res.render('404');
};

module.exports= {
    home,
    notFound
};