var app = angular.module('app', []);

app.controller('MainController', function($scope, $filter){
	$scope.mydata = {arr: [{name: "Michael", age:28}, {name: "Matthew", age: 29}, {name: "Anthony", age:23},{name: "Andrew", age:13},]}

	console.log($filter('uppercase')('make this string uppercase'))

});
