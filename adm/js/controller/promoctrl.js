am.controller('PromoCtrl', function($scope, $state, $ws, $uibModal) {
	$scope.init = function() {
		$scope.promo = {
			data: [],
			show: []
		};
		$scope.newPromo = {
			data: []
		};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$ws.getPromo(null, function(respon) {
			$scope.promo.data = respon.data;
			$ws.getPromo({filter: {active: 'Y'}}, function(respon) {
				$scope.promo.show = respon.data;
				$scope.$parent.loading = false;
			})
		}, error);
	}

	$scope.openModalPromo = function(data) {
		var modal = $uibModal.open({
			templateUrl: "template/modal/promoAdd.html",
			scope: $scope
		});
	}

	$scope.addPromo = function() {
		var token = $scope.$parent.user.token;
		$scope.$parent.loading = true;
		$ws.addPromo({token: token, image: $scope.newPromo.data}, function(respon) {
			console.log(respon);
			$ws.uploadCar({
				token: token, 
				image: $scope.newPromo.data,
				dir: 'promo',
				type: 'promo'
			}, function(respon) {
				console.log(respon);
				$scope.$parent.loading = false;
			}, error);
		}, error);
	}

	$scope.delPromo = function(data) {
		var token = $scope.$parent.user.token;
		$scope.$parent.loading = true;
		$ws.delPromo({token: token, data: data}, function(respon) {
			console.log(respon);
			$scope.init();
		}, error);
	}

	$scope.promoToggle = function(data) {
		var token = $scope.$parent.user.token;
		$scope.$parent.loading = true;
		$ws.promoToggle({token: token, data: data}, function(respon) {
			console.log(respon);
			$scope.init();
		})
	}

	$scope.init();
})