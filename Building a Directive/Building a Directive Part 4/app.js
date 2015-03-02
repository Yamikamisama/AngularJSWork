var app = angular.module('app', []);

app.controller('MainController',function($scope){
	$scope.photo = {
		url: 'http://findicons.com/files/icons/2141/web_design_creatives/128/small_smile.png',
		date: 'January 1, 2014'}
	$scope.callme = function(msg){
		console.log('You gave me: ' + msg )
	}
});


app.directive('photo', function(){
	return {
		restrict: 'E',
		templateUrl: 'photo.html',
		replace: true,
		scope: {
			caption: '@capstring',
			photoSrc: '=',
			localFunc: '&'
		},
		controller: function($scope) {
			$scope.mydata = "some data"
		}
	}
});