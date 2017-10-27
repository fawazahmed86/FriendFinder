var path = require("path");

var friendsList = require("../data/friends.js")

module.exports = function(app){
  
  app.get("/api/friends", function(req, res){
    res.json(friendsList)
  });
  
  app.post("/api/friends", function(req, res){
    var surveyInput = req.body;

    var surveyResult = surveyInput.scores;

    var friendMatch = "";
    var friendDifference = 50;
    var totalDifference = 0;
  
    for(i = 0; i < friendsList.length; i++){
      totalDifference = 0;
      
      for(j = 0; j < surveyResult.length; j++){
      totalDifference += Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(surveyResult[j]))
      }
  
      if(totalDifference < friendDifference){
        friendDifference = totalDifference;
        friendMatch = friendsList[i].name;
      }
    }
  
    friendsList.push(surveyInput)
  
    res.json({status: "Okay", friendMatch: friendMatch});
  });
}
