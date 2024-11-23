var events =require('events')
var eventEmitter=new events.EventEmitter();

var connectionHandler= function connection(){
    console.log("connection successfully");

    eventEmitter.emit('data_received');
}
eventEmitter.on('Data received',function(){
    console.log("Connection Sucessfully");
});
eventEmitter.emit("connection");
console.log("Program Ended")