angular.module('gtw').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
      .state({
        name: 'demo',
        url: '/demo',
        templateUrl: 'demo.html'
      })
      .state({
        name: 'home',
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .state({
        name: 'language',
        url: '/language',
        templateUrl: 'language.html',
        controller: 'LanguageController'
      })
      .state({
        name: 'discover',
        url: '/discover',
        templateUrl: 'discover.html',
        controller: 'DiscoverController'
      })
      .state({
        name: 'rush',
        url: '/rush',
        templateUrl: 'rush.html',
        controller: 'RushController'
      })
// -=
      .state({
        name: 'play',
        url: '/play',
        templateUrl: 'play.html',
        controller: 'PlayController'
      });

    $urlRouterProvider.otherwise('/');
  }
]);
