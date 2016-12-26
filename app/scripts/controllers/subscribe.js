'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of therapyEvolutionApp
 */
angular.module('therapyEvolutionApp')
  .controller('SubscribeCtrl', function($scope, $location,$http) {
    /// user is vide in scope//
 $scope.user = {};
    $scope.submit = function() {
    	/// Model //user.email="ali@ali.de";
    	
        //var user=new Object();
       
    	

/// vorteil :
    	$http.post("http://localhost:8082/cte/save",$scope.user)
   .then(
       function(response){
         // success callback
               $location.path('/dashboard');

       }, 
       function(response){
         // failure callback

       }
    );




    }

  });
