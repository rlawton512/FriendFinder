// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");
var friendList = require("./friends")

// var app = express ();
// var PORT = 3030;

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: "application/vnd.api+json"}));

module.exports = function(app){
    app.get("/api/friends", function(req, res){

        res.json(friendList);
    });

    app.post("/api/friends", function(req, res){
        var newFriend = (req.body);
        var newScores = newFriend.scores

        friendList.push(newFriend)
        
        res.json(newFriend)

    })
}

// app.listen(PORT, function(){
//     console.log("App is listening on PORT:" + PORT);
// })