require('./userStorageService');

var app = angular.module('loginServiceApp', ['userStorageServiceApp']);

app.service('loginService', ['$http', '$window', 'userStorageService', function($http, $window, userStorageService) {
    
    this.signUp = function(authData, successCallback) {
        $http.post('/signUp', authData).then(successCallback);
    };

    this.signIn = function(authData, successCallback) {
        $http.post('/signIn', authData).then(successCallback);
    };

    this.signOut = function(successCallback) {
        $http.get('/logout').then(successCallback);
    };

    this.processLoginResults = function(res) {
        if(res.data.success) {
          userStorageService.set(res.data.user);
          $window.location.href = '/main';
        } else {
          showWrongCredetiansAlert();
        }
    };

    function showWrongCredetiansAlert() {
        $('#sign-in-password-group input').val('');
        $('#sign-in-email-group').addClass('wrong-login-credetians');
        $('#sign-in-password-group').addClass('wrong-login-credetians');
        $('#wrong-login-credetians-message').addClass('show-login-tooltip');
        $('#wrong-login-credetians-message').on("animationend", function() {
          $('#sign-in-email-group').removeClass('wrong-login-credetians');
          $('#sign-in-password-group').removeClass('wrong-login-credetians');
          $('#wrong-login-credetians-message').removeClass('show-login-tooltip');
        });
    }
}]);
