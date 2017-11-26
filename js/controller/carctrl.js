am.controller('CarCtrl', function($scope, $state, $ws) {
	$scope.init = function() {
		
		$scope.car = [];
		$scope.carTotal = {
			total: 0
		};
		$scope.filter = {
			limit: 8,
			page: 1,
			currentPage: 1,
			maxpage: 1,
			search: '',
			showroom: null,
			delSold: 3
		};
		$scope.status = {
			isLoading: false,
			contentLoading: false,
			showroom: null
		};
		if ($state.params.showroom) {
			$scope.filter.showroom = $state.params.showroom;
		}
		$scope.initWs();
	}

	$scope.initWs = function() {
		$scope.status.isLoading = true;
		$ws.getCar({filter: $scope.filter}, function(respon) {
			$scope.car = respon.data;
			$ws.getCarSum({filter: $scope.filter}, function(respon) {
				var total = 0;
				for (i in respon.data) {
					total += parseInt(respon.data[i].total);
				}
				$scope.carTotal.total = total;
				var maxpage = Math.ceil(total / $scope.filter.limit);
				$scope.filter.maxpage = maxpage;
				$ws.getShowroom({filter: $scope.filter}, function(respon) {
					$scope.status.showroom = respon.data[0].name;
					$scope.status.isLoading = false;
				}, error)
			}, error);
		}, error)
	}

	$scope.showMore = function() {
		$scope.status.contentLoading = true;
		$scope.filter.page++;
		$ws.getCar({filter: $scope.filter}, function(respon) {
			for (i in respon.data) {
				$scope.car.push(respon.data[i]);
			}
			$scope.status.contentLoading = false;
		}, error);
		$scope.filter.currentPage++;
	}

	$scope.search = function() {
		$scope.loading = true;
		$ws.getCar({filter: $scope.filter}, function(respon) {
			$scope.car = respon.data;
			$ws.getCarSum({filter: $scope.filter}, function(respon) {
				var total = 0;
				for (i in respon.data) {
					total += parseInt(respon.data[i].total);
				}
				$scope.carTotal.total = total;
				var maxpage = Math.ceil(total / $scope.filter.limit);
				$scope.filter.maxpage = maxpage;
				$scope.status.isLoading = false;
				$scope.loading = false;
			}, error);
		}, error);
		
	}

	$scope.testLoading = function() {
		$scope.loading = true;
	}

	$scope.init();
})