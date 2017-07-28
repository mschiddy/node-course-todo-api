const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');

	//db.collection('Todos').findOneAndUpdate(filter, update, options, callback/Promise);
	/*db.collection('Todos').findOneAndUpdate({ //(filter)
		_id: new ObjectId("597a2075b1eef93b2128e07b")
	}, { 
	//google mongoDB update operators (update)
		$set: {
			completed: true
		}
	}, {
		//(options)
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});*/

	//inside users collection, update name on record, then use increment operator to add one to age (see mongodb docs)
	db.collection('Users').findOneAndUpdate({ //(filter)
		_id: new ObjectId("5979597a34127e182051098a")
	}, { 
	//google mongoDB update operators (update)
		$set: {
			name: 'Chiddy'
		},
		$inc: {
			age: 1
		}
	}, {
		//(options)
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});	

	//db.close();
});