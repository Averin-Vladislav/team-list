var app = angular.module('taskSettingsApp', []);

app.directive('taskSettings', function() {
  return {
    restrict: 'E',
    templateUrl: 'taskSettingsView.html',
    controller: (['$scope', function($scope) {
      $scope.subTasks = [{title: 'fuck'}, {title: 'fuck'}, {title: 'fuck'}, {title: 'fuck'}]
    }])
  };
});
