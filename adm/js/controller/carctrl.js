am.controller('CarCtrl', function($scope, $state, $ws, $uibModal, $uibModalStack) {
	var error = function(respon) {
		console.log('error', respon);
	}

	$scope.init = function() {
		$scope.image = null;
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
		$scope.initWs();
	}

	$scope.log = function(data) {
		console.log(data);
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

	$scope.addCar = function(data) {
		$ws.addCar(data, function(respon) {

		}, error);
	}

	$scope.editCar = function(data) {
		$ws.editCar(data, function(respon) {

		}, error);
	}

	$scope.delCar = function(data) {
		$ws.delCar(data, function(respon) {

		}, error);
	}

	$scope.soldCar = function(data) {
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