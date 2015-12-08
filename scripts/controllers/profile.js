angular
	.module('pinterestApp')
  .controller('ProfileCtrl', ["$scope", "Auth", "$firebaseArray", "getUid",
  	function($scope, Auth, $firebaseArray, getUid) {
  		var uid = getUid.getUid();
  		var ref = new Firebase("https://dampinterest.firebaseio.com/pins/");
      var boardRef = new Firebase("https://dampinterest.firebaseio.com/boards");

  		$scope.pins = $firebaseArray(ref);
      $scope.boards = $firebaseArray(boardRef);
  		$scope.createdPin = {};

      $scope.$watch(function() {

      })

  		$scope.newPin = function() {

  			$scope.pins.$add({
  				picURL: $scope.createdPin.picURL,
  				picInfo: $scope.createdPin.picInfo,
  				creator: uid,
          board: $scope.selectedBoard.name
  			})
  				console.log("uid", uid);
          $scope.createdPin.picURL = null;
          $scope.createdPin.picInfo = null;
  		}

      $scope.newBoard = function() {
        $scope.boards.$add({
          name: $scope.createdBoard.name
        })
        $scope.createdBoard.name = null;
      }
    }

  ]);