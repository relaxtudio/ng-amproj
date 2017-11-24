am.controller('CarCtrl', function($scope, $state, $ws, $uibModal, $uibModalStack, $timeout) {
	var error = function(respon) {
		console.log('error', respon);
	}

	$scope.init = function() {
		$scope.$parent.loading = false;
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
		$scope.modalMobil = {
			currentTab: 'dt-mobil'
		};
		$scope.editMobil = {
			currentTab: 'dt-mobil'
		};
		$scope.deleteMobil = {
			currentTab: 'dt-mobil'
		};
		$scope.soldMobil = {
			currentTab: 'dt-mobil'
		};
		$scope.brand = [];
		$scope.model = [];
		$scope.showroom = [];
		$scope.trans = [];
		$scope.newCar = {
			add: {add_by: $scope.$parent.user.id},
			detail: {add_by: $scope.$parent.user.id},
			preview: '',
			exterior: [],
			interior: ''
		};
		$scope.initWs();
	}

	$scope.log = function(data) {
		console.log(data);
	}

	$scope.initWs = function() {
		$scope.$parent.getCarSum(null, $scope, $scope.carTotal.limit);
		$ws.getBrand(null, function(respon) {
			$scope.brand = respon.data;
			$ws.getModel(null, function(respon) {
				$scope.model = respon.data;
				$ws.getShowroom(null, function(respon) {
					$scope.showroom = respon.data;
					$ws.getTrans(null, function(respon) {
						$scope.trans = respon.data;
					})
				})
			})
		}, error);
		$scope.getCar({filter: $scope.filter});
	}

	$scope.testLoading = function() {
		$scope.$parent.loading = true;
		$timeout(function() {
			$scope.$parent.loading = false;
		}, 2000);
	}

	$scope.getCar = function(data) {
		$scope.car = [];
		$ws.getCar(data, function(respon) {
			respon.data.forEach(function(item) {
				var car = item;
				$ws.getCarDetail({filter: {id: item.id}}, function(respon) {
					car.detail = respon.data[0];
					$scope.car.push(car);
				}, error)
			})
		}, error);
	}

	$scope.addCar = function(data) {
		// checking
		console.log($scope.newCar);
		var car = $scope.newCar;
		if (!car.add.brand_id) {
			return window.alert('Brand Mobil wajib diisi');
		}
		if (!car.add.name) {
			return window.alert('Nama Mobil wajib diisi');
		}
		if (!car.add.cars_model_id) {
			return window.alert('Model Mobil wajib diisi');
		}
		if (!car.detail.tahun) {
			return window.alert('Tahun Mobil wajib diisi');
		}
		if (!car.detail.nopol) {
			return window.alert('Nopol Mobil wajib diisi');
		}
		if (!car.detail.bbm) {
			return window.alert('BBM Mobil wajib diisi');
		}
		if (!car.detail.km) {
			return window.alert('Kilometer Mobil wajib diisi');
		}
		if (!car.detail.trans_id) {
			return window.alert('Tranmisi Mobil wajib diisi');
		}
		if (!car.detail.silinder) {
			return window.alert('Silinder Mobil wajib diisi');
		}
		if (!car.detail.warna) {
			return window.alert('Warna Mobil wajib diisi');
		}
		if (!car.detail.showroom_id) {
			return window.alert('Showroom Mobil wajib diisi');
		}
		if (!car.preview) {
			return window.alert('Preview Mobil wajib diisi');
		}
		if (!car.exterior) {
			return window.alert('Exterior Mobil wajib diisi');
		}
		if (!car.interior) {
			return window.alert('Interior Mobil wajib diisi');
		}
		var token = $scope.$parent.user.token;
		$scope.$parent.loading = true;
		$ws.addCar({
			token: token,
			data: $scope.newCar.add
		}, function(respon) {
			console.log('add',respon.data);
			$scope.newCar.detail.id = respon.data.data;
			var nopol = $scope.newCar.detail.nopol;
			var mobil = $scope.newCar.add.name;
			var dir = respon.data.data + "-" + nopol.split(" ").join("") + "-" + mobil;
			$scope.newCar.detail.dir_img = dir;
			$scope.newCar.detail.cars_stats_id = 1;
			$ws.addCarDetail({
				token: token,
				data: $scope.newCar.detail
			}, function(respon) {
				console.log('detail',respon.data);
				$ws.dirCar({
					token: token,
					data: dir
				}, function(respon) {
					console.log('dir',respon.data);
					$ws.uploadCar({
						token: token,
						image: $scope.newCar.preview,
						dir: dir,
						type: 'preview'
					}, function(respon) {
						console.log('preview',respon.data);
						$ws.uploadCar({
							token: token,
							image: $scope.newCar.exterior,
							dir: dir,
							type: 'exterior'
						}, function(respon) {
							console.log('exterior',respon.data);
							$ws.uploadCar({
								token: token,
								image: $scope.newCar.interior,
								dir: dir,
								type: 'interior'
							}, function(respon) {
								console.log('interior',respon.data);
								$scope.newCar = {
									add: {add_by: $scope.$parent.user.id},
									detail: {add_by: $scope.$parent.user.id},
									preview: '',
									exterior: [],
									interior: ''
								};
								$scope.cancel();
								$scope.$parent.loading = false;
							}, error);
						}, error);
					}, error);
				}, error);
			}, error);
		}, error);
	}

	$scope.editCar = function(data) {
		var token = $scope.$parent.user.token;
		$ws.editCar(null, function(respon) {

		}, error);
	}

	$scope.delCar = function(data) {
		console.log('delete');
		$scope.$parent.loading = true;
		var token = $scope.$parent.user.token;
		$ws.delCar({token: token, data: {id: data.id}}, function(respon) {
			console.log(respon.data);
			if (respon.data.data) {
				$ws.delDir({
					token: token,
					dir: data.dir_img,
					type: 'cars'
				}, function(respon) {
					console.log(respon.data);
					$scope.$parent.loading = false;
				}, error);
			}
		}, error);
	}

	$scope.soldCar = function(data) {
		var token = $scope.$parent.user.token;
		$ws.soldCar(data, function(respon) {

		}, error);
	}

	$scope.distCar = function(data) {
		$scope.filter.page = data;
		$scope.getCar({filter: $scope.filter});
		$scope.current.page = data;
	}

	$scope.openModalMobil = function() {
		console.log($scope.modalMobil);
		var modal = $uibModal.open({
			templateUrl: "template/modal/carModal.html",
			scope: $scope
		});
	}

	$scope.openModalEdit = function(scope) {
		var modal = $uibModal.open({
			templateUrl: "template/modal/carEdit.html",
			scope: scope
		});
	}

	$scope.openModalDelete = function(scope) {
		var modal = $uibModal.open({
			templateUrl: "template/modal/carDelete.html",
			scope: scope
		});
	}

	$scope.openModalSold = function(scope) {
		var modal = $uibModal.open({
			templateUrl: "template/modal/carSold.html",
			scope: scope
		});
	}

	$scope.modalBrandAdd = function() {
		var modal = $uibModal.open({
			templateUrl: "template/modal/brandAdd.html",
			scope: $scope
		});
	}

	$scope.modalModelAdd = function() {
		var modal = $uibModal.open({
			templateUrl: "template/modal/modelAdd.html",
			scope: $scope
		})
	}

	$scope.tab = function(type, data) {
		if (type == 'modalMobil') {
			$scope.modalMobil.currentTab = data;
		}
		if (type == 'editMobil') {
			$scope.editMobil.currentTab = data;
		}
		if (type == 'deleteMobil') {
			$scope.deleteMobil.currentTab = data;
		}
		if (type == 'soldMobil') {
			$scope.soldMobil.currentTab = data;
		}
	}

	$scope.cancel = function() {
		$uibModalStack.dismissAll();
	}

	$scope.init();
})