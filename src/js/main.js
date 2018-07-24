'use strict';
var serviseApp = angular.module('serviceApp', ["ngRoute", "chart.js"])
    .config( ['$routeProvider',  function($routeProvider) {
    	//$locationProvider.html5Mode(true);
        $routeProvider
	        .when('/',
	        {
	            templateUrl:'/views/main.html',
	        })
	        .when('/orders',
	        {
	            templateUrl:'/views/orders.html',
	        })
	        .when('/order-detail',
	        {
	            templateUrl:'/views/order-detail.html',
	        })
	        .when('/spares',
	        {
	            templateUrl:'/views/spares.html',
	        })
	        .when('/services',
	        {
	        	templateUrl: '/views/services.html',
	        })
	        .when('/arrivalSpares',
	        {
	        	templateUrl: '/views/arrival-spares.html',
	        })
	        .when('/clients',
	        {
	        	templateUrl: '/views/clients.html',
	        })
	        .when('/cars',
	        {
	        	templateUrl: '/views/cars.html',
	        })
	        .when('/cashbox',
	        {
	            templateUrl:'./views/cashbox.html',
	        })
	        .when('/reports',
	        {
	            templateUrl:'/views/reports.html',
	        })
	        .when('/settings',
	        {
	            templateUrl:'/views/settings.html',
	        })
	
	}]);

