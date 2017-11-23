var error = function(value) {
	console.log(value);
}

am.controller('LoginCtrl', ['$scope', '$state', '$ws', function($scope, $state, $ws) {
	$scope.login = function(form) {
		if (form.$valid) {
			$ws.login($scope.user, function(respon) {
				if (respon) {
					$state.transitionTo('main.dash');					
				}
			}, error);
		}
	}
}])