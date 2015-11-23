
angular
.module('bankingApp.register', ['bankingApp.account'])
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['$scope','$location','listAccount'];
function RegisterController($scope, $location, listAccount){
	$scope.register = register;

	function register(){
		var account = {};
		var now = Date.now();
		account.idAccount = now;
		account.username = $scope.username;
		account.password = $scope.password;
		account.balance = 0;

		listAccount.accounts.push(account);

		$location.path('/home');
	}
}

