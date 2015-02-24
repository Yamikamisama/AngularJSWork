var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.mydata = {arr: [{name: "Michael", age:28}, {name: "Matthew", age: 29}]}
});
