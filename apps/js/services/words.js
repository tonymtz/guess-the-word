angular.module('hangman.services')
  .factory('WordsService', [
    'DICTIONARY_EN',
    function(DICTIONARY_EN) {
      'use strict';

      var wordsService = {},
        categories = [],
        category = 'ANIMALS';

      wordsService.getCategories = function() {
        if (!categories.length) {
          for (var category in DICTIONARY_EN) {
            categories.push(category);
          }
        }
        return categories;
      };

      wordsService.setCategory = function(userInput) {
        category = userInput;
      };

      wordsService.getWord = function() {
        var words = DICTIONARY_EN[category],
          index = Math.round(Math.random() * (words.length - 1));
        return words[index];
      };

      return wordsService;
    }
  ]);
