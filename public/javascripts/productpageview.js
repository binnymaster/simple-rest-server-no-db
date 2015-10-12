//var sampleApp = angular.module('sampleApp', []);
var listitem = angular.module('listitem', ['ngRoute']);
listitem.config(['$routeProvider',
  function($routeProvider) {
  	alert("hi");
    $routeProvider.when('/', {
		templateUrl:'templates/home.html',
		controller: 'homeController'
    })
    .when('/aboutus', {
		templateUrl: 'templates/aboutus.html',
		controller: 'aboutusController'
    })
    .otherwise({
	redirectTo: '/'
    })
}]);


listitem.controller('homeController', function($scope) {
		alert($scope.message);
	$scope.message = 'This is Home screen';
	
});


listitem.controller('aboutusController', function($scope) {

	$scope.message = 'This ABout USscreen';

});


/*var app=angular.module('listitem',['ngRoute'])
app.config(['$routeProvider',function($routeProvider){
	alert("hi");
	$routeProvider.when('/',{
		templateUrl:'templates/home.html',
		controller:'homecontroller'
	})
	.otherwise({
		redirectTo:'/'
	})
}]);
app.controller('homecontroller',function($scope){
	$scope.message="hiiiiiiiiiiiiiiii";
});*/