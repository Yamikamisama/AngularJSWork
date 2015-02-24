var app = angular.module('app', []);

// app.controller('MainController', function($scope){
// 	$scope.mydata = {val: "Michael"}

// 	$scope.$watch('mydata.val', function(newval){
// 		$scope.mydata.toolong = newval.length > 15
// 	})
// });

// very powerful too, it requires know when and when not to use it.
// keep your code DRY

app.controller('MainController', function($scope){
	$scope.num = 0;
	$scope.nums = [];

	$scope.increment = function(){
		$scope.num++;
	}

	$scope.breakit = $scope.$watch('num', function(){
		$scope.nums.push($scope.num)
	});
});