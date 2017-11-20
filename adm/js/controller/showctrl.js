am.controller('ShowCtrl', function($scope, $state, $ws, NgMap) {
	$scope.init = function() {
		$scope.locations = [];
		$scope.newLoc = {};
		$scope.map = {};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$ws.getMap(null, function(respon) {
			$scope.locations = respon.data;
			$scope.map = {
				lat: $scope.locations[0].lat,
				lng: $scope.locations[0].lng,
				zoom: 11,
				location: []
			}
			$scope.newLoc = {
				lat: $scope.locations[0].lat,
				lng: $scope.locations[0].lng
			}
			$scope.$parent.loading = false;
		}, error);
	}

	$scope.get = function(event) {
		$scope.newLoc.lat = event.latLng.lat();
		$scope.newLoc.lng = event.latLng.lng();
	}

	$scope.addShowroom = function(form) {
		var token = $scope.$parent.user.token;
		if (form.$valid) {
			$scope.$parent.loading = true;
			$ws.addMap({token: token, data: $scope.newLoc}, function(respon) {
				console.log(respon.data);
				$scope.init();
			}, error);
		}
	}

	$scope.delShowroom = function(data) {
		var token = $scope.$parent.user.token;
		$scope.$parent.loading = true;
		$ws.delMap({token: token, data: data}, function(respon) {
			console.log(respon.data);
			$scope.init();
		}, error);
	}

	$scope.placeMarker = function(){
		console.log(this.getPlace());
        var newLoc = this.getPlace().geometry.location;
        $scope.newLoc.lat = newLoc.lat();
        $scope.newLoc.lng = newLoc.lng();
        
    };

	$scope.init();
})