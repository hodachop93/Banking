
angular
.module('bankingApp.login', [])
.controller('LoginController', LoginController);

LoginController.$inject = ['$scope','$location','listAccount'];
function LoginController($scope, $location, listAccount){
	$scope.login = login;
	
	var accounts = listAccount.accounts;



	function login(){
		var idAccount = $scope.idAccount;
		var password = $scope.password;

		for (var i=0; i<accounts.length; i++){
			if (idAccount == accounts[i].idAccount){
				if(password == accounts[i].password){
					console.log("login thanh cong");
				}else{
					continue;
				}
			}
		}

		$location.path('/home');
	}
}

