angular
	.module('pinterestApp')
  .controller('NavBarCtrl', ["$scope", "Auth", "$location", "$rootScope",
  	function($scope, Auth, $location, $rootScope) {
  		console.log("nav barrrr")
  		console.log("locationPath", $location.path());
  		// if ($location.path() === "/") {
  		// 	$rootScope.logInNav = false;
  		// } else {
  		// 	// $scope.logInNav = true;
  		// };
  	}
  ]);