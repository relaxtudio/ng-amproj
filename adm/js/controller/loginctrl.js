var error = function() {
	console.log(false);
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