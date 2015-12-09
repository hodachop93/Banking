angular
.module('bankingApp.customer', ['bankingApp.transaction'])
.controller('CustomerController', CustomerController);

CustomerController.$inject = ['$scope', '$location',
'listTransaction', 'listAccount'];


function CustomerController($scope, $location, 
	listTransaction, listAccount){


	$scope.loadTransactionHistory = loadTransactionHistory;
	$scope.withDraw = withDraw;
	$scope.deposit = deposit;
	$scope.filterTransaction = filterTransaction;
	$scope.loadCurrentAccount = loadCurrentAccount;
	$scope.checkCurrentAccountExist = checkCurrentAccountExist
	$scope.transfer = transfer;
	$scope.deleteTransaction = deleteTransaction;
	
	function checkCurrentAccountExist(){
		var valid = listAccount.checkCurrentAccountExist();
		// if (valid){
		// 	console.log("fade");
		// 	$('#page-wrapper').fadeOut();
		// 	$('#page-wrapper').fadeIn(3000);
		// }
		return valid;
	}

	function loadTransactionHistory(){
		console.log("load transactions");
		loadCurrentAccount();
		$scope.accounts = listAccount.accounts;
		$scope.transactions = listTransaction.transactions;
	}

	function loadCurrentAccount(){
		$scope.currentAccount = listAccount.currentAccount;
	}

	function filterTransaction(transaction){
		if($scope.currentAccount.username != null){
			return transaction.From === $scope.currentAccount.username ||
			transaction.To === $scope.currentAccount.username;
		}
		
	}

	function createTransaction(idTransaction, from, to, time, type, amount){
		var newTransaction = {};
		newTransaction.idTransaction = idTransaction;
		newTransaction.From = from;
		newTransaction.To = to;
		newTransaction.time = time;
		newTransaction.type = type;
		newTransaction.amount = amount;

		return newTransaction;
	}

	function withDraw(amount){
		if($scope.currentAccount.balance >= amount){
			$scope.currentAccount.balance -= amount;

			var now = Date.now();
			var from = $scope.currentAccount.username;
			var to = $scope.currentAccount.username;
			var type = "withdraw";


			var newTransaction = createTransaction(now, from, to, now, type, amount);


			$scope.transactions.push(newTransaction);
			showNotification();
		}else{
			showErrorBalance();
		}
	}

	function deposit(amount){
		
		$scope.currentAccount.balance += amount;

		var now = Date.now();
		var from = $scope.currentAccount.username;
		var to = $scope.currentAccount.username;
		var type = "deposit";

		var newTransaction = createTransaction(now, from, to, now, type, amount);

		$scope.transactions.push(newTransaction);
		showNotification();
	}

	function transfer(usernameTo, amount){

		var accounts = listAccount.accounts;
		var isAccountToExist = false;
		

		for (var i=0; i<accounts.length; i++){
			if (usernameTo == accounts[i].username){
				accountTo = accounts[i];
				isAccountToExist = true;
				break;
			}
		}

		if(!isAccountToExist){
			alert("The account you want to transfer is not exist");
			return;
		}else{
			startTransfering(accountTo, amount);
		}
	}

	function startTransfering(accountTo, amount){
		$scope.currentAccount.balance -= amount;
		accountTo.balance += amount;

		var now = Date.now();
		var from = $scope.currentAccount.username;
		var to = accountTo.username;
		var type = "transfer";

		var newTransaction = createTransaction(now, from, to, now, type, amount);
		$scope.transactions.push(newTransaction);
		
		showNotification();
		
	}

	function deleteTransaction(idTransaction){
		var index = getIndexToRemove(idTransaction);

		var transactions = listTransaction.transactions;
		transactions.splice(index, 1);
	}

	function getIndexToRemove(idTransaction){
		var transactions = listTransaction.transactions;

		for (var i=0; i<transactions.length; i++){
			if (idTransaction === transactions[i].idTransaction){
				return i;
			}
		}
	}

	function showNotification(){
		$('.notification').fadeIn();
		$('.notification').fadeOut(1000);
	}

	function showErrorBalance(){
		$('#error-balance').fadeIn();
		$('#error-balance').fadeOut(3000);
	}
}




