var app = angular.module('app', []);

app.controller('MainController', function($scope, valService, twitterAPI){
	console.log(twitterAPI, valService());
});

// cannot be modified by a decorater
app.constant('twitterAPI', {url: "api.twitter.com/v1/"})

// values can be used by a decorater
// rely more on values
app.value('valService', function(){
	return "this is returned from the fn"
})