var app = angular.module('filter', []);

app.controller('filterController', function($scope){
	$scope.tutorial = 'Learn Angular JS';
});

app.controller('numberController', function($scope){
	$scope.tutorial_id = 12.1223;
});

app.filter('customFilter', function(){
	
	return function(input){
		return input + ' tutorial';
	}
});
