var app = angular.module("MyApp", ["ngRoute"]); 
  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "product.htm"
    })
    .when("/product", {
      templateUrl : "product.htm"
    })
    .when("/sparepart", {
      templateUrl : "sparepart.htm"
    })
    .when("/laptop", {
      templateUrl : "laptop.htm",
    })
    .when("/accessories", {
      templateUrl : "accessories.htm"
    });
  });