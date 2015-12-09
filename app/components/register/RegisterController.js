
angular
.module('bankingApp.register', ['bankingApp.account'])
.controller('RegisterController', RegisterController)
.directive('compareTo', compareTo)
.directive('usernameAvailable', usernameAvailable);

RegisterController.$inject = ['$scope','$location','listAccount'];
function RegisterController($scope, $location, listAccount){
	$scope.register = register;

	function register(username){
		var account = {};
		var now = Date.now();
		console.log(username);
		account.idAccount = now;
		account.username = $scope.username;
		account.fullname = $scope.fullname;
		account.password = $scope.password;
		account.balance = 0;

		listAccount.currentAccount = account;
		listAccount.accounts.push(account);
		listAccount.isLoggedIn.status = true;
		$('body').removeClass('modal-open');
		$(".modal-backdrop").hide();
		$location.path('/customer/dashboard');
	}
}

function checkUsernameExist(username){
	var accounts = listAccount.accounts;
	for (var i=0; i<accounts.length; i++){
		if(username == accounts[i].username){
			return true;
		}
	}
	return false;
}

function compareTo(){
	return {
		restrict: 'A',	
		require: "ngModel",
		scope: {
			otherModelValue : "=compareTo"
		},
		link: function(scope, element, attributes, ngModel){
			ngModel.$validators.compareTo = function(model){
				return model == scope.otherModelValue;
			}

			scope.$watch("otherModelValue", function(){
				ngModel.$validate();
			})
		}
	}
}

usernameAvailable.$inject = ['$timeout', '$q', 'listAccount'];
function usernameAvailable($timeout, $q, listAccount){
	return {
    restrict: 'AE',
    require: 'ngModel',
    link: function(scope, element, attributes, ngModel) { 
      ngModel.$asyncValidators.usernameExists = function(modelValue) { 
        var valid = true;
        
        var accounts = listAccount.accounts;
        for(var i=0; i<accounts.length;i++){
        	if(modelValue == accounts[i].username){
        		valid = false;
        		break;
        	}
        }
        console.log(valid);

        var defer = $q.defer();
        $timeout(function(){
          ngModel.$setValidity('usernameExists', valid); 
          defer.resolve;
        }, 500);
        return defer.promise;
      };


    }
  } 
}

