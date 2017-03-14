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
var user=new Object();
  user.resul_final=true;
 $scope.user = {};

 
 
 $scope.logConsole = function () {
    console.log("Value is : " + $scope.user);
    console.log("Type is : " + typeof $scope.user); //Always displays 'string'
};

 
 
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
