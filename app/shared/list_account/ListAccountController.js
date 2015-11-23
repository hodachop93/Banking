angular
.module('bankingApp.account', [])

.controller('ListAccountController', ['$scope','listAccount', 
	function ($scope, listAccount) {
	
	$scope.accounts = listAccount.accounts;

	
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