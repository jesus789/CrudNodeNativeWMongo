var http=require('http');
var path=require('path');
var express=require('express');
var bodyparser=require('body-parser');
var rounting=require('./rutas.js');

const app=express();
server=http.createServer(app);

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/server',rounting);

server.listen(8090,function(){
	console.log('Servidor esta levantado en el puerto 8090');
});


