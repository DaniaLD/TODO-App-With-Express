'use strict';
const mongoose    = require('mongoose');
const Task        = require('../models/task');

// Home
let home =  (req, res) => {
    Task.distinct('taskName', (err,data) => {
        if(err) {
            console.log("Can not read data from database !!! -> " + err)
        } else {
            console.log("Read data from database successfully ...");
            res.render('home', { tasks: data });
        }
    });
};

// 404
let notFound = (req, res, next) => {
    res.status(404);
    res.render('404');
};

let sendData = (req, res) => {
    let task = new Task();
    task.taskName = req.body.value;

    task.save( (err) => {
        if(err) {
            console.log("Item didn't save !!! -> " + err);
        } else {
            console.log("Item saved successfully ... -> " + task)
        }
    });

    res.redirect('/');
};

module.exports= {
    home,
    notFound,
    sendData,
};