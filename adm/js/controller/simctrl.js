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
			{name: 'id', enableCellEdit: false, displayName: 'No.', width: '5%'},
			{name: 'thnmin', displayName: 'Tahun Min Mobil'},
			{name: 'thnmax', displayName: 'Tahun Max Mobil'},
			{name: 'dp', displayName: 'DP (%)'},
			{name: 'thn1', displayName: '1 Tahun'},
			{name: 'thn2', displayName: '2 Tahun'},
			{name: 'thn3', displayName: '3 Tahun'},
			{name: 'thn4', displayName: '4 Tahun'}
		]
		$scope.gridFixcap = {};
		$scope.gridFixcap.columnDefs = [
			{name: 'id', enableCellEdit: false, displayName: 'No.', width: '5%'},
			{name: 'thnmin', displayName: 'Tahun Min Mobil'},
			{name: 'thnmax', displayName: 'Tahun Max Mobil'},
			{name: 'tenor', displayName: 'Tenor (th)'},
			{name: 'dp', displayName: 'DP (%)'},
			{name: 'term1', displayName: 'Periode 1'},
			{name: 'term2', displayName: 'Periode 2'}
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