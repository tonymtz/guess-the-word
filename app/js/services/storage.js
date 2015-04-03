angular.module('gtw.services')
  .factory('StorageService', [
    '$localStorage',
    function($localStorage) {
      'use strict';

      var storageService = {};

      storageService.save = function(profile) {
        $localStorage.profile = profile;
      };

      storageService.get = function() {
        return $localStorage.profile;
      };

      return storageService;
    }
  ]);
