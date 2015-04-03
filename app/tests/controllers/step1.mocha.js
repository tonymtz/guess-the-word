describe('Controller: Step1Controller', function () {
  'use strict';

  var $scope,
    $state,
    $rootScope,
    Step1Controller,
    transitionTo;

  // starting the app
  beforeEach(module('huddy-signup'));

  beforeEach(inject(function ($controller) {

    // mocking dependencies
    $scope = {};
    $rootScope = {
      userData: {}
    };
    $state = {
      transitionTo: function () {
      }
    };
    transitionTo = sinon.spy($state, 'transitionTo');

    // instantiating the controller
    Step1Controller = $controller('Step1Controller', {
      $scope: $scope,
      $state: $state,
      $rootScope: $rootScope
    });
  }));

  it('should define a goNext function', function () {
    $scope.goNext.should.be.a('function');
  });

  it('should define a goPrev function', function () {
    $scope.goPrev.should.be.a('function');
  });

  it('should set the userData when calling the goNext function', function () {
    $scope.goNext('password', 'confirmation');
    $rootScope.userData.password.should.equal('password');
    $rootScope.userData.confirmation.should.equal('confirmation');
  });

  it('should call $state.transitionTo when calling the goNext function', function () {
    $scope.goNext('test@gmail.com');

    transitionTo.called.should.equal(true);
  });

  it('should call $state.transitionTo when calling the goPrev function', function () {
    $scope.goPrev('test@gmail.com');

    transitionTo.called.should.equal(true);
  });
});