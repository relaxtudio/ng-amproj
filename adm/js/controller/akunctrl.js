am.controller('AkunCtrl', ['$scope', '$state', '$ws', '$uibModal', '$uibModalStack', function($scope, $state, $ws, $uibModal, $uibModalStack) {
	$scope.openModalAkun = function() {
		var modal = $uibModal.open({
			templateUrl: "template/modal/akunAdd.html",
			scope: $scope
		});
	}

	$scope.deleteAkun = function() {
		var modal = $uibModal.open({
			templateUrl: "template/modal/akunDelete.html",
			scope: $scope
		})
	}

	$scope.cancel = function() {
		$uibModalStack.dismissAll();
	}
}])