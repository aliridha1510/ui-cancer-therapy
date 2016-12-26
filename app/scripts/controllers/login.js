'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of therapyEvolutionApp
 */
angular.module('therapyEvolutionApp', [])
 
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
        $scope.submit = function () {
            $scope.dataLoading = true;
            AuthenticationService.submit($scope.user.email, $scope.user.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.user.email, $scope.user.password);
                    $location.path('/dashboard/tests');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);






  