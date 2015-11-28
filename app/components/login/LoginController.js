
angular
.module('bankingApp.login', ['bankingApp.account'])
.controller('LoginController', LoginController);

LoginController.$inject = ['$scope','$location','listAccount'];
function LoginController($scope, $location, listAccount){
	$scope.login = login;
	$scope.getIdAccountError = getIdAccountError;
	/*$scope.isLoggedIn = false;*/
	
	function login(){
		var accounts = listAccount.accounts;
		var idAccount = $scope.idAccount;
		var password = $scope.password;

		for (var i=0; i<accounts.length; i++){
			if (idAccount == accounts[i].idAccount){
				if(password == accounts[i].password){
					console.log("login thanh cong");
					listAccount.currentAccount = accounts[i];
					console.log(listAccount.currentAccount.idAccount);
					
					$location.path('/customer/dashboard');
					return;
				}else{
					continue;
				}
			}
		}
		$scope.error = "Your id account or password is incorrect";
		console.log("login ko thanh cong");
	}

	function getIdAccountError(error){
		if(angular.isDefined(error)){
			if(error.required){
				return "Please enter a value";
			}else if(error.pattern){
				return "Your id only contains numbers";
			}else if(error.minlength || error.maxlength){
				return "Please enter a valid id with 13 characters";
			}
		}
	}
}

