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
        console.log("things", userData)
        $scope.message = "User created with uid: " + userData.uid;
        $location.path("/userHome");
        $scope.logInNav = true;
      }).catch(function(error) {
        $scope.error = error;
      });
    };
      $scope.loginFbook = function() {
        // login with Facebook
        console.log("maybeworked?");
       
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
          console.log("Authentication failed:", error);
        });
      };
    }
]);