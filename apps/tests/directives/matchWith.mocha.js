describe('Directive: matchWith', function() {
  var $scope,
    signupForm;

  beforeEach(module('huddy-signup.directives'));

  beforeEach(inject(function ($rootScope, $compile) {
    $scope = $rootScope;

    element = '<form name="signup">';
    element += '<input name="confirmation" data-match-with="password" data-ng-model="confirmation">';
    element += '<input name="password" id="password" data-ng-model="password">';
    element += '</form>';

    element = $compile(element)($scope);
    $scope.$digest();

    signupForm = $scope.signup;
  }));

  it('should validate that the passwords match', function () {
    
    // passwords don't match
    $scope.password = 'password';
    signupForm.confirmation.$setViewValue('confirmation');
    signupForm.confirmation.$valid.should.equal(false);

    // passwords do match
    $scope.password = 'confirmation';
    signupForm.confirmation.$setViewValue('confirmation');
    signupForm.confirmation.$valid.should.equal(true);
  });
});