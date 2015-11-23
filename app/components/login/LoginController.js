
angular
.module('bankingApp.login', ['bankingApp.account'])
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
					listAccount.currentAccount = accounts[i];
					$location.path('/customer/' + listAccount.currentAccount.idAccount);
					break;
				}else{
					continue;
				}
			}
		}

		console.log("login that bai");
	}
}

