describe('Directive: focus', function() {
  var $scope,
    signupForm;

  beforeEach(module('huddy-signup.directives'));

  beforeEach(inject(function($rootScope, $compile, _$timeout_) {
    $scope = $rootScope;
    $timeout = _$timeout_;

    element = '<form name="signup">';
    element += '<input name="password" id="password" data-ng-model="password" focus>';
    element += '</form>';

    element = $compile(element)($scope);
    $scope.$digest();
  }));

  it('should validate that the "password" element has the focus', function() {
    var input = element.find('input'),
      focusMethod = sinon.spy(input[0], 'focus');
    $timeout.flush();
    focusMethod.called.should.equal(true);
  });
});
