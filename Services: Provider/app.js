var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory, myTest){
	console.log(myFactory.getData())
	myFactory.addData(' bla bla bla')
	console.log(myFactory.getData())
	console.log(myTest.getData())
	myTest.addData(' bla bla bla')
	console.log(myTest.getData())
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

app.provider('myTest', function(){
	var myString = "This is some other data"
	var addToString = function(newstr){
		myString += newstr
	}
	return {
		setData: function(data){
			myString = data
		},
		$get: function(){
		return {
			getData: function(){
				return "String contains: " + myString
			},
			addData: addToString
	}
		}
	}
})

app.config(function(myTestProvider){
	myTestProvider.setData("Some different String")
})

// Providers wont be use as frequently as factories
// Use when using a configuration.
// Othewise it makes more sense to just use a factory





