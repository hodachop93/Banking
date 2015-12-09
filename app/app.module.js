angular.module('bankingApp', ['bankingApp.transaction', 'bankingApp.account',
	'ngRoute', 'bankingApp.login', 'bankingApp.register', 'bankingApp.customer',
	'ngMessages'])
.config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'app/components/home/Home.html',
		controller: ''
	})
	.when('/customer/dashboard', {
		templateUrl: 'app/components/customer/CustomerDashboardView.html',
		controller: 'CustomerController'
	})
	.when('/with-depo', {
		templateUrl: 'app/components/customer/CustomerWithDepoView.html',
		controller: 'CustomerController'
	})
	.when('/transfer', {
		templateUrl: 'app/components/customer/CustomerTransferView.html',
		controller: 'CustomerController'
	})	
	.otherwise({ redirectTo: '/home' });
}


