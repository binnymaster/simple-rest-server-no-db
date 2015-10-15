var listitem = angular.module('listitem', ['ngRoute','itemctrl']);
listitem.config(['$routeProvider',
  function($routeProvider) {
  	
    $routeProvider.when('/home', {
		templateUrl:'Home.html',
		controller: 'homeController'
    })
    .when('/aboutus', {
		templateUrl: 'Aboutus.html',
		controller: 'aboutusController'
    })
    .otherwise({
	redirectTo: '/home'
    })
}]);


listitem.controller('homeController', function($scope) {
		
	$scope.message = 'This is Home screen';
	
});


listitem.controller('aboutusController', function($scope) {

	$scope.message ='This ABout USscreen';

});