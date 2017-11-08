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
			param: {
				c_harga: 0,
				c_dp: 0,
				bunga_thn: 0,
				jenis_as: '',
				thn_as: 0,
				thnmobil: 0
			},
			result: null
		};
		$scope.stats = {
			param: $state.params.data
		};
		console.log($scope.stats.param)
		$scope.initWs();
	};

	$scope.initWs = function() {
		if (!$scope.stats.param) {
			$ws.getBrand(null, function(respon) {
				$scope.brand = respon.data;
				$ws.getCar(null, function(respon) {
					$scope.car.list = respon.data;
				}, error);
			}, error);	
		} else {
			$scope.car.select = $state.params.data;
			$scope.sim.param.c_harga = parseInt($scope.stats.param.harga);
			$scope.sim.param.thnmobil = parseInt($scope.stats.param.tahun);
		}
	};

	$scope.selectBrand = function() {
		$scope.car.listFilter = [];
		for (i in $scope.car.list) {
			if ($scope.car.list[i].brand_id == $scope.brandSelect.id) {
				$scope.car.listFilter.push($scope.car.list[i]);
			}
		}
	};

	$scope.selectCar = function(data) {
		$scope.sim.param.c_harga = parseInt(data.harga);
		$scope.sim.param.thnmobil = parseInt(data.tahun);
		console.log(data);
	};

	$scope.submitSim = function(form) {
		if ($scope.sim.param.c_harga > 0 && form.$valid) {
			$ws.calcSim($scope.sim.param, function(respon) {
				console.log(respon.data);
				$scope.sim.result = respon.data;
			}, error);
		}
	};

	$scope.test = function(data) {
		console.log(data);
	};

	$scope.init();
})