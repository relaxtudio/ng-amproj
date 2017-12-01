var error = function(value) {
	$scope.$parent.loading = false;
	return window.alert(value);
}

am.controller('LoginCtrl', function($scope, $state, $ws) {
	$scope.login = function(form) {
		if (form.$valid) {
			$ws.login($scope.user, function(respon) {
				if (respon) {
					$state.transitionTo('main.dash');					
				}
			}, error);
		}
	}
})