'use strict';
/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
    .module('carApp', [
        'ngRoute',
        'restangular',
        'rzModule'
    ])
    .config(function ($routeProvider, RestangularProvider, $locationProvider, API_ENDPOINT) {
        $locationProvider.hashPrefix('');
        RestangularProvider.setBaseUrl(API_ENDPOINT.url);
        $routeProvider
            .when('/', {
                templateUrl: 'index.html',
                controller: 'AppCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function ($rootScope, $location, $route) {
        $rootScope.$on('$routeChangeStart', function (event, next, prev) {
        });
    });