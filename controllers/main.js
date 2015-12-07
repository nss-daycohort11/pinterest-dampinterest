'use strict';

/**
 * @ngdoc function
 * @name pinterestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pinterestApp
 */
angular.module('pinterestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
