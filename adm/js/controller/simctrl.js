am.controller('SimCtrl', function($scope, $state, $ws, $interval) {
	$scope.init = function() {
		$scope.data = {
			bunga: [],
			fixcap: []
		};
		$scope.gridBunga = {
			rowEditWaitInteval: -1
		};
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
			respon.data.forEach(function(value) {
				$scope.gridBunga.data.push(value);
				$scope.data.bunga.push(value);
			})
			$ws.getValue({token: token, data: {table: 'fixcap'}}, function(respon) {
				$scope.data.fixcap = respon.data;
				$scope.gridFixcap.data = respon.data;
			}, error);
		}, error);
	}

	$scope.saveRow = function(data) {
		var promise = ExpService.insertExp( rowEntity );
		$scope.gridApi.rowEdit.setSavePromise( rowEntity, promise );
		console.log(data.data, $scope.data);
	}

	$scope.init();
})