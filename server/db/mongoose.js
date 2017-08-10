var mongoose = require('mongoose');

var appUri = "mongodb://mdbuser2:dib450@ds055574.mlab.com:55574/todoapp";

var promise = mongoose.connect(appUri || "mongodb://localhost:27017/TodoApp", {
	useMongoClient: true,
});

module.exports = {mongoose};