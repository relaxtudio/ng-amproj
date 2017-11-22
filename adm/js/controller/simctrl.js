am.controller('SimCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		$scope.data = {};
		$scope.gridBunga = {};
		$scope.gridBunga.columnDefs = [
			{name: 'id', enableCellEdit: false},
			{name: 'thnmin'},
			{name: 'thnmax'},
			{name: 'dp'},
			{name: 'thn1'},
			{name: 'thn2'},
			{name: 'thn3'},
			{name: 'thn4'}
		]
		$scope.gridFixcap = {};
		$scope.gridFixcap.columnDefs = [
			{name: 'id', enableCellEdit: false},
			{name: 'thnmin'},
			{name: 'thnmax'},
			{name: 'tenor'},
			{name: 'dp'},
			{name: 'term1'},
			{name: 'term2'}
		]
		$scope.initWs();
	}

	$scope.initWs = function() {
		var token = $scope.$parent.user.token;
		$ws.getValue({token: token}, function(respon) {
			$scope.data.bunga = respon.data;
			$scope.gridBunga.data = respon.data;
			$ws.getValue({token: token, data: {table: 'fixcap'}}, function(respon) {
				$scope.data.fixcap = respon.data;
				$scope.gridFixcap.data = respon.data;
			})
		}, error);
	}

	

	$scope.init();
})