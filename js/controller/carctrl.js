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
			search: ''
		};
		$scope.status = {
			isLoading: false,
			contentLoading: false
		};
		$scope.initWs();
	}

	$scope.initWs = function() {
		$scope.status.isLoading = true;
		$ws.getCar({filter: $scope.filter}, function(respon) {
			$scope.car = respon.data;
			$ws.getCarSum(null, function(respon) {
				console.log(respon.data);
				var total = 0;
				for (i in respon.data) {
					total += parseInt(respon.data[i].total);
				}
				var maxpage = Math.ceil(total / $scope.filter.limit);
				$scope.filter.maxpage = maxpage;
				$scope.status.isLoading = false;
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
		$ws.getCarSum({filter: $scope.filter}, function(respon) {
			var total = 0;
			for (i in respon.data) {
				total += parseInt(respon.data[i].total);
			}
			$scope.carTotal.total = total;
			var maxpage = Math.ceil(total / $scope.filter.limit);
			$scope.filter.maxpage = maxpage;
			$scope.status.isLoading = false;
		}, error);
	}

	$scope.init();
})