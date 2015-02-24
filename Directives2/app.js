var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.myarr = [1,2,3,4,5,5]

  $scope.users = [{name: "Mike", age: 23}, {name: "Andy", age: 34}, {name: "Reid", age:45},{name: "Reid", age:45}]

  $scope.ob = {name: "mike", age: 35, title: "Mr."}
});
