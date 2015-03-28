angular.module('hangman').controller('PlayController', [
  '$scope',
  '$rootScope',
  '$state',
  'WordsService',
  '$interval',
  function($scope, $rootScope, $state, WordsService, $interval) {
    'use strict';

    var alphabet = 'abcdefghijklmnopqrstuvwxyz',
      timer;

    $scope.initialize = function() {
      var that = this;

      this.currentWord = WordsService.getWord();

      this.hidden = this.currentWord.split('').map(function(char) {
        return {char: char, hidden: true};
      });

      $scope.keys = [];
      var i = alphabet.length;
      while (i--) {
        $scope.keys.unshift({char: alphabet[i], status: 0});
      }

      this.usedChars = [];
      this.chances = 5;
      this.gameover = false;
      this.win = false;
      this.countDown = 30;

      $interval.cancel(timer);

      timer = $interval(function() {
        if (that.pause || --that.countDown) {
          return;
        }
        that.teardown();
      }, 1000);
    };

    $scope.teardown = function() {
      $scope.gameover = true;
      $interval.cancel(timer);
      $scope.showHiddenWord();
    };

    $scope.togglePause = function() {
      if (!$scope.gameover) {
        $scope.pause = !$scope.pause;
      }
    };

    $scope.showHiddenWord = function() {
      this.hidden.forEach(function(item) {
        item.hidden = false;
      });
    };

    $scope.digest = function(key) {
      if ($scope.gameover) {
        return;
      }

      var input = key.char;

      var used = $scope.usedChars.some(function(char) {
        return char === input;
      });

      if (used) {
        return;
      } else {
        $scope.usedChars.push(input);
      }

      var found = false;

      $scope.hidden.forEach(function(item) {
        if (item.char === input) {
          item.hidden = false;
          found = true;
        }
      });

      if (found) {
        key.status = 1;
      } else {
        if (!--$scope.chances) {
          $scope.teardown();
        }
        key.status = 2;
        return;
      }

      var hiddenLeft = $scope.hidden.some(function(item) {
        return item.hidden;
      });

      if (!hiddenLeft) {
        $scope.gameover = true;
        $scope.win = true;
        $scope.teardown();
      }
    };

    $scope.$watch('userInput', function(value) {
      if (value) {
        $scope.check(value);
        $scope.userInput = '';
      }
    });
  }]);
