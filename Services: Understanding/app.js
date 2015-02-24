var app = angular.module('app', []);

app.controller('MainController', function($scope,Users,Auth){
	Auth.current_user()
	Users.all()
	Users.find('id')
});

// Service Types:
// 	- Constants
// 	- Values
// 	- Factories
// 	- Services
// 	- Providers
// 	- Decorators
