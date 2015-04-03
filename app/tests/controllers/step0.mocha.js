describe('Controller: Step0Controller', function () {
  'use strict';

  var $scope,
    $state,
    $rootScope,
    Step0Controller;

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

    // instantiating the controller
    Step0Controller = $controller('Step0Controller', {
      $scope: $scope,
      $state: $state,
      $rootScope: $rootScope
    });
  }));

  it('should define a goNext function', function () {
    $scope.goNext.should.be.a('function');
  });

  it('should set the userData.email property when calling the goNext function', function () {
    $scope.goNext('test@gmail.com');
    $rootScope.userData.email.should.equal('test@gmail.com');

    $scope.goNext('ANOTHERTEST@gmail.com');
    $rootScope.userData.email.should.equal('anothertest@gmail.com');
  });

  it('should call $state.transitionTo when calling the goNext function', function () {
    var transitionTo = sinon.spy($state, 'transitionTo');

    $scope.goNext('test@gmail.com');

    transitionTo.called.should.equal(true);
  });
});