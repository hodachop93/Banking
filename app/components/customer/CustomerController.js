angular
.module('bankingApp.customer', ['bankingApp.transaction'])
.controller('CustomerController', CustomerController);

CustomerController.$inject = ['$scope','$routeParams', '$location',
 'listTransaction', 'listAccount'];

function CustomerController($scope,$routeParams, $location, 
	listTransaction, listAccount){
	$scope.showTransactionHistory = showTransactionHistory;
	$scope.addNewTransaction = addNewTransaction;

	$scope.listTransactionOfCustomer = [];
	$scope.customerId = $routeParams.customerId;
	$scope.currentAccount = listAccount.currentAccount;

	function showTransactionHistory(){

		angular.forEach(listTransaction, function(transaction){
			if (($scope.customerId==transaction.idAccountFrom) ||
			 ($scope.customerId==transaction.idAccountTo)){
				$scope.listTransactionOfCustomer.push(transaction);
			}
		})
	}

	function addNewTransaction(){

	}
}