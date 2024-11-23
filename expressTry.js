var express=require("express");
var app=express();
const port=4800;

app.get("/",(request,respond)=>{
	respond.send("Hello guys")
})

app.listen(port)
console.log("App running on",{port})     