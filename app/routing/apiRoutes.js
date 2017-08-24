// set variable to require friends.js
var friendList = require("./friends")


//set up module export to be used in server.js
module.exports = function(app){
   
    //Code to display data when the api link is clicked on the html page 
    app.get("/api/friends", function(req, res){

        res.json(friendList);
    });

    //Code to store data to the friends list when new survey information is entered 
    app.post("/api/friends", function(req, res){
        var newFriend = (req.body);
        var newScores = newFriend.scores

        friendList.push(newFriend)
        
        res.json(newFriend)

    })
}
