angular.module('therapyEvolutionApp')
  .controller('LangCtrl',function ($scope, $translate) {
    $scope.changeLange =function (lang) {
      $translate.use(lang).then(function (data) {
        console.log('SUCCESS -> ' + data);
      }, function (error) {
        console.log('ERROR -> ' + error);
      });

    }
  });
