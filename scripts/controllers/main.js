angular.module('pinterestApp')
  .controller('MainCtrl', ["$scope", "Auth", "$location",
  
  function($scope, Auth, $location) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;
      console.log('running');
      Auth.$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
        var ref = new Firebase("https://dampinterest.firebaseio.com/users/" + userData.uid);
        ref.set({picUrl:"",
          bio: "blank",
          name: "no name",
          email: $scope.email,
          pins: false});
          $location.path("/userHome");
      }).catch(function(error) {
        $scope.error = error;
      });
    };
    $scope.loginUser = function() {
      $scope.message = null;
      $scope.error = null;
      console.log('running');
      $location.path("/userHome");
      var ref = new Firebase("https://dampinterest.firebaseio.com");
          ref.authWithPassword({
            email    : $scope.email,
            password : $scope.password
          }, function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
              $scope.error = "Login Failed: " + error + ".";
            } else {
              console.log("Authenticated successfully with payload:", authData);
              $scope.message = "Authenticated successfully: " + authData + ".";
            }
          });    
    };
  }
]);