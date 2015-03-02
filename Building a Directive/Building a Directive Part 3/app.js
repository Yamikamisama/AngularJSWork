var app = angular.module('app', []);

app.controller('MainController',function($scope){
	$scope.photo = {
		url: 'http://findicons.com/files/icons/2141/web_design_creatives/128/small_smile.png',
		date: 'January 1, 2014'
	}
});


// app.directive('photo', function(){
// 	return {
// 		restrict: 'AECM', //A,E,C,M you can chain 'AE'
// 		template: '<figure><img width="500px"/><figcaption/></figure>',
// 		replace: true,
// 		link: function(scope, element, attrs){
// 			attrs.$observe('caption', function(value){
// 				element.find('figcaption').text(value)
// 			})
// 			attrs.$observe('photoSrc', function(value){
// 				element.find('img').attr('src', value)
// 			})
// 		}
// 	}
// })

app.directive('photo', function(){
	return {
		restrict: 'E',
		templateUrl: 'photo.html',
		replace: true,
		// isolate scope
		scope: {
			caption: '=',
			photoSrc: '='
		}
	}
});

// the = allows us to create a two way data bind
// in the html you must remove the interpolaters
// the result is that the data is connected to the parent from the child and vice versa




