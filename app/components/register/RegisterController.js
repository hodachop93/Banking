
angular
.module('bankingApp.register', ['bankingApp.account'])
.controller('RegisterController', RegisterController)
.directive('compareTo', compareTo);

RegisterController.$inject = ['$scope','$location','listAccount'];
function RegisterController($scope, $location, listAccount){
	$scope.register = register;

	function register(){
		var account = {};
		var now = Date.now();
		account.idAccount = now;
		account.username = $scope.username;
		account.fullname = $scope.fullname;
		account.password = $scope.password;
		account.balance = 0;

		listAccount.accounts.push(account);

		$location.path('/home');
	}
}

function compareTo(){
	return {
		restrict: 'A',	
		require: "ngModel",
		scope: {
			otherModelValue : "=compareTo"
		},
		link: function(scope, element, attributes, ngModel){
			ngModel.$validators.compareTo = function(modelValue){
				return modelValue == scope.otherModelValue;
			}

			scope.$watch("otherModelValue", function(){
				ngModel.$validate();
			})
		}
	}
}

