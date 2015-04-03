angular.module('gtw.services')
  .factory('Profile', [
    'StorageService',
    function(StorageService) {
      'use strict';

      var ProfileService = {},
        myProfile;

      ProfileService.init = function() {
        var emptyProfile = {
          money: 0,
          dictionary: []
        };

        myProfile = StorageService.get() || emptyProfile;
      };

      ProfileService.addMoney = function(money) {
        myProfile.money = myProfile.money + money;
        StorageService.save(myProfile);
      };

      ProfileService.addWord = function(word) {
        myProfile.dictionary.push(word);
        StorageService.save(myProfile);
      };

      ProfileService.getLanguage = function() {
        return myProfile.language;
      };

      ProfileService.getMoney = function() {
        return myProfile.money;
      };

      ProfileService.setLanguage = function(language) {
        myProfile.language = language;
        StorageService.save(myProfile);
      };

      return ProfileService;
    }
  ]);
