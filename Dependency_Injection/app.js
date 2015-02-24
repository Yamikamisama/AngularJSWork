var app = angular.module('app', []);

app.controller('MainController', ['$scope', 'DataService', function(b, c){
	b.mydata = c.data
}]);

app.factory('DataService', ['AppendService', function(AppendService){
	return{
		data: AppendService.append("This is service Data")
	}
}])

app.factory('AppendService', function(){
	return{
		append: function(val){
			return val + " and this too!"
		}
	}
})


//Parameter is really dependency Injection
//The above is how to protect against minification