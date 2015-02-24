var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory){
	console.log(myFactory.getData())
	myFactory.reverse()
	console.log(myFactory.getData())
});

app.factory('myFactory', function(){
	var myString = "This is some other data"
	var addToString = function(newstr){
		myString += newstr
	}
	return {
		getData: function(){return myString},
		setData: function(data) { myString = data},
		addData: addToString
	}
});

app.config(function($provide){
	$provide.decorator('myFactory', function($delegate){
		$delegate.reverse = function(){
			$delegate.setData($delegate.getData().split('').reverse().join(''))
		}
		return $delegate
	})
})

//  Decorators are used to modify other services
//  Also great for modifing external libraies without having to go in and actually modify their code