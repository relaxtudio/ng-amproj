var am = angular.module('am', ['ui.router', 'ngAnimate']);

am.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('');
	
	$urlRouterProvider.otherwise('/');

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