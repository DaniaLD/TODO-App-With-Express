'use strict';
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

let TaskSchema = new Schema({
    taskName: { type: String }
});

module.exports = mongoose.model('Task', TaskSchema);