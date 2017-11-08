am.controller('CarCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.car = [];
		$scope.filter = {
			limit: 10,
			page: 1
		};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$ws.getCar({filter: $scope.filter}, function(respon) {
			$scope.car = respon.data;
		})
	}

	$scope.init();
})