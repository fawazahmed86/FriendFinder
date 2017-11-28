// var path = require("path");
//friendsList changed to friendsInfo

var friendsList = require("../data/friends.js")

module.exports = function(app){
  
  app.get("/api/friends", function(req, res){
    res.json(friendsInfo)
  });
  
  app.post("/api/friends", function(req, res){
    // var myData = req.body;
    console.log(req.body);
    console.log(friendsList);
    var myData = req.body;


    var surveyResult = myData.scores;

    var friendMatch = "";
    var friendImage = "";
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
        friendImage = friendsList[i].photo;
      }
    }
  
    friendsList.push(myData)
  
    res.json({status: "Okay", friendMatch: friendMatch, friendImage: friendImage});
  });
}
