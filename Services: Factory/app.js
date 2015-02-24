var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory){
	console.log(myFactory.getdata())
	console.log(myFactory.mydata)
});


app.factory('myFactory', function(){
	var mydata = "this is some other data"
	var myfunc = function() {}
	return {
		getdata: function(){
			return mydata
		}
	}
});

app.factory('Auth', function(){
	var current_user = {}
	return {
		setUser: function(){},
		login: function(){},
		logout: function(){}
	}
})

// Factory must return something
// Most common use to bundle together lots of fuctionallity

// Cannot handle all auth on FE side, things that dont need to be secure.