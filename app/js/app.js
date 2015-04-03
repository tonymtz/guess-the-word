angular.module('gtw.controllers', []);

angular.module('gtw.directives', []);

angular.module('gtw.services', []);

angular.module('gtw', [
  'gtw.controllers',
  'gtw.directives',
  'gtw.services',
  'ui.router',
  'pascalprecht.translate',
  'ngStorage'
]);
