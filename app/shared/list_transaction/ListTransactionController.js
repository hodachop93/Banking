angular
.module('bankingApp.transaction', ['bankingApp.account'])

.controller('ListTransactionController', ['$scope','listTransaction',
	function ($scope, listTransaction, listAccount) {
	
	$scope.transactions = listTransaction.transactions;

	
	/*getTransactions.success(function(data){
		$scope.data = data;
		console.log(JSON.stringify($scope.data));
		console.log(JSON.stringify($scope.data));
	});
	console.log(JSON.stringify($scope.data));
	//save data to a service
	listTransaction.data = $scope.data;
	
	console.log(JSON.stringify(listTransaction.data));*/

	

}]);											