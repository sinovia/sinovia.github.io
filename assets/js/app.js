var portfolioApp = angular.module("portfolioApp", ['ngRoute']);


portfolioApp.config(function($routeProvider) {
  $routeProvider
  //Consumer View Routes
    .when('/home', {
      templateUrl: 'templates/home.html',
      // controller: 'ReportController'
    })

    .when('/contact', {
      templateUrl: 'templates/contact.html',
      // controller: 'ReportController'
    })

    .when('/aboutme', {
      templateUrl: 'templates/aboutme.html',
      // controller: 'ReportController'
    })

    .when('/work', {
      templateUrl: 'templates/work.html',
      // controller: 'ReportController'
    })


      .otherwise({
        redirectTo: "/home"

    });
});
