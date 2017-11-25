var am = angular.module('am', ['ui.router', 'ngAnimate', 'ngMap', 'angular-timeline', 'ocNgRepeat']);

// am.run(function($rootScope) {
// 	$rootScope.$on('mapInitialized', function(evt,map) {
// 		$rootScope.map = map;
// 		$rootScope.apply();
// 	})
// })

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
			},
			authenticate: false
		})

		.state('car', {
			url: '/car',
			views: {
				'content': {
					templateUrl: 'template/car.html',
					controller: 'CarCtrl'
				}
			},
			authenticate: false
		})

		.state('contact', {
			url: '/contact',
			views: {
				'content': {
					templateUrl: 'template/contact.html',
					controller: 'ContactCtrl'
				}
			},
			authenticate: false
		})

		.state('sim', {
			url: '/sim',
			views: {
				'content': {
					templateUrl: 'template/sim.html',
					controller: 'SimCtrl'
				}
			},
			authenticate: false,
			params: {data: null}
		})

		.state('cardetail', {
			url: '/cardetail/:id',
			views: {
				'content': {
					templateUrl: 'template/cardetail.html',
					controller: 'CarDetCtrl'
				}
			},
			authenticate: false
		})

		.state('about', {
			url: '/about',
			views: {
				'content': {
					templateUrl: 'template/about.html',
					controller: 'AboutCtrl'
				}
			},
			authenticate: false
		})
})

am.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});