module.exports.insertRegistro = function(db, callback){
	let collection = db.collection("users")
	console.log('CRUD: ');
	console.log(callback);
	/*collection.insert(callback, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });*/
	collection.insertMany([{}
		], (error, result) => {
			console.log("Insert result: " + result.toString())
		}
	)
	collection.insert(callback);
}

module.exports.deleteRegistro = function(db, callback){
	let collection = db.collection("users")
	try{
		collection.deleteOne({edad: 40})
		console.log("The value has been deleted successfully!")
	}catch(e){
		console.log("An error occurred: " + e)
	}
}

module.exports.requestAndUpdating = function(db, callback){
	let collection = db.collection("users")

	collection.find().toArray((error, documents) =>{
		if(error)console.log(error)
		console.log(documents)
		callback()
	})

	try{
		collection.updateOne({nombre: "David Haller"}, {$set: {edad: 25}})
		console.log("The value has ben updated successfully!")
	}catch(e){
		console.log("Value update error: " + e)
	}

	collection.find().toArray((error, documents) =>{
		if(error)console.log(error)
		console.log(documents)
		callback()
	})

}