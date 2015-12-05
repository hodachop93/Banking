
angular
.module('bankingApp.login', ['bankingApp.account'])
.controller('LoginController', LoginController);

LoginController.$inject = ['$scope','$location','listAccount'];
function LoginController($scope, $location, listAccount){
	$scope.login = login;
	$scope.checkLogin = checkLogin;
	$scope.currentAccount = null;
	$scope.logout = logout;

	function checkLogin(){
		$scope.currentAccount = listAccount.currentAccount;
		return listAccount.isLoggedIn.status;
	}

	function logout(){
		console.log("logout");
		listAccount.currentAccount = null;
		listAccount.isLoggedIn.status = false;

		$location.path('/login');
	}
	
	function login(){
		var accounts = listAccount.accounts;
		var username = $scope.username;
		var password = $scope.password;

		for (var i=0; i<accounts.length; i++){
			if (username == accounts[i].username){
				if(password == accounts[i].password){
					listAccount.currentAccount = accounts[i];
					listAccount.isLoggedIn.status = true;
					console.log("login thanh cong");

					$location.path('/customer/dashboard');
					return;
				}else{
					continue;
				}
			}
		}
		$scope.error = "Your username or password is incorrect";
		console.log("login ko thanh cong");
	}


}

