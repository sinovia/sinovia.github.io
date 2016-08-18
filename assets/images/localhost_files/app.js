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

    .when('/about', {
      templateUrl: 'templates/aboutme.html',
      // controller: 'ReportController'
    })

    .when('/resume', {
      templateUrl: 'templates/aboutme.html',
      // controller: 'ReportController'
    })

    .when('/testimonials', {
      templateUrl: 'templates/testimonials.html',
      // controller: 'ReportController'
    })

    .when('/portfolio', {
      templateUrl: 'templates/portfolio.html',
      // controller: 'ReportController'
    })


      .otherwise({
        redirectTo: "/home"

    });
});
