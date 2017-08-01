const {ObjectID} = require('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
//const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '597ba3d809509d1e985d84ba';
/*var id = '597fd0e823cfd130d8fba6d6';

if (!ObjectID.isValid(id)){
	console.log('ID not valid');
}

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('Id not found');
	}
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e));
*/

User.findById(id).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log('User by Id', user);
}).catch((e) => console.log(e));