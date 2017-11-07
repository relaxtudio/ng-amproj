am.controller('MainCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.user = $ws.loginUser();
	}

	$scope.goto = function(path) {
		$state.go('main.' + path);
	}

	$scope.logout = function() {
		$ws.logout();
		$state.transitionTo('login');
	}

	$scope.getCarAll = function(data, scope) {

	}

	$scope.getCarSum = function(data, scope, limit) {
		$ws.getCarSum(data, function(respon) {
			for (i in respon.data) {
				scope.carTotal.all += parseInt(respon.data[i].total);
			}
			scope.carTotal.showroom = respon.data;
			scope.carTotal.page = Math.ceil(respon.data.length / limit) + 1;
		}, function(responError) {
			console.log('error', responError)
		});
	}

	$scope.init();
})