describe('Controller: Signup', function() {
  'use strict';

  var $scope,
    $translate,
    $state,
    $rootScope,
    SignupController;

  // starting the app
  beforeEach(module('huddy-signup'));

  beforeEach(inject(function($controller) {

    // mocking dependencies
    $scope = {};
    $rootScope = {
      userData: {}
    };
    $translate = {
      use: function() {
      }
    };
    $state = {
      transitionTo: function() {
      }
    };

    // instantiating the controller
    SignupController = $controller('SignupController', {
      $scope: $scope,
      $translate: $translate,
      $state: $state,
      $rootScope: $rootScope
    });
  }));

  it('should define a changeLanguage function', function() {
    $scope.changeLanguage.should.be.a('function');
  });

  it('should define a checkValidData function', function() {
    $scope.checkValidData.should.be.a('function');
  });

  it('should call the $translate.use function when the changeLanguage function is called', function() {
    var use = sinon.spy($translate, 'use');

    $scope.changeLanguage('ES');

    use.called.should.equal(true);
  });

  it('should call the $state.transitionTo function when the checkValidData function is called', function() {
    var transition = sinon.spy($state, 'transitionTo');

    $rootScope.userData.email = 'test@gmail.com';
    $scope.checkValidData();

    transition.called.should.equal(false);

    delete $rootScope.userData.email;
    $scope.checkValidData();

    transition.called.should.equal(true);
  });
});