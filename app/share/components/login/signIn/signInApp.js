require('../../../services/loginService.js');
require('../../../services/userStorageService.js');

var app = angular.module('signInApp', ['loginServiceApp', 'userStorageServiceApp']);

app.directive('signInForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'signInView.html',
    controller: ['$scope','$window', 'loginService', 'userStorageService', function($scope, $window, loginService, userStorageService) {
      $scope.signInPassword = '';
      $scope.signInEmail = '';
      $scope.submitSignIn = function() {
        loginService.signIn({email: $scope.signInEmail, password: $scope.signInPassword}, function (res) {
          if(res.data.success) {
            userStorageService.set(res.data.user);
            $window.location.href = '/main';
          } else {
            $scope.signInPassword = '';
            $('#sign-in-email').addClass('wrong-login-credetians');
            $('#sign-in-password').addClass('wrong-login-credetians');
            $('#wrong-login-credetians-message').addClass('show-login-tooltip');
            $('#wrong-login-credetians-message').on("animationend", function() {
              $('#sign-in-email').removeClass('wrong-login-credetians');
              $('#sign-in-password').removeClass('wrong-login-credetians');
              $('#wrong-login-credetians-message').removeClass('show-login-tooltip');
            });
          }
        });
      };
    }]
  };
});
