angular.module('hangman.services')
  .factory('WordsService', [
    'DICTIONARY',
    function(DICTIONARY) {
      'use strict';

      var wordsService = {},
        categories = [],
        category = 'ANIMALS';

      wordsService.getCategories = function() {
        if (!categories.length) {
          for (var category in DICTIONARY) {
            categories.push(category);
          }
        }
        return categories;
      };

      wordsService.setCategory = function(userInput) {
        category = userInput;
      };

      wordsService.getWord = function() {
        var words = DICTIONARY[category],
          index = Math.round(Math.random() * (words.length - 1));
        return words[index];
      };

      return wordsService;
    }
  ]);
