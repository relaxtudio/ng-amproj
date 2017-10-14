var am = angular.module('am', ['ui.router', 'ngAnimate', 'ngMap', 'angular-timeline']);



am.config(function($locationProvider, $stateProvider, $urlRouterProvider, $qProvider) {
	$qProvider.errorOnUnhandledRejections(false);
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

		.state('cardetail', {
			url: '/cardetail',
			views: {
				'content': {
					templateUrl: 'template/cardetail.html',
					controller: 'CardetCtrl'
				}
			}
		})

		.state('about', {
			url: '/about',
			views: {
				'content': {
					templateUrl: 'template/about.html',
					controller: 'AboutCtrl'
				}
			}
		})
})