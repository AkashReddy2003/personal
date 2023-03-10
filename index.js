const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
app.set("view engine", "ejs");
const https = require("https");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.listen(process.env.PORT||3000, function() {
  console.log("server is up and running at 3000")
});
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.get("/certification",function(req,res){
  res.sendFile(__dirname+"/cert.html")
})
app.get("/contact",function(req,res){
  res.sendFile(__dirname+"/contact.html")
})
