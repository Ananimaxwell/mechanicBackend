const express= require('express');
const app=express();
const PORT=4000;

//New import
const http=require('http').Server(app);
const cors=require('cors');

app.use(cors())

//Import Socket.io
const socketIO=require('socket.io')(http.{
	cors:{
		origin: "http://localhost:3000"
	}
});

socketIO.on('connection',(socket)=>{
	console.log(`heyMan: ${socket.id} user just connected!`);
	socket.on('disconnect',()=>{
		console.log('sorryMan: A user disconnected');
	});
});


app.get('/api',(req,res)=>{
	res.json({
		message:'Hello word',
	});
});

app.listen(PORT,()=>{
	console.log(`Sever listening on ${PORT}`);
});