var getApplicationData = function(config) {
  firebase.initializeApp(config);

  var database = firebase.database();
  firebase.auth().signInAnonymously();
  return firebase.database().ref().once('value').then(function(snapshot) {
    return snapshot.val();
  });
}
