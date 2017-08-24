// require path module 
var path = require("path");

//set up module export to be used in server.js
module.exports = function(app){
    
    //tells what to display when user visits certain links 
    app.get("/", function(req, res){
        
        //gets the home page from the directory     
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //gets the survey page from the directory
    app.get("/survey", function(req, res){

        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}