angular.module('hangman.directives')
  .directive('rating', function() {
    'use strict';

    return {
      restrict: 'EA',
      templateUrl: 'rating.html',
      scope: {
        ratingValue: '=ngModel',
        onRatingSelected: '&?'
      },
      link: function($scope) {
        function updateStars(num) {
          $scope.stars = [];
          for (var i = 0; i < num; i++) {
            $scope.stars.push({
              filled: i < $scope.ratingValue
            });
          }
        }

        $scope.$watch('ratingValue', updateStars);
      }
    };
  });
