angular.module('bankingApp', ['bankingApp.transaction', 'bankingApp.account',
	'ngRoute', 'bankingApp.login', 'bankingApp.register'])

.config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider){
	$routeProvider
	.when('/register', {
		templateUrl: 'app/components/register/RegisterView.html',
		controller: 'RegisterController'
	})
	.when('/login', {
		templateUrl: 'app/components/login/LoginView.html',
		controller: 'LoginController'
	})
}

