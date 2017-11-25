var error = function(respon) {
	console.log(respon);
}

am.controller('BaseCtrl', function($scope, $state, $interval, $ws){
	$scope.init = function() {
		$scope.slides = [];
		$scope.brand = [];
		$scope.car = [];
		$scope.slides = [];
		$scope.filter = {
			limit: 8,
			page: 1,
			maxpage: 1
		};
		$scope.filterPromo = {
			active: 'Y'
		};
		$scope.slides = [];
		$scope.currentIndex = 0;
		$scope.interval = 6000;
		$scope.initWs();
	};

	$scope.initWs = function() {
		$ws.getPromo({filter: $scope.filterPromo}, function(respon) {
			$scope.slides = respon.data;
		}, error);
		$ws.getBrand(null, function(respon) {
			$scope.brand = respon.data;
		}, error);
		$ws.getCar({filter: $scope.filter}, function(respon) {
			$scope.car = respon.data;
			$scope.responSlider();
		}, error);
	};

	$scope.cl = function(a) {
		console.log(a);
	};

	$scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
	
	$scope.$on('$viewContentLoaded', function() {
		$scope.init();
		$interval($scope.nextSlide, $scope.interval);
		window.scrollTo(0, 0);
	});

	$scope.responSlider = function() {
		var owl;
		$(function(){
			owl = $('.owl-carousel').owlCarousel({
				loop: true,
				responsiveClass: false,
				autoplay: true,
				responsive:{
			        0:{
			            items:1,
			            nav:false
			        },
			        500:{
			            items:2,
			            nav:false
			        },
			        700:{
			        	items:3,
			        	nav: false
			        },
			        1000:{
			            items:4,
			            nav: false
			        }
			    }
			});
		});
	}

	$scope.scrollToTop = function() {
      window.scrollTo(0, 0);
    };

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