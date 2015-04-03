angular.module('gtw').run([
  '$rootScope',
  'Profile',
  '$localStorage',
  '$translate',
  function($rootScope, Profile, $localStorage, $translate) {
    'use strict';

    Profile.init();
    $translate.use(Profile.getLanguage());
    console.log($localStorage.profile);
  }
]);
