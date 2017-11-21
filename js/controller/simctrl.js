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
		for (i in $scope.car.list) {
			if ($scope.car.list[i].brand_id == $scope.brandSelect.id) {
				$scope.car.listFilter.push($scope.car.list[i]);
			}
		}
	};

	$scope.selectCar = function(data) {
		$scope.sim.param.c_harga = parseInt(data.harga);
		$scope.sim.param.thnmobil = parseInt(data.tahun);
		$scope.sim.result = false;
		console.log(data);
	};

	$scope.submitSim = function(form) {
		if ($scope.sim.param.c_harga > 0 && form.$valid) {
			// var tahun = [1, 2, 3, 4];
			// tahun.forEach(function(value) {
			// 	var object = "tahun" + value;
			// 	console.log(object);
			// 	$scope.sim.param.bunga_thn = value.toString();
			// 	if (value < 5) {
			// 		$ws.calcSim($scope.sim.param, function(respon) {
			// 			$scope.sim[object] = respon.data;
			// 			$scope.sim[object].total = parseFloat(respon.data.prepayment.dp) + parseFloat(respon.data.prepayment.angsuran) + parseFloat(respon.data.prepayment.crdtpro) + parseFloat(respon.data.prepayment.aspolis) + parseFloat(respon.data.prepayment.fiducia);
			// 			console.log($scope.sim);
			// 		}, error);
			// 	} else {

			// 	}
			// })
			$scope.sim.param.bunga_thn = 1;
			$ws.calcSim($scope.sim.param, function(respon) {
				$scope.sim.tahun1 = respon.data;
				$scope.sim.tahun1.total = parseFloat(respon.data.prepayment.dp) + parseFloat(respon.data.prepayment.angsuran) + parseFloat(respon.data.prepayment.crdtpro) + parseFloat(respon.data.prepayment.aspolis) + parseFloat(respon.data.prepayment.fiducia);
				$scope.sim.param.bunga_thn = 2;
				$ws.calcSim($scope.sim.param, function(respon) {
					$scope.sim.tahun2 = respon.data;
					$scope.sim.tahun2.total = parseFloat(respon.data.prepayment.dp) + parseFloat(respon.data.prepayment.angsuran) + parseFloat(respon.data.prepayment.crdtpro) + parseFloat(respon.data.prepayment.aspolis) + parseFloat(respon.data.prepayment.fiducia);
					$scope.sim.param.bunga_thn = 3;
					$ws.calcSim($scope.sim.param, function(respon) {
						$scope.sim.tahun3 = respon.data;
						$scope.sim.tahun3.total = parseFloat(respon.data.prepayment.dp) + parseFloat(respon.data.prepayment.angsuran) + parseFloat(respon.data.prepayment.crdtpro) + parseFloat(respon.data.prepayment.aspolis) + parseFloat(respon.data.prepayment.fiducia);
						$scope.sim.param.bunga_thn = 4;
						$ws.calcSim($scope.sim.param, function(respon) {
							$scope.sim.tahun4 = respon.data;
							$scope.sim.tahun4.total = parseFloat(respon.data.prepayment.dp) + parseFloat(respon.data.prepayment.angsuran) + parseFloat(respon.data.prepayment.crdtpro) + parseFloat(respon.data.prepayment.aspolis) + parseFloat(respon.data.prepayment.fiducia);
							console.log($scope.sim)
							$scope.sim.result = true;
							$scope.sim.param.bunga_thn = 5;
							$ws.calcSim($scope.sim.param, function(respon) {
								$scope.sim.tahun5 = respon.data;
								$scope.sim.tahun5.total = parseFloat(respon.data.prepayment.dp) + parseFloat(respon.data.prepayment.angsuran) + parseFloat(respon.data.prepayment.crdtpro) + parseFloat(respon.data.prepayment.aspolis) + parseFloat(respon.data.prepayment.fiducia);
								$scope.sim.result = true;
								console.log($scope.sim)
								$scope.sim.param.bunga_thn = 6;
								$ws.calcSim($scope.sim.param, function(respon) {
									$scope.sim.tahun6 = respon.data;
									$scope.sim.tahun6.total = parseFloat(respon.data.prepayment.dp) + parseFloat(respon.data.prepayment.angsuran) + parseFloat(respon.data.prepayment.crdtpro) + parseFloat(respon.data.prepayment.aspolis) + parseFloat(respon.data.prepayment.fiducia);
									console.log($scope.sim);
									$scope.sim.result = true;
								}, error);
							}, error);
						}, error);
					}, error);	
				}, error);
			}, error);
		}
	};

	$scope.test = function(data) {
		console.log(data);
	};

	$scope.init();
})