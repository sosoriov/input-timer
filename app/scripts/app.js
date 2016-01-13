'use strict';

/**
 * @ngdoc overview
 * @name inputTimerApp
 * @description
 * # inputTimerApp
 *
 * Main module of the application.
 */
angular
  .module('inputTimerApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
