var nextTrain = "";
var nextTrainFormatted = "";
var minutesAway = "";
var timeConversion = "";
var currentTime = "";
var diffTime = "";
var tRemain = "";
var minsTillTrain = "";
var key = "";
var getKey = "";
var minsTillTrain = "";

var config = {
    apiKey: "AIzaSyDiwJaKWgughh_TS280A9AET2tPNBwd1cY",
    authDomain: "project-1-69c3d.firebaseapp.com",
    databaseURL: "https://project-1-69c3d.firebaseio.com",
    projectId: "project-1-69c3d",
    storageBucket: "project-1-69c3d.appspot.com",
    messagingSenderId: "960427425592"
  };
 
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-train-btn").on("click",function(){
      event.preventDefault();

      var tempTrainName = $("#train-name-input").val();
      var tempDestination = $("#destination-input").val();
      var tempTime = $("#time-input").val();
      var tempFrequency = $("#frequency-input").val();
      
      timeConversion = moment(tempTime, "hh:mm").subtract(1,"years");
      currentTime = moment();
      diffTime = moment().diff(moment(timeConversion), "minutes");
      tRemain = diffTime % tempFrequency;
      minsTillTrain = tempFrequency - tRemain;
      nextTrain = moment().add(minsTillTrain, "minutes");
      nextTrainFormatted = moment(nextTrain).format("hh:mm");

      key = database.ref().push({
        TrainName: tempTrainName,
        Destination: tempDestination,
        Time: tempTime,
        Frequency: tempFrequency,
        nextTrainFormatted: nextTrainFormatted,
        minsTillTrain: minsTillTrain,
    });

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#time-input").val("");
    $("#frequency-input").val("");

      


  })

  database.ref().on("child_added",function(snapshot,prevChildKey){

    var mostRecentAdd = snapshot.val();

    var previousAdd = prevChildKey;

        var row = $("<tr>");
        var newEntry1 = $('<th scope="col">' + mostRecentAdd.TrainName +  '</th>');
        var newEntry2 = $('<th scope="col">' + mostRecentAdd.Destination +  '</th>');
        var newEntry3 = $('<th scope="col">' + mostRecentAdd.Frequency +  '</th>');
        var newEntry4 = $('<th scope="col">' + mostRecentAdd.nextTrainFormatted + '</th>');
        var newEntry5 = $('<th scope="col">' + mostRecentAdd.minsTillTrain + '</th>');

        row.append(newEntry1);
        row.append(newEntry2);
        row.append(newEntry3);
        row.append(newEntry4);
        row.append(newEntry5);
        $("tbody").append(row);


  })