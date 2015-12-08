angular
	.module('pinterestApp')
  .controller('UserHomeCtrl', ["$scope", "Auth", "$firebaseArray", "getUid",
  	function($scope, Auth, $firebaseArray, getUid) {
  		var uid = getUid.getUid();
  		var ref = new Firebase("https://dampinterest.firebaseio.com/pins/");

  		$scope.pins = $firebaseArray(ref);
  		$scope.createdPin = {};

  		$scope.newPin = function() {
  			$scope.pins.$add({
  				picURL: $scope.createdPin.picURL,
  				picInfo: $scope.createdPin.picInfo,
  				creator: uid
  			})
  				console.log("uid", uid);
  		}
		}
  ]);