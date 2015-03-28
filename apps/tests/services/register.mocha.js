describe('Service: RegisterService', function() {
  'use strict';

  var $q,
    $http,
    $httpBackend,
    RegisterService,
    API_ROUTES;

  /* Starting the App */
  beforeEach(module('huddy-signup'));

  beforeEach(inject(function(_$q_, _$http_, _$httpBackend_, _RegisterService_, _API_ROUTES_) {
    /* Mocking dependencies */
    $httpBackend = _$httpBackend_;
    $q = _$q_;
    API_ROUTES = _API_ROUTES_;

    /* Instantiating service */
    RegisterService = _RegisterService_;
  }));

  describe('#register method', function() {
    var formData = {
      email: 'test@test.com',
      password: 'password'
    };

    beforeEach(function() {
      $httpBackend.expectGET('signup.html').respond(200, '');
      $httpBackend.expectGET('signup.step-0.html').respond(200, '');
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
      $httpBackend.resetExpectations();
    });

    it('should call $http.post and send given input', function() {
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(200);

      RegisterService.register(formData);
      $httpBackend.flush();
    });

    it('should retry two times more if failure', function() {
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400);
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400);
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400, {
        errors: {
          email: ['The email has already been taken.']
        }
      });

      var promise = RegisterService.register(formData);

      $httpBackend.flush();

      promise.catch(function(response) {
        expect(response).to.deep.equal({"errors": {"email": ["The email has already been taken."]}});
      });
    });

    it('should retry once if failure when @retries param is given', function() {
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400);
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400);

      RegisterService.register(formData, 1);

      $httpBackend.flush();
    });

    it('should stop retrying when failure with data', function() {
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400);
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400, {
        errors: {
          email: ['The email has already been taken.']
        }
      });

      var promise = RegisterService.register(formData);

      $httpBackend.flush();

      promise.catch(function(response) {
        expect(response).to.deep.equal({"errors": {"email": ["The email has already been taken."]}});
      });
    });

    it('should stop retrying when success', function() {
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(400);
      $httpBackend.expectPOST(API_ROUTES.REGISTER, formData).respond(200, {
        message: 'some message'
      });

      var promise = RegisterService.register(formData);

      $httpBackend.flush();

      promise.then(function(response) {
        expect(response).to.deep.equal({message: 'some message'});
      });
    });
  });
});
