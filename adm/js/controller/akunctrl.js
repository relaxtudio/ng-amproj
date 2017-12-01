am.controller('AkunCtrl', function($scope, $state, $ws, $uibModal, $uibModalStack) {
	$scope.init = function() {
		$scope.user = $scope.$parent.user;
		$scope.userList = [];
		$scope.newUser = {
			username: null,
			password: null,
			password_confirm: null
		}
		$scope.initWs();
	};

	$scope.initWs = function() {
		$ws.getUsr({token: $scope.user.token}, function(respon) {
			$scope.userList = respon.data;
			$scope.$parent.loading = false;
		}, function(error) {
			window.alert(error);
		})
	};

	$scope.openModalAkun = function() {
		var modal = $uibModal.open({
			templateUrl: "template/modal/akunAdd.html",
			scope: $scope
		});
	};

	$scope.deleteAkun = function(scope) {
		var modal = $uibModal.open({
			templateUrl: "template/modal/akunDelete.html",
			scope: scope
		})
	};

	$scope.addUser = function(data) {
		if (data.$valid) {
			$scope.$parent.loading = true;
			if ($scope.newUser.password == $scope.newUser.password_confirm) {
				$ws.addUser({
					token: $scope.user.token,
					data: $scope.newUser
				}, function(respon) {
					if (respon.data) {
						$scope.cancel();
						$scope.init();
					} else {
						$scope.$parent.loading = false;
						window.alert("Username sudah ada");
					}
				}, error);
			} else {
				window.alert("Password yang dimasukkan tidak cocok");
				$scope.$parent.loading = false;
			}
		}
	}

	$scope.delUser = function(data) {
		$scope.$parent.loading = true;
		$ws.delUser({token: $scope.user.token, data: data}, function(respon) {
			$scope.cancel();
			$scope.initWs();
		}, error);
	};

	$scope.cancel = function() {
		$scope.newUser = {
			username: null,
			password: null,
			password_confirm: null
		}
		$uibModalStack.dismissAll();
	};

	$scope.init();
})