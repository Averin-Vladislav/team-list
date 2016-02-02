require('../../../node_modules/angular-local-storage/dist/angular-local-storage.min.js');

var app = angular.module('userStorageServiceApp', ['LocalStorageModule']);

app.service('userStorageService', ['$http', 'localStorageService', function($http, localStorageService) {
  
  this.set = function(newUser) {
    localStorageService.set('user', newUser);
  };

  this.get = function() {
    return localStorageService.get('user');
 };

 this.addList = function(id, title) {
   user = localStorageService.get('user');
   if(user) {
     user.lists.push({title: title, id: id, tasks: []});
   }
   localStorageService.set('user', user);
 };

 this.deleteList = function(id) {
   user = localStorageService.get('user');
   if(user) {
     user.lists.splice(user.lists.map(function(list) {
       return list.id;
     }).indexOf(id), 1);
     localStorageService.set('user', user);
   }
 };

}]);
