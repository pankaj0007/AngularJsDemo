var app = angular.module('directive',[]);

app.controller('directiveController', function($scope){
	$scope.tutorial = 'This is Angular Js tutorials';
});

app.directive('ngDiv', function(){
	
	return{
		template :'<div>{{tutorial}}</div>'
	}
});


app.directive('ngLogin', function(){
	
	return{
		template :'username : <input type="text" ng-model= "username"> <br>password : <input type="text" ng-model="pasword"> <br> <input type="button" value ="submit" ng-model="submit"></input>'
	}
});

//Handling events in an directive
app.directive('ngEvent', function(){

	return{
		link:function($scope, element, attrs){
			element.bind('click', function(){
				element.html('You clicked me...');
			});
		}
	}
});
