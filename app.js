var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING //

animateApp.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'page-home.html',
		controller: 'mainCtrl'
	})

	.when('/articles', {
		templateUrl: 'page-articles.html',
		controller: 'articlesCtrl'
	})

	.when('/gallery', {
		templateUrl: 'page-gallery.html',
		controller: 'galleryCtrl'
	});

});

// CONTROLLERS //
animateApp.controller('mainCtrl', function($scope){
	$scope.pageClass = 'page-home';
});

animateApp.controller('articlesCtrl', function($scope){
	$scope.pageClass = 'page-articles';
});

animateApp.controller('galleryCtrl', function($scope){
	$scope.pageClass = 'page-gallery';
});