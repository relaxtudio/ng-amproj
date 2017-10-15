am.controller('BaseCtrl', ['$scope', '$state', '$interval', function($scope, $state, $interval){
	$scope.init = function() {
		$scope.slides = [];
		$scope.currentIndex = 0;
		$scope.interval = 6000;
		$scope.slideShow();
	};

	$scope.cl = function(a) {
		console.log(a);
	};

	$scope.slideShow = function() {
		$scope.slides = [
			{ id: '1', name: 'image1', img: 'sample-1.jpg' },
			{ id: '2', name: 'image2', img: 'sample-2.jpg' },
			{ id: '3', name: 'image3', img: 'sample-3.jpg' },
		];
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

	$scope.scrollToTop = function($var) {
      $('html, body').animate({
          scrollTop: 0
      }, 'fast');
    };
}])