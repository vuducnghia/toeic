(function () {
   'use strict'
   angular.module('appToeic', ['ui.router'])
      .config(function ($stateProvider, $locationProvider) {
         $stateProvider
            .state('home', {
               url: '/',
               templateUrl: 'app/home/home.pug',
               controller: 'HomeController'
            });
         $locationProvider.html5Mode(true);
      })
})()