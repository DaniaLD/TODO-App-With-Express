'use strict';
const mongoose    = require('mongoose');
const Task        = require('../models/task');

// Home
let home =  (req, res) => {
    res.render('home');
};

// 404
let notFound = (req, res, next) => {
    res.status(404);
    res.render('404');
};

let sendData = (req, res) => {
    let task = new Task();
    task.taskName = req.body.value;

    task.save();

    console.log(task);
    res.redirect('/');
};

module.exports= {
    home,
    notFound,
    sendData,
};