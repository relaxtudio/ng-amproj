am.controller('ProfilCtrl', ['$scope', '$state', '$ws', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.user = $ws.loginUser();
		$scope.loading = false;
	}	
}])