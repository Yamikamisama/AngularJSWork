var app = angular.module('app', []);

app.controller('MainController', function($scope, $filter){
	$scope.mydata = {arr: [{name: "Michael", age:28}, {name: "Matthew", age: 29}, {name: "Anthony", age:23},{name: "Andrew", age:13},]}
});

// Character Limit Filter
app.filter('charLimit', function(){
	return function(input, length){
		if (!length) {
			length = 10
		}
		if (!input) {
			return ''
		}
		if (input.length <=length) {
			return input
		}
		else {
			return input.substring(0, length) + '...'
		}
	}
});

// Drinking Age Filter
app.filter('canDrink', function(){
	return function(data, minAge){
		var filtered = []
		if(!minAge) {
			minAge = 21
		}
		for (var i=0; i<data.length; i++){
			var value = data[i];
			if (value.age >= minAge){
				filtered.push(value)
			}
		}
		return filtered;
	}
})