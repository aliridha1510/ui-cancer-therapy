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
    'angular-steps'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

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

  });
