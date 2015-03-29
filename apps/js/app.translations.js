angular.module('hangman').config([
  '$translateProvider',
  function($translateProvider) {
    'use strict';

    $translateProvider.translations('en', {
      'CATEGORIES': 'Categories',
      'PAUSE': 'Pause',
      'BACK_TO_MENU': 'Back to menu',
      'YOU_WIN': 'GOOD JOB!',
      'YOU_LOSE': 'You Lose!',
      'NEXT_WORD': 'Next word',
      'TRY_AGAIN': 'Try again'
    });

    $translateProvider.preferredLanguage('en');
  }
]);