var am = angular.module('adm', ['ui.router', 'ui.bootstrap']);

am.run(function($rootScope, $state, $ws) {
	$rootScope.$on("$stateChangeSuccess", function(event, toState) {
		if (toState.name === 'main' && $ws.isLogin()) {
			$state.transitionTo("main.dash");
		}
	})

	$rootScope.$on("$stateChangeStart", function(event, toState) {
		if (toState.authenticate && !$ws.isLogin()) {
			$state.transitionTo("login");
			event.preventDefault();
		}

		if (!toState.authenticate && $ws.isLogin()) {
			$state.transitionTo("main.dash");
			event.preventDefault();
		}
	})
})

am.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'template/main.html',
			controller: 'MainCtrl',
			authenticate: true
		})

		.state('login', {
			url: '/login',
			templateUrl: 'template/login.html',
			controller: 'LoginCtrl',
			authenticate: false
		})

		.state('main.dash', {
			url: '/dash',
			views: {
				'content': {
					templateUrl: 'template/dash.html',
					controller: 'DashCtrl'
				}
			},
			authenticate: true
		})

		.state('main.car', {
			url: '/car',
			views: {
				'content': {
					templateUrl: 'template/car.html',
					controller: 'CarCtrl'
				}
			},
			authenticate: true
		})

		.state('main.promo', {
			url: '/promo',
			views: {
				'content': {
					templateUrl: 'template/promo.html',
					controller: 'PromoCtrl'
				}
			},
			authenticate: true
		})

		.state('main.show', {
			url: '/show',
			views: {
				'content': {
					templateUrl: 'template/show.html',
					controller: 'ShowCtrl'
				}
			},
			authenticate: true
		})

		.state('main.profil', {
			url: '/profil',
			views: {
				'content': {
					templateUrl: 'template/profil.html',
					controller: 'ProfilCtrl'
				}
			},
			authenticate: true
		})

		.state('main.akun', {
			url: '/akun',
			views: {
				'content': {
					templateUrl: 'template/akun.html',
					controller: 'AkunCtrl'
				}
			},
			authenticate: true
		})

		.state('main.sim', {
			url: '/sim',
			views: {
				'content': {
					templateUrl: 'template/sim.html',
					controller: 'SimCtrl'
				}
			},
			authenticate: true
		})

	$urlRouterProvider.otherwise('/main/dash');
})