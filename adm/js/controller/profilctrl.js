am.controller('ProfilCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.user = $ws.loginUser();
		$scope.loading = false;
		$scope.user.username = $scope.user.name;
	}

	$scope.changePass = function(data) {
		if (data.$valid) {
			if ($scope.user.password_new !== $scope.user.password_confirm) {
				return window.alert("Password tidak sama");
			}
			$ws.changePass($scope.user, function(respon) {
				if (respon.data) {
					$scope.init();
					window.alert("Password berhasil dirubah");
				} else {
					window.alert("Password lama yang anda masukkan salah");
				}
			}, error);
		}
	}

	$scope.init();
})