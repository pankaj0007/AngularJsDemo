var app = angular.module('routeDemo',['ngRoute', 'ngResource']);

app.constant('baseUrl', 'http://localhost:8080/src/home.html/angular')

//Creating factory service for Restful communication
app.factory('UserService', function($resource){
	return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
});

app.config(['$routeProvider', function($routeProvider, $locationProvider){
	$routeProvider.
	when('/angular/:id',{
		text : 'hello',
		templateUrl: 'Angular.html',
		controller: 'AngularController'
	}).
	when('/node',{
		templateUrl: 'Node.html',
		controller: 'NodeController'
	}).
	otherwise({
		redirectTo : '/angular'
	});
}]);

app.controller('AngularController',function($scope, $routeParams, $route, $http){
	$scope.tutorial_Id = $routeParams.id;
	$scope.url = $route.current.text;
	$scope.tutorial=[
			{'Name': 'controllers', 'Description':'controller in action'},
			{'Name':'Models', 'Description' :'Models and binding data'},
			{'Name': 'Directives', 'Description':'Flexibilty of Directives'}
		];
	$http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks").then(function(response){
		$scope.resp= response.data;
	});
	
});

app.controller('NodeController',function($scope, UserService){
	$scope.topics=[];
	$scope.display=function(){
		$scope.topics.push($scope.topic);
	};
	$scope.user='Angular';
	$scope.tutorial=[
		  {Name:"Promises",Description :"Power of Promises"},
          {Name:"Event",Description :"Event of Node.js"},
          {Name:"Modules",Description :"Modules in Node.js"}
	];
	
	// getting particular data from User table
	$scope.resp= UserService.get({user: 1});
	
	//Create user in user table
	$scope.status = UserService.save({name: 'Saimon', email: 'saimon@devdactic.com'});
	
});



function testInterceptor(){
	return{
		
		request:function(config){
			console.log('request : ',config);
			return config;
		},
		requestError:function(config){
			console.log('requestError');
			return config;
		},
		response:function(config){
			console.log('response : ',config);
			return config;
		},
		responseError:function(config){
			console.log('responseError');
			return config;
		}
	}
}


app.factory('testInterceptor',testInterceptor).config(function($httpProvider){
	
	$httpProvider.interceptors.push('testInterceptor');
});




