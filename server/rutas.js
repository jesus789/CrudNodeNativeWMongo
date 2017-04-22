const router=require('express').Router();
var operaciones=require('./crud.js');
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost/alumnos"


/*router.get('/',function(req,res){
	console.log('llamanda prinsipal');
	console.log(res);
	res.status(err.status || 500);
	res.json({
	  message: err.message,
	  error: err
	});
});*/
router.post('/agregar',function(req,res){
	console.log('agreganndo....');
	MongoClient.connect(url, function(err, db){
		if (err)console.log(err)
		console.log("Connection successful")		
			operaciones.insertRegistro(db, (error, result) =>{
			if(error)console.log("Error trying to insert: " + error)
		})
	//var db = req.db;
    /*let collection = db.collection("users")
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
*/


	})
});

module.exports=router;