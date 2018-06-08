var addmodule = angular.module('additionModule',[]);
var submodule = angular.module('substractionModule',[]);

addmodule.controller('additionController', function($scope){
	$scope.result = 5+4;
});

submodule.controller('substractionController', function($scope){
	$scope.result= 5-4;
});