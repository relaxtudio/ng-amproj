var jq = $.noConflict();

am.controller('DashCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.car = [];
		$scope.carTotal = {
			limit: 10,
			page: 0,
			all: 0,
			showroom: []
		};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$scope.getCar();
		$scope.$parent.getCarSum(null, $scope, $scope.carTotal.limit);
		$scope.initPie();
	}

	$scope.initPie = function() {
		
	}
	
	$scope.getCar = function(data) {
		$ws.getCar(data, function(respon) {
			$scope.car = respon.data;
			$scope.order = 'id';
		}, null);
	}

	$scope.init();
})