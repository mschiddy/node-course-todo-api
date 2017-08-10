var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mdbuser2:todoapp||mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};