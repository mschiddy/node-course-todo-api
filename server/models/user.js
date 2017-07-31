var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 5
	}
});

/*var user = new User({
	email: 'q@123.com'
});

user.save().then((doc) => {
	console.log('Saved user', doc);
}, (e) => {
	console.log('Unable to save user', e);
});*/

module.exports = {User};

