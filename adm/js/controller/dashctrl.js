var jq = $.noConflict();

am.controller('DashCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.car = [];
		$scope.showroom = [];
		$scope.carTotal = {
			limit: 10,
			page: 0,
			all: 0,
			showroom: [],
			chart: {
				data: [],
				labels: []
			},
			sold: 0
		};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$ws.getCar(null, function(respon) {
			$scope.car = respon.data;
			$scope.order = 'id';
			$ws.getCarSum(null, function(respon) {
				respon.data.forEach(function(value) {
					$scope.carTotal.all += parseInt(value.total);
					$scope.carTotal.chart.labels.push(value.showroom);
					$scope.carTotal.chart.data.push(value.total);
				});
				$scope.carTotal.showroom = respon.data;
				$scope.carTotal.page = Math.ceil(respon.data.length / $scope.carTotal.limit) + 1;
				$ws.getCarSold(null, function(respon) {
					$scope.carTotal.sold = respon.data[0].total;
				}, error);
			}, error);
		}, error);
		
	}

	$scope.init();
})