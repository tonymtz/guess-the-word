describe('Controller: Step2Controller', function() {
  'use strict';

  var $scope,
    $state,
    $rootScope,
    $window,
    $httpBackend,
    $q,
    Step2Controller,
    transitionTo,
    locationTo,
    RegisterServiceStub;

  // starting the app
  beforeEach(module('huddy-signup'));

  beforeEach(inject(function($controller, _$rootScope_, _$httpBackend_, _$q_) {

    // mocking dependencies
    $scope = { $watch: function() {} };
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    $state = { transitionTo: function() {} };
    $window = {
      location: { replace: function() {} }
    };
    RegisterServiceStub = {
      register: sinon.stub()
    };

    transitionTo = sinon.spy($state, 'transitionTo');
    locationTo = sinon.spy($window.location, 'replace');

    // instantiating the controller
    Step2Controller = $controller('Step2Controller', {
      $scope: $scope,
      $state: $state,
      $rootScope: $rootScope,
      $window: $window,
      RegisterService: RegisterServiceStub
    });
  }));

  /* TODO - Change karma config to avoid this */
  beforeEach(function() {
    $httpBackend.expectGET('signup.html').respond(200, '');
    $httpBackend.expectGET('signup.step-0.html').respond(200, '');
  });

  it('should define a goPrev function', function() {
    $scope.goPrev.should.be.a('function');
  });

  it('should call $state.transitionTo when calling the goPrev function', function() {
    $scope.goPrev('test@gmail.com');

    transitionTo.called.should.equal(true);
  });

  it('should redirect to login url when calling the goLogin function', function() {
    $scope.goLogin();

    locationTo.called.should.equal(true);
  });

  describe('#saveData', function() {
    var deferred;

    beforeEach(function() {
      deferred = $q.defer();
      RegisterServiceStub.register.returns(deferred.promise);

      expect($scope.status.success).to.be.not.ok();
      expect($scope.status.loading).to.be.not.ok();
      expect($scope.status.error).to.be.not.ok();
    });

    it('on success', function() {
      $scope.saveData();

      deferred.resolve({user: {email: 'test@test.com', id: 8}});

      $rootScope.$apply();

      expect($scope.status.success).to.be.true();
      expect($scope.status.loading).to.be.false();
      expect($scope.status.error).to.be.not.ok();
    });

    it('on failure without response should not save error message', function() {
      $scope.saveData();

      deferred.reject();

      $rootScope.$apply();

      expect($scope.status.success).to.be.false();
      expect($scope.status.loading).to.be.false();
      expect($scope.status.error).to.be.empty();
    });

    it('on failure with response should save the error message', function() {
      $scope.saveData();

      deferred.reject({"errors": {"email": ["The email has already been taken."]}});

      $rootScope.$apply();

      expect($scope.status.success).to.be.false();
      expect($scope.status.loading).to.be.false();
      expect($scope.status.error).to.be.deep.equal({"email": ["The email has already been taken."]});
    });
  });
});
