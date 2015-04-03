angular.module('gtw.controllers').controller('LanguageController', [
  '$scope',
  '$rootScope',
  '$state',
  '$translate',
  'Profile',
  function($scope, $rootScope, $state, $translate, Profile) {
    'use strict';

    $scope.initialize = function() {
      $scope.language = 'en';
    };

    $scope.$watch('language', function(value) {
      if (value) {
        $translate.use(value);
      }
    });

    $scope.goHome = function() {
      Profile.setLanguage($scope.language);
      $state.transitionTo('home');
    };
  }]);
