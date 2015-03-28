angular.module('hangman').config([
  '$stateProvider',
  function($stateProvider) {
    'use strict';

    $stateProvider
      .state({
        name: 'home',
        url: '',
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .state({
        name: 'play',
        url: '/play',
        templateUrl: 'play.html',
        controller: 'PlayController'
      });
  }
]);
