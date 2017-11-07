am.controller('CarCtrl', function($scope, $state, $ws, $uibModal, $uibModalStack) {
	var error = function(respon) {
		console.log('error', respon);
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
		$scope.modalMobil = {
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

	$scope.distCar = function(data) {
		$scope.filter.page = data;
		$scope.getCar({filter: $scope.filter});
		$scope.current.page = data;
	}

	$scope.openModalMobil = function() {
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

	$scope.tab = function(data) {
		$scope.modalMobil.currentTab = data;
	}

	$scope.cancel = function() {
		$uibModalStack.dismissAll();
	}

	$scope.init();
})