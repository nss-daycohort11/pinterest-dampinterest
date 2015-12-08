angular.module('pinterestApp')
  .controller('MainCtrl', ["$scope", "Auth", "$location", "getUid",
  
  function($scope, Auth, $location, getUid) {
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
        getUid.addUid(userData.uid);
        console.log("getUid.addUid(userData.uid)", getUid.addUid(userData.uid));
        $location.path("/userHome");
        $scope.logInNav = true;
        var ref = new Firebase("https://dampinterest.firebaseio.com/users/" + userData.uid);
        ref.set({picUrl:"",
          bio: "blank",
          name: "no name",
          email: $scope.email,
          pins: false});
      }).catch(function(error) {
        $scope.error = error;
      });
    };

    $scope.loginUser = function() {
      $scope.message = null;
      $scope.error = null;
      console.log('running login');
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
              getUid.addUid(authData.uid);
              $location.path("/userHome");
              $scope.logInNav = true;
              $scope.$apply();
            }
          });    
    };


      // $scope.loginFbook = function() {
      //   console.log("maybeworked?");
      //   var ref = new Firebase("https://dampinterest.firebaseio.com");
      //   var authData = ref.getAuth();
      //   console.log("authdata: ", authData);

      //   if(authData === null) {
      //     ref.authWithOAuthPopup("facebook", function(error, authData) {
      //       if (error) {
      //         console.log("Login Failed!", error);
      //       } else {
      //         console.log("authenticated", authData);
      //         ref.child("users/" + authData.uid).set({
      //           picUrl: "",
      //           bio: "blank",
      //           name: "no name",
      //           email: authData
      //         });
      //   } else {
      //     ref.child("users/" + authData.uid).set(authData);
      //   }
      //     });
      //   }
      // };

    //     // Auth.$authWithOAuthPopup("facebook").then(function(authData) {
    //     //   console.log("Logged in as:", authData.uid);
    //     // }).catch(function(error) {
    //     //   console.log("Authentication failed:", error);
    //     // });

  }
]);