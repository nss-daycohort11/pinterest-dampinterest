var app = angular.module("Pinterest", ["angular.filter", "firebase", "ngRoute"]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/add', {
        templateUrl: 'partials/song-form.html',
        controller: 'SongFormCtrl'
      }).
      when('/songs/details/:songId', {
      	templateUrl: "partials/song-detail.html",
      	controller: "SongDetailCtrl"
      })
      .otherwise('/songs/list');
  }]);