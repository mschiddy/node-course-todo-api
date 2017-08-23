const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	/*db.collection('Todos').deleteMany({text: 'Fly a kite'}).then((result) => {
		console.log(result);
	});*/

	//deleteOne
	/*db.collection('Todos').deleteOne({text: 'Fly a kite'}).then((result) => {
		console.log(result);
	});*/
	
	//findOneAndDelete
	/*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	console.log(result);
	});*/

	
	/*db.collection('Users').deleteMany({name: 'Bob'}).then((result) => {
		console.log(result);
	});*/

	db.collection('Users').findOneAndDelete({_id: 
		new ObjectID('597a192d04156a042cdba560')
	}).then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});
	

	//db.close();
});