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
		getCar: function(data, success, error) {
			return $http.post(C_WS + 'getCar', data).then(success, error);
		},
		getCarDetail: function(data, success, error) {
			return $http.post(C_WS + 'getCarDetail', data).then(success, error);
		},
		getCarSum: function(data, success, error) {
			return $http.post(C_WS + 'getCarSum', data).then(success, error);
		}
	}
})