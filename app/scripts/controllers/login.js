'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of therapyEvolutionApp
 */
angular.module('therapyEvolutionApp')

  .controller('LoginCtrl', function($scope, $location,$http) {
    /// user is vide in scope//
 $scope.user = {};
 // var user=new Object();
  //     user.email="ali@ali.ali"
 //     user.password="ali";
    $scope.submit = function() {
      /// Model //user.email="ali@ali.de";
      
       

/// vorteil :
      $http.post("http://localhost:8082/cte/authenticate",$scope.user)
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





