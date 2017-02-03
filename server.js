var express = require("express");
var app = express();
var AppFacade = require("./src/appFacade");

var facade = new AppFacade();

//Authentication
app.get("login",function(req,res)
{

});


app.post("logout",function(req,res)
{

});


app.post("signup",function(req,res)
{

});


app.post("removeuser",function(req,res)
{

});

//Incident
app.post("callforhelp",function(req,res)
{

});


app.post("reportlapse",function(req,res)
{

});


app.post("reportescape",function(req,res)
{

});

//Charts
app.get("chart",function(req,res)
{

});



app.listen(5454,function(){
	console.log("RBS Started on Port 5454");
});
