am.controller('SimCtrl', function($scope, $state, $ws, $interval, $q) {
	$scope.init = function() {
		$scope.$parent.loading = true;
		$scope.data = {
			bunga: [],
			fixcap: [],
			premi: [],
			biaya: []
		};
		$scope.gridBunga = {
			enableRowSelection: true,
		    enableSelectAll: true,
		    selectionRowHeaderWidth: 35
		};
		$scope.gridBunga.columnDefs = [
			{name: 'id', enableCellEdit: false, displayName: 'No.', width: '5%', visible: false},
			{name: 'thnmin', displayName: 'Tahun Min Mobil'},
			{name: 'thnmax', displayName: 'Tahun Max Mobil'},
			{name: 'dp', displayName: 'DP', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.dp}} %</div>'},
			{name: 'thn1', displayName: '1 Tahun', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn1}} %</div>'},
			{name: 'thn2', displayName: '2 Tahun', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn2}} %</div>'},
			{name: 'thn3', displayName: '3 Tahun', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn3}} %</div>'},
			{name: 'thn4', displayName: '4 Tahun', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn4}} %</div>'}
		];
		$scope.gridBunga.rowEditWaitInterval = -1;
		$scope.gridBunga.multiSelect = true;

		$scope.gridFixcap = {};
		$scope.gridFixcap.columnDefs = [
			{name: 'id', enableCellEdit: false, displayName: 'No.', width: '5%', visible: false},
			{name: 'thnmin', displayName: 'Tahun Min Mobil'},
			{name: 'thnmax', displayName: 'Tahun Max Mobil'},
			{name: 'tenor', displayName: 'Tenor (th)'},
			{name: 'dp', displayName: 'DP', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.dp}} %</div>'},
			{name: 'term1', displayName: 'Periode 1', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.term1}} %</div>'},
			{name: 'term2', displayName: 'Periode 2', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.term2}} %</div>'}
		];
		$scope.gridFixcap.rowEditWaitInterval = -1;

		$scope.gridPremi = {};
		$scope.gridPremi.columnDefs = [
			{name: 'id', enableCellEdit: false, displayName: 'No.', width: '5%', enableSorting: false, visible: false},
			{name: 'jenis', displayName: 'Jenis Asuransi'},
			{name: 'thnmin', displayName: 'Thn Min. Mobil', enableSorting: false},
			{name: 'thnmax', displayName: 'Thn Max. Mobil', enableSorting: false},
			{name: 'minotr', displayName: 'Min. OTR', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">Rp {{row.entity.minotr}},-</div>'},
			{name: 'maxotr', displayName: 'Max. OTR', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">Rp {{row.entity.maxotr}},-</div>'},
			{name: 'thn1', displayName: '1 Th', width: '7%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn1}} %</div>'},
			{name: 'thn2', displayName: '2 Th', width: '7%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn2}} %</div>'},
			{name: 'thn3', displayName: '3 Th', width: '7%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn3}} %</div>'},
			{name: 'thn4', displayName: '4 Th', width: '7%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn4}} %</div>'},
			{name: 'thn5', displayName: '5 Th', width: '7%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn5}} %</div>'},
			{name: 'thn6', displayName: '6 Th', width: '7%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.thn6}} %</div>'}
		];
		$scope.gridPremi.rowEditWaitInterval = -1;
		$scope.gridPremi.excessRows = 50;

		$scope.gridBiaya = {};
		$scope.gridBiaya.columnDefs = [
			{name: 'id', enableCellEdit: false, displayName: 'No', width: '5%', visible: false},
			{name: 'tenor', displayName: 'Tenor (Th)', width: '9%', enableSorting: true},
			{name: 'hutangmin', displayName: 'Min. PH', width: '12%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">Rp {{row.entity.hutangmin}},-</div>'},
			{name: 'hutangmax', displayName: 'Max. PH', width: '12%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">Rp {{row.entity.hutangmax}},-</div>'},
			{name: 'admpolis', displayName: 'Biaya Adm Polis', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">Rp {{row.entity.admpolis}},-</div>'},
			{name: 'adm', displayName: 'Administrasi', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">Rp {{row.entity.adm}},-</div>'},
			{name: 'fiducia', displayName: 'Biaya Fiducia', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">Rp {{row.entity.fiducia}},-</div>'},
			{name: 'crdtpro', displayName:'Credit Protection', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.crdtpro}} %</div>'},
			{name: 'provisi', displayName: 'Provisi', width: '9%', enableSorting: false, cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.provisi}} %</div>'}
		];
		$scope.gridBiaya.rowEditWaitInterval = -1;

		$scope.initWs();
	}

	$scope.initWs = function() {
		var token = $scope.$parent.user.token;
		$ws.getValue({token: token}, function(respon) {
			$scope.gridBunga.data = respon.data;
			$ws.getValue({token: token, data: {table: 'fixcap'}}, function(respon) {
				$scope.gridFixcap.data = respon.data;
				$ws.getValue({token: token, data: {table: 'premi'}}, function(respon) {
					$scope.gridPremi.data = respon.data;
					$ws.getValue({token: token, data: {table: 'biaya'}}, function(respon) {
						$scope.gridBiaya.data = respon.data;
						$scope.$parent.loading = false;
					}, error)
				}, error);
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
				$ws.updateSim({
					token: token,
					data: {
						pointer: 'premi',
						data: $scope.gridPremi.data
					}
				}, function(respon){
					$ws.updateSim({
						token: token,
						data: {
							pointer: 'biaya',
							data: $scope.gridBiaya.data
						}
					}, function(respon){
						$scope.init();
					}, error);
				}, error);
			}, error);
		}, error);
	}

	$scope.refresh = function() {
		$scope.init();
	}

	$scope.init();
})