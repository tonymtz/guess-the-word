angular.module('gtw.controllers').controller('HomeController', [
  '$scope',
  '$state',
  'Profile',
  function($scope, $state, Profile) {
    'use strict';

    $scope.initialize = function() {
      $scope.money = Profile.getMoney();
    };

    $scope.goTo = function(state) {
      $state.transitionTo(state);
    };
  }]);
