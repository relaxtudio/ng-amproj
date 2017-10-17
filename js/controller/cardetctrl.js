am.controller('CardetCtrl', ['$scope', '$state', 'NgMap', function($scope, $state, NgMap){
	$scope.initSlider = function() {
		var car;
		$(function(){
			$scope.$car =  $('.car').ThreeSixty({
		        totalFrames: 52, // Total no. of image you have for 360 slider
		        endFrame: 52, // end frame for the auto spin animation
		        currentFrame: 1, // This the start frame for auto spin
		        imgList: '.threesixty_images', // selector for image list
		        progress: '.spinner', // selector to show the loading progress
		        imagePath:'assets/ext/civic-2017/', // path of the image assets
		        filePrefix: '', // file prefix if any
		        ext: '.png', // extention for the assets
		        height: '315',
		        width: '100%',
		        navigation: false
		    });
			
			$scope.$custom_previous = $('.custom_previous').bind('click', function(e) {
		      $scope.$car.previous();
		    });

			$scope.$custom_next = $('.custom_next').bind('click', function(e) {
		      $scope.$car.next();
		    });
			
			$scope.$custom_play = $('.custom_play').bind('click', function(e) {
		      $scope.$car.play();
		    });

			$scope.$custom_stop = $('.custom_stop').bind('click', function(e) {
		      $scope.$car.stop();
		    });

		});
	};
	$scope.initSlider();

	$scope.interiorView = function() {
		var panorama, viewer;
		$scope.interior = interior;
		$scope.panorama = new PANOLENS.ImagePanorama( 'assets/int/civic-interior.jpg' );

		$scope.viewer = new PANOLENS.Viewer( { container: document.querySelector('#interior') } );
		$scope.viewer.add( $scope.panorama );		
	}
	$scope.interiorView();

	$scope.loadMap = function(){
		NgMap.getMap();
	}

}])