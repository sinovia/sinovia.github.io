var portfolio = angular.module("portfolio", ['ngRoute']);


portfolio.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'portfolioController'
    })
      // .when('/contact, {
      //   templateUrl: 'templates/contact.html',
      //   controller: 'portfolioController'
      //   })
      .otherwise({
        redirectTo: "/home"

    });
});
