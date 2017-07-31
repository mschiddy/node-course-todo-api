var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 3,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false	
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};

/*var newestTodo = new Todo({
	text: 'Mop floors',
	completed: true,
	completedAt: 10
});

newestTodo.save().then((doc) => {
	console.log('Saved todo', doc);
}, (e) => {
	console.log('Unable to save todo')
});*/