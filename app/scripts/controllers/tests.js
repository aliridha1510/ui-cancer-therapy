'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of therapyEvolutionApp
 */
angular.module('therapyEvolutionApp')
  .controller('TestCtrl', function($scope, $location,$http) {

  
 $scope.user = {};
 
    $scope.submit = function() {
      

      
 
      $http.post("http://localhost:8082/cte/savetest",$scope.user)
   .then(
       function(response){
         // success callback
               $location.path('/dashboard/tests');

       }, 
       function(response){
         // failure callback

       }
    );




    }

  });
