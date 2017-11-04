this.server = 'http://localhost/anugerah/api/';

this.check = function(data) {
	console.log(data);
}

this.api = function(func, data, callback) {
	$.post(server + func, data, function(result) {
		result = JSON.parse(result);
		callback(result);
	});
}

this.getCar = function(data) {
	call = api('getCar', data, function(result) {
		console.log(result);
	});
}

this.getMap = function(data) {
	call = api('getMap', data, function(result) {
		console.log(result);
	});
}