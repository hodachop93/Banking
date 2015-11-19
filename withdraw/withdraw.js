var withDraw = angular.module('withDraw', []);

withDraw.controller('transactionCtrl', function($scope, $filter, transactionService) {
	$scope.addNewTransaction = function(){
		var newTransaction = {};
		
		var current = new Date();
		var date = $filter('date')( current, 'dd/MM/yyyy');
		var hour = $filter('date')( current, 'HH:mm:ss');

		newTransaction.id = $scope.idAccount;
		newTransaction.time = date + " " + hour;
		newTransaction.amount = $scope.amount;

		transactionService.transactionHistory.push(newTransaction);
	}
});

withDraw.controller('showTransactionHistoryCtrl', function($scope, transactionService){
	
	var history = transactionService.transactionHistory;

	$scope.showTransactionHistory = function(idAccount){
		$scope.transactionHistory = [];

		angular.forEach(history, function(item){
			if (item.id == idAccount){
				$scope.transactionHistory.push(item);
			}
		});
	};	
});

withDraw.service('transactionService', function () {
	this.transactionHistory = [
	{	
		id: 1,
		time: "20/08/2015 9:00:00",
		amount: 210
	},
	{	
		id: 2,
		time: "20/08/2015 9:00:00",
		amount: 210
	},
	{	
		id: 3,
		time: "20/08/2015 9:00:00",
		amount: 10
	},
	{	
		id: 1,
		time: "20/08/2015 9:00:00",
		amount: 30
	},
	{	
		id: 1,
		time: "20/08/2015 9:00:12",
		amount: 60
	},
	{	
		id: 2,
		time: "20/08/2015 9:30:00",
		amount: 80
	}
	];	
});