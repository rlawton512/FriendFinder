// var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
// var friendList = require("./friends")

// var app = express ();
// var PORT = 3030;

module.exports = function(app){
    
    app.get("/", function(req, res){

        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res){

        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}