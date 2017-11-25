am.factory('$ls', function($window) {
	return {
		set: function(key, value) {
			$window.localStorage.setItem(key, value);
		},
		get: function(key, defaultValue) {
			return $window.localStorage.getItem(key) || defaultValue;
		},
		remove: function(key) {
			$window.localStorage.removeItem(key);
		},
		setObject: function(key, value) {
			$window.localStorage.setItem(key, JSON.stringify(value));
		},
		getObject: function(key, defaultValue) {
			return JSON.parse($window.localStorage.getItem(key) || defaultValue);
		}
	}
})

am.factory('$ws', function($ls, $http, CONFIG) {
	var C_SESSION 		= CONFIG.APP_ID + '.session';
	var C_CACHE 		= CONFIG.APP_ID + '.cache';
	var C_SERVER 		= CONFIG.APP_ID + '.server';
	var C_SERVERNAME 	= CONFIG.APP_ID + '.servername';
	var C_WS;

	var initServer = function() {
		C_WS = getServer(CONFIG.API_PHP);
	};

	var getServer = function(path) {
		path = path || '';
		return $ls.get(C_SERVER, CONFIG.SERVER) + path;
	};

	var setServer = function(url) {
		$ls.set(C_SERVER, url);
		initServer();
	};

	var setServerName = function(name) {
		$ls.set(C_SERVERNAME, name);
	};

	var getServerName = function() {
		return $ls.get(C_SERVERNAME);
	};

	initServer();

	return {
		login: function(user, success, error) {
			var session = {
				id: user.id,
				name: user.username,
				token: ''
			};
			return $http.post(C_WS + 'loginUser', user).then(function (respon) {
				if (respon) {
					session = respon.data;
					$ls.setObject(C_SESSION, session);
				}
				success(session);
			}, error);
		},
		isLogin: function() {
			if (!$ls.getObject(C_SESSION, null)) {
				$ls.remove(C_SESSION);
			}
			return ($ls.getObject(C_SESSION, null) !== null);
		},
		loginUser: function() {
			return $ls.getObject(C_SESSION, null);
		},
		logout: function() {
			$ls.remove(C_SESSION);
		},
		testUpload: function(data, success, error) {
			return $http.post(C_WS + 'testUpload', data).then(success, error);
		},
		getCar: function(data, success, error) {
			return $http.post(C_WS + 'getCar', data).then(success, error);
		},
		getCarDetail: function(data, success, error) {
			return $http.post(C_WS + 'getCarDetail', data).then(success, error);
		},
		getCarSum: function(data, success, error) {
			return $http.post(C_WS + 'getCarSum', data).then(success, error);
		},
		getCarSold: function(data, success, error) {
			return $http.post(C_WS + 'getCarSold', data).then(success, error);
		},
		addCar: function(data, success, error) {
			return $http.post(C_WS + 'addCar', data).then(success, error);
		},
		addCarDetail: function(data, success, error) {
			return $http.post(C_WS + 'addCarDetail', data).then(success, error);
		},
		editCar: function(data, success, error) {
			return $http.post(C_WS + 'editCar', data).then(success, error);
		},
		editCarDetail: function(data, success, error) {
			return $http.post(C_WS + 'editCarDetail', data).then(success, error);
		},
		delCar: function(data, success, error) {
			return $http.post(C_WS + 'delCar', data).then(success, error);
		},
		soldCar: function(data, success, error) {
			return $http.post(C_WS + 'soldCar', data).then(success, error);
		},
		getShowroom: function(data, success, error) {
			return $http.post(C_WS + 'getShowroom', data).then(success, error);
		},
		getModel: function(data, success, error) {
			return $http.post(C_WS + 'getModel', data).then(success, error);
		},
		getBrand: function(data, success, error) {
			return $http.post(C_WS + 'getBrand', data).then(success, error);
		},
		addBrand: function(data, success, error) {
			return $http.post(C_WS + 'addBrand', data).then(success, error);
		},
		delBrand: function(data, success, error) {
			return $http.post(C_WS + 'delBrand', data).then(success, error);
		},
		getModel: function(data, success, error) {
			return $http.post(C_WS + 'getModel', data).then(success, error);
		},
		addModel: function(data, success, error) {
			return $http.post(C_WS + 'addModel', data).then(success, error);
		},
		delModel: function(data, success, error) {
			return $http.post(C_WS + 'delModel', data).then(success, error);
		},
		getTrans: function(data, success, error) {
			return $http.post(C_WS + 'getTrans', data).then(success, error);
		},
		getShow: function(data, success, error) {
			return $http.post(C_WS + 'getShow', data).then(success, error);
		},
		dirCar: function(data, success, error) {
			return $http.post(C_WS + 'dirCar', data).then(success, error);
		},
		delDir: function(data, success, error) {
			return $http.post(C_WS + 'delDir', data).then(success, error);
		},
		delFiles: function(data, success, error) {
			return $http.post(C_WS + 'delFiles', data).then(success, error);
		},
		uploadCar: function(data, success, error) {
			return $http.post(C_WS + 'uploadCar', data).then(success, error);
		},
		getPromo: function(data, success, error) {
			return $http.post(C_WS + 'getPromo', data).then(success, error);
		},
		addPromo: function(data, success, error) {
			return $http.post(C_WS + 'addPromo', data).then(success, error);
		},
		delPromo: function(data, success, error) {
			return $http.post(C_WS + 'delPromo', data).then(success, error);
		},
		promoToggle: function(data, success, error) {
			return $http.post(C_WS + 'promoToggle', data).then(success, error);
		},
		getSocmed: function(data, success, error) {
			return $http.post(C_WS + 'getSocmed', data).then(success, error);
		},
		getMap: function(data, success, error) {
			return $http.post(C_WS + 'getMap', data).then(success, error);
		},
		addMap: function(data, success, error) {
			return $http.post(C_WS + 'addMap', data).then(success, error);
		},
		delMap: function(data, success, error) {
			return $http.post(C_WS + 'delMap', data).then(success, error);
		},
		getValue: function(data, success, error) {
			return $http.post(C_WS + 'getValue', data).then(success, error);
		},
		updateSim: function(data, success, error) {
			return $http.post(C_WS + 'updateSim', data).then(success, error);
		}
	}
})