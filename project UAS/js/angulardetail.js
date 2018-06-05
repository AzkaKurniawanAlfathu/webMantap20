var app = angular.module("MyApp", ["ngRoute"]); 
  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "overview.htm"
    })
    .when("/overview", {
      templateUrl : "overview.htm"
    })
    .when("/techspecs", {
      templateUrl : "techspecs.htm"
    })
    .when("/downloads", {
      templateUrl : "downloads.htm",
    })
    .when("/support", {
      templateUrl : "support.htm"
    });
  });