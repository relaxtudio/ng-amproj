am.controller('SimCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.brand = [];
		$scope.brandSelect = {};
		$scope.car = {
			list: [],
			listFilter: [],
			select: {}
		};
		$scope.sim = {
			c_harga: 0,
			c_dp: 0,
			bunga_thn: 0,
			jenis_as: '',
			thn_as: 0,
			thnmobil: 0
		}
		$scope.initWs();
	};

	$scope.initWs = function() {
		$ws.getBrand(null, function(respon) {
			$scope.brand = respon.data;
			$ws.getCar(null, function(respon) {
				$scope.car.list = respon.data;
				console.log($scope.car.list);
			}, error);
		}, error);
	};

	$scope.selectBrand = function() {
		$scope.car.listFilter = [];
		for (i in $scope.car.list) {
			if ($scope.car.list[i].brand_id == $scope.brandSelect.id) {
				$scope.car.listFilter.push($scope.car.list[i]);
			}
		}
	};

	$scope.test = function(data) {
		console.log(data);
	};

	$scope.init();
})