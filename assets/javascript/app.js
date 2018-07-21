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

      database.ref().push({
        TrainName: tempTrainName,
        Destination: tempDestination,
        Time: tempTime,
        Frequency: tempFrequency



      }

      


  }