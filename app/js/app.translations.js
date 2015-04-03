angular.module('gtw').config([
  '$translateProvider',
  function($translateProvider) {
    'use strict';

    $translateProvider.translations('en', {
      'GUESS_THE_WORD': 'Guess the word',
      'NEXT': 'Next',
      'DISCOVER': 'Discover',
      'RUSH': 'Rush',
      'SETTINGS': 'Settings',
      'HELP': 'Help',
      'STORE': 'Store',

      'PAUSE': 'Pause',
      'BACK_TO_MENU': 'Back to menu',
      'YOU_WIN': 'GOOD JOB!',
      'YOU_LOSE': 'You Lose!',
      'NEXT_WORD': 'Next word',
      'TRY_AGAIN': 'Try again'
    });

    $translateProvider.translations('es', {
      'GUESS_THE_WORD': 'Busca Palabras',
      'NEXT': 'Siguiente',
      'DISCOVER': 'Descubre',
      'RUSH': 'Carrera',
      'SETTINGS': 'Ajustes',
      'HELP': 'Ayuda',
      'STORE': 'Tienda',

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