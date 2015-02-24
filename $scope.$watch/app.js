var app = angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.mydata = {val: "Michael"}

	$scope.$watch('mydata.val', function(newval){
		$scope.mydata.toolong = newval.length > 15
	})
});

// very powerful too, it requires know when and when not to use it.
// keep your code DRY