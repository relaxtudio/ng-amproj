var am = angular.module('am', ['ui.router', 'ngAnimate', 'ngMap']);



am.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	// $locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix('');

	$stateProvider
		.state('base', {
			url: '/',
			views: {
				'content': {
					templateUrl: 'template/base.html',
					controller: 'BaseCtrl'
				}
			}
		})

		.state('car', {
			url: '/car',
			views: {
				'content': {
					templateUrl: 'template/car.html',
					controller: 'CarCtrl'
				}
			}
		})

		.state('contact', {
			url: '/contact',
			views: {
				'content': {
					templateUrl: 'template/contact.html',
					controller: 'ContactCtrl'
				}
			}
		})

		.state('sim', {
			url: '/sim',
			views: {
				'content': {
					templateUrl: 'template/sim.html',
					controller: 'SimCtrl'
				}
			}
		})
})