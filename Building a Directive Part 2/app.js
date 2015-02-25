var app = angular.module('app', []);

app.controller('MainController',function($scope){
	$scope.photo = {
		url: 'http://cdn.playbuzz.com/cdn/d5b63c56-7a1b-4f2c-8a0a-6e7ebc53f6c1/007a9a67-30ff-4c4b-8be5-96b024fb5fbd.jpg',
		date: 'January 1, 2014'
	}
});

// define a directive
app.directive('photo', function(){
	return {
		restrict: 'AECM', //A,E,C,M you can chain 'AE'
		template: '<figure><img width="500px"/><figcaption/></figure>',
		replace: true,
		link: function(scope, element, attrs){
			attrs.$observe('caption', function(value){
				element.find('figcaption').text(value)
			})
			attrs.$observe('photoSrc', function(value){
				element.find('img').attr('src', value)
			})
		}
	}
})

// app.directive('photo', function(){
// 	return {
// 		restrict: 'E',
// 		template: '<figure>' +
// 								'<img width="500px" ng-src="{{photoSrc}}"/>' +
// 								'<figcaption>{{caption}}</figcaption>' +
// 							'</figure>',
// 		replace: true,
// 		// isolate scope
// 		scope: {
// 			caption: '@',
// 			photoSrc: '@'
// 		}
// 	}
// });





