var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory, myService){
	// console.log(myFactory.getData())
	// myFactory.addData(' bla bla bla')
	// console.log(myFactory.getData())
	console.log(myService.getData())
	myService.addData(' bla bla bla')
	console.log(myService.getData())
});


// Factory Version => Returns the same object
app.factory('myFactory', function(){
	var myString = "This is some other data"
	var addToString = function(newstr){
		myString += newstr
	}
	return {
		getData: function(){
			return "String contains: " + myString
		},
		addData: addToString
	}
});


// Service Version => Returns a new object
app.service('myService', function(){
	var myString = "This is some other data"
	var addToString = function(newstr){
		myString += newstr
	}

	this.getData = function(){
			return "String contains: " + myString
		},
	this.addData = addToString
});


// service declares a new instance of a class