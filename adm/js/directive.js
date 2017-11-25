am.directive("ngFileUpload", [function () {
    return {
        scope: {
            ngFileUpload: "="
        },
        link: function (scope, element, attributes) {
	    	var isMultiple = attributes.multiple;
            element.bind("change", function (changeEvent) {
                var values = [];
                angular.forEach(element[0].files, function(item) {
                	var reader = new FileReader();
                	reader.readAsDataURL(item);
                	reader.onload = function(respon) {
                		var value = {
                			name: item.name,
                			file: respon.target.result
                		}
                		values.push(value);
                	}
                });
                scope.$apply(function() {
                	console.log(values);
                	if (isMultiple) {
	                	scope.ngFileUpload = values;            		
                	} else {
                		scope.ngFileUpload = values[0];
                	}
                })
            });
        }
    }
}])

am.directive('ngFileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.ngFileModel);
            var isMultiple = attrs.multiple;
            var modelSetter = model.assign;
            var reader = new FileReader();
            element.bind('change', function () {
                var values = [];
                angular.forEach(element[0].files, function (item) {
                    var value = {
                       // File Name 
                        name: item.name,
                        //File Size 
                        size: item.size,
                        //File URL to view 
                        url: URL.createObjectURL(item),
                        // File Input Value 
                        _file: item
                    };
                    values.push(value);
                });
                scope.$apply(function () {
                    if (isMultiple) {
                        modelSetter(scope, values);
                    } else {
                        modelSetter(scope, values);
                    }
                });
            });
        }
    };
}])

am.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});