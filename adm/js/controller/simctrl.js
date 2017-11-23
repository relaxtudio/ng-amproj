am.controller('SimCtrl', function($scope, $state, $ws, $interval, $q) {
	$scope.init = function() {
		$scope.$parent.loading = true;
		$scope.data = {
			bunga: [],
			fixcap: []
		};
		$scope.gridBunga = {};
		$scope.gridBunga.columnDefs = [
			{name: 'id', enableCellEdit: false, displayName: 'No.', width: '5%'},
			{name: 'thnmin', displayName: 'Tahun Min Mobil'},
			{name: 'thnmax', displayName: 'Tahun Max Mobil'},
			{name: 'dp', displayName: 'DP (%)'},
			{name: 'thn1', displayName: '1 Tahun'},
			{name: 'thn2', displayName: '2 Tahun'},
			{name: 'thn3', displayName: '3 Tahun'},
			{name: 'thn4', displayName: '4 Tahun'}
		];
		$scope.gridBunga.rowEditWaitInterval = -1;

		$scope.gridFixcap = {};
		$scope.gridFixcap.columnDefs = [
			{name: 'id', enableCellEdit: false, displayName: 'No.', width: '5%'},
			{name: 'thnmin', displayName: 'Tahun Min Mobil'},
			{name: 'thnmax', displayName: 'Tahun Max Mobil'},
			{name: 'tenor', displayName: 'Tenor (th)'},
			{name: 'dp', displayName: 'DP (%)'},
			{name: 'term1', displayName: 'Periode 1'},
			{name: 'term2', displayName: 'Periode 2'}
		];
		$scope.gridFixcap.rowEditWaitInterval = -1;

		$scope.initWs();
	}

	$scope.initWs = function() {
		var token = $scope.$parent.user.token;
		$ws.getValue({token: token}, function(respon) {
			$scope.gridBunga.data = respon.data;
			$ws.getValue({token: token, data: {table: 'fixcap'}}, function(respon) {
				$scope.gridFixcap.data = respon.data;
				$scope.$parent.loading = false;
			}, error);
		}, error);
	}

	$scope.update = function() {
		var token = $scope.$parent.user.token;
		$scope.$parent.loading = true;
		$ws.updateSim({
			token: token, 
			data: {
				pointer: 'bunga', 
				data: $scope.gridBunga.data
			}
		}, function(respon) {
			$ws.updateSim({
				token: token,
				data: {
					pointer: 'fixcap',
					data: $scope.gridFixcap.data
				}
			}, function(respon) {
				$scope.init();
			}, error);
		}, error);
	}

	$scope.refresh = function() {
		$scope.init();
	}

	$scope.init();
})