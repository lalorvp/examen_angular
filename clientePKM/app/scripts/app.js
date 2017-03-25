'use strict';

/**
 * @ngdoc overview
 * @name pokemonApp
 * @description
 * # pokemonApp
 *
 * Main module of the application.
 */
angular
  .module('pokemonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listado', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoCtrl',
        controllerAs: 'listado'
      })
      .when('/detalle/:id', {
        templateUrl: 'views/detalle.html',
        controller: 'DetalleCtrl',
        controllerAs: 'detalle'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix("");
  });
