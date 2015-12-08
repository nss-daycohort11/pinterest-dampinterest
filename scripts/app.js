var app = angular.module('pinterestApp', ['ngRoute', 'firebase']);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/userHome', {
        templateUrl: 'partials/userHome.html',
        controller: 'UserHomeCtrl',
        controllerAs: 'userHome'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function () {
      $rootScope.logInNav = false;
      if ($location.path() === "/") {
        $rootScope.logInNav = false;
      } else {
        $rootScope.logInNav = true;
      };

      // if ($location.path() !== '/') {
      //   $rootScope.logInNav = true;
      // }


    })
  })



