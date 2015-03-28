angular.module('hangman').controller('HomeController', [
  '$scope',
  '$rootScope',
  '$state',
  'WordsService',
  function($scope, $rootScope, $state, WordsService) {
    'use strict';

    $scope.initialize = function() {
      this.categories = WordsService.getCategories();
    };

    $scope.setCategory = function(userInput) {
      WordsService.setCategory(userInput);
      $state.transitionTo('play');
    };

    $scope.currentColor = 0;
    $scope.colors = ['red', 'blue', 'yellow', 'green'];

    $scope.color = function() {
      if ($scope.currentColor >= $scope.colors.length) {
        $scope.currentColor = 0;
      }
      return $scope.colors[$scope.currentColor++];
    };
  }]);
