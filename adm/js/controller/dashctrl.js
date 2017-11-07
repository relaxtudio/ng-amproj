var jq = $.noConflict();

am.controller('DashCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.car = [];
		$scope.carTotal = {
			all: 0,
			showroom: []
		};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$scope.getCar();
		$scope.getCarSum();
		$scope.initPie();
	}

	$scope.initPie = function() {
		
	}
	
	$scope.getCar = function(data) {
		$ws.getCar(data, function(respon) {
			$scope.car = respon.data;
		}, null);
	}

	$scope.getCarSum = function(data) {
		$ws.getCarSum(data, function(respon) {
			for (i in respon.data) {
				$scope.carTotal.all += parseInt(respon.data[i].total);
			}
			$scope.carTotal.showroom = respon.data;
		}, function(responError) {
			console.log('error', responError)
		});
	}



	$scope.init();
})