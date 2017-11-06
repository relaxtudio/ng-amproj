am.controller('CarCtrl', ['$scope', '$state', '$ws', function($scope, $state, $ws) {
	var error = function() {
		console.log('error');
	}

	$scope.init = function() {
		$scope.carTotal = {
			limit: 10,
			page: 0,
			all: 0,
			showroom: []
		};
		$scope.filter = {
			limit: $scope.carTotal.limit,
			page: 1
		};
		$scope.current = {
			page: 1
		};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$scope.$parent.getCarSum(null, $scope, $scope.carTotal.limit);
		$scope.getCar({filter: $scope.filter});
	}

	$scope.getCar = function(data) {
		$ws.getCar(data, function(respon) {
			$scope.car = respon.data;
		}, error);
	}

	$scope.distCar = function(data) {
		$scope.filter.page = data;
		$scope.getCar({filter: $scope.filter});
		$scope.current.page = data;
	}

	$scope.init();
}])