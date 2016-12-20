'use strict';

/**
 * @ngdoc overview
 * @name therapyEvolutionApp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('therapyEvolutionApp', [
    'ui.router',
    'ngAnimate',
    'angular-steps',
    'pascalprecht.translate'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
      .state('login', {
        url: '/login',
        parent: 'base',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('subscribe', {
        url: '/subscribe',
        parent: 'base',
        templateUrl: 'views/subscribe.html',
        controller: 'SubscribeCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        parent: 'base',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('overview', {
        url: '/overview',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html'
      })
      .state('reports', {
        url: '/reports',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/reports.html'
      })
      .state('tests', {
        url: '/tests',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/tests.html'
      });

  }).config(function($translateProvider) {
  var languages = ['en', 'de'];
  $translateProvider.preferredLanguage('de');
  var navigator = window.navigator;
  var lang = navigatorlanguages ? navigator.languages[0] : null;
  lang = navigator.language || navigator.browserLanguage;
  lang = lang || navigator.language || navigator.userLanguage;

  if (lang.indexOf('-') !== -1) {
    lang = lang.split('-')[0];
  }
  if (lang.indexOf('_') !== -1) {
    lang = lang.split('_')[0]
  }
  if (languages.indexOf(lang) !== -1) {
    console.log(lang + ' exist use ' + lang);
    $translateProvider.preferredLanguage(lang);
  }


  $translateProvider.translations('en', {
    'button.login': 'Login',
    'button.subscribe': 'Subscribe'
  });

  $translateProvider.translations('de', {
    'button.login': 'Anmeldung',
    'button.subscribe': 'Abonnieren'

  });


}).directive('langDirective', function () {
  return {
    restrict: 'EA',
    controller: 'LangCtrl',
    templateUrl: 'views/lang.html'
  };
});
