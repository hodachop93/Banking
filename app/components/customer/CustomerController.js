angular
.module('bankingApp.customer', ['bankingApp.transaction'])
.controller('CustomerController', CustomerController);

CustomerController.$inject = ['$scope','$routeParams', '$location',
'listTransaction', 'listAccount'];

function CustomerController($scope,$routeParams, $location, 
	listTransaction, listAccount){
	$scope.loadTransactionHistory = loadTransactionHistory;
	$scope.withDraw = withDraw;
	$scope.deposit = deposit;
	$scope.filterTransaction = filterTransaction;
	$scope.loadCurrentAccount = loadCurrentAccount;
	$scope.checkCurrentAccountExist = listAccount.checkCurrentAccountExist;
	$scope.transfer = transfer;

	function loadTransactionHistory(){
		loadCurrentAccount();
		$scope.transactions = listTransaction.transactions;
		

	}

	function loadCurrentAccount(){
		$scope.currentAccount = listAccount.currentAccount;
	}

	function filterTransaction(transaction){
		if($scope.currentAccount.idAccount != null){
			return transaction.idAccountFrom === $scope.currentAccount.idAccount ||
				transaction.idAccountTo === $scope.currentAccount.idAccount;
		}
		
	}

	function withDraw(amount){

		if(amount >= $scope.currentAccount.balance){
			alert("The amount cannot be more than your balance!!!");
			return;
		}
		
		$scope.currentAccount.balance -= amount;

		var newTransaction = {};
		newTransaction.idTransaction = Date.now();
		newTransaction.idAccountFrom = $scope.currentAccount.idAccount;
		newTransaction.idAccountTo = $scope.currentAccount.idAccount;
		newTransaction.time = Date.now();
		newTransaction.type = "withdraw";
		newTransaction.amount = amount;
		
		$scope.transactions.push(newTransaction);

		console.log("balance trong scope: " + $scope.currentAccount.balance);
		console.log("balance trong service: " + listAccount.currentAccount.balance);
	}

	function deposit(amount){
		
		if(amount >= $scope.currentAccount.balance){
			alert("The amount cannot be more than your balance!!!");
			return;
		}
		
		$scope.currentAccount.balance += amount;

		var newTransaction = {};
		newTransaction.idTransaction = Date.now();
		newTransaction.idAccountFrom = $scope.currentAccount.idAccount;
		newTransaction.idAccountTo = $scope.currentAccount.idAccount;
		newTransaction.time = Date.now();
		newTransaction.type = "deposit";
		newTransaction.amount = amount;

		$scope.transactions.push(newTransaction);
	}

	function transfer(idAccountTo, amount){
		console.log(amount);

		if(amount >= $scope.currentAccount.balance){
			alert("The amount cannot be more than your balance!!!");
			return;
		}

		var accounts = listAccount.accounts;
		var isAccountToExist = false;
		var accountTo = null;
		

		for (var i=0; i<accounts.length; i++){
			if (idAccountTo == accounts[i].idAccount){
				accountTo = accounts[i];
				isAccountToExist = true;
				break;
			}
		}

		if(!isAccountToExist){
			alert("Id account you want to transfer is not exist");
			return;
		}else{
			startTransfering(accountTo, amount);
		}
	}

	function startTransfering(accountTo, amount){
		$scope.currentAccount.balance -= amount;
		accountTo.balance += amount;

		var newTransaction = {};
		newTransaction.idTransaction = Date.now();
		newTransaction.idAccountFrom = $scope.currentAccount.idAccount;
		newTransaction.idAccountTo = accountTo.idAccount;
		newTransaction.time = Date.now();
		newTransaction.type = "transfer";
		newTransaction.amount = amount;

		$scope.transactions.push(newTransaction);
		
	}

}




