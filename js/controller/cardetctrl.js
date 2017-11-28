am.controller('CarDetCtrl', function($scope, $state, $stateParams, $ws, NgMap, $timeout) {
	$scope.init = function() {
		$scope.filter = {
			id: $stateParams.id
		};
		$scope.car = {};
		$scope.panolens = {
			status: false
		};
		$scope.initWs();
	};

	$scope.initWs = function() {
		$ws.getCar({filter: $scope.filter}, function(respon) {
			$scope.car = respon.data[0];
			$ws.getCarDetail({filter: $scope.filter}, function(respon) {
				$scope.car.detail = respon.data[0];
				console.log($scope.car.detail.dir_img);
				$timeout(function() {
					// $scope.interiorView();
				}, 500);
				$scope.initSlider();	
			}, error)
		}, error);
	};

	$scope.initSlider = function() {
		var car;
		$(function(){
			$scope.$car =  $('.car').ThreeSixty({
		        totalFrames: 30, // Total no. of image you have for 360 slider
		        endFrame: 30, // end frame for the auto spin animation
		        currentFrame: 1, // This the start frame for auto spin
		        imgList: '.threesixty_images', // selector for image list
		        progress: '.spinner', // selector to show the loading progress
		        imagePath:'assets/cars/' + $scope.car.detail.dir_img + '/ext/', // path of the image assets
		        filePrefix: '', // file prefix if any
		        ext: '.jpg', // extention for the assets
		        height: '465',
		        width: '100%',
		        navigation: false,
		        playSpeed: 150
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

	$scope.interiorView = function() {
		$timeout(function() {
			if (!$scope.panolens.status) {
				var panorama, viewer;

				container = document.querySelector('#interior');
				interior = interior;
				panorama = new PANOLENS.ImagePanorama('assets/cars/' + $scope.car.detail.dir_img + '/int/interior.jpg');

				viewer = new PANOLENS.Viewer( { container: container } );
				viewer.add( panorama );

				$scope.panolens.status = true;
			}
		}, 500)
	};

	$scope.loadMap = function() {
        NgMap.getMap().then(function(map){
            $scope.map = map;
            google.maps.event.trigger(map, "resize");
        })
    };

    $scope.simAs = function(call, param) {
    	$state.go(call, {data: param});
    };

    $scope.init();

})