const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*
Todo.remove({}).then((result) => {
	console.log(result);
});


Todo.findOneAndRemove({
	_id: ''
}).then((todo) => {
	console.log('Removed', todo);
});
*/

Todo.findByIdAndRemove("598cb653d2d585128c4ba1e7").then((todo) => {
	console.log(todo);
});

/*
User.findById(id).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log('User by Id', user);
}).catch((e) => console.log(e));
*/