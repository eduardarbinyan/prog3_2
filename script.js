var express  = require("express");
const { ppid } = require("process");
var app = express();

app.get("/",function(req,res){
    res.send("Hello world")
})
app.get("/search/:search",function(req,res){
    let search = req.params.search;
    res.redirect("https://google.com/search?q=" + search)
})
app.get("/google",function(req,res){
    res.redirect("https://google.com")
})
app.get("/name/:name/", function(req,res){
    let name = req.params.name
    res.send(name)

})
app.get("/*", function(req,res){
    res.send("Error 404")
})

app.listen(3000, function(){
    console.log("running on localhost:3000");
})