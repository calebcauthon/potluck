var firebase_app = function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-_HY6R03VFD90vPjiVpGDGNCzYTxZu8k",
    authDomain: "potluckfood-e.firebaseapp.com",
    databaseURL: "https://potluckfood-e.firebaseio.com",
    projectId: "potluckfood-e",
    storageBucket: "",
    messagingSenderId: "722653097613"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  firebase.auth().signInAnonymously();
  firebase.database().ref().once('value').then(function(snapshot) {
    var data = snapshot.val();
    startApplication(data.grains, data.veggies, data.beans, data.sauces);
  });
}();