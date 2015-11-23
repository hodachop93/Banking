angular
.module('bankingApp.transaction')

.factory('listTransaction', ['$http', '$q', function ($http, $q) {
	var transactions = [];
	var deferredObj = $q.defer(); 
	$http.get('app/fake_data/list_transactions.json')
		.then(
			function(response){ //Scuccess callback
				// this callback will be called asynchronously when the response is available
				response.data.transactions.forEach(function(transaction){
					transactions.push(transaction);
				})

				deferredObj.resolve(transactions);
			},
			function(response){ //error callback
				// called asynchronously if an error occurs or server returns response with an error status.

			}
			);

	return{
		transactions : transactions
	}

	/*var hopdata;
	var transactions = [];
	var deferredObj = $q.defer(); 
	$http.get('app/fake_data/list_transactions.json')
		.then(
			function(response){ //Scuccess callback
				// this callback will be called asynchronously when the response is available
				
				hopdata = response;
				console.log(JSON.stringify(response.data));
				console.log(response.data.transactions);
				deferredObj.resolve(hopdata);
				console.log(JSON.stringify(hopdata));
			},
			function(response){ //error callback
				// called asynchronously if an error occurs or server returns response with an error status.

			}
			);
	
	hopdata = deferredObj.promise;
	return{
		transactions : hopdata.data.transactions
	}*/
}]);


	


/*.factory('listTransaction', ['getTransactions', function (getTransactions) {
	var transactions = [];
	var hopdata = {};
	getTransactions.success(function(data){
		data.transactions.forEach(function (item) {
			var transaction = {};
			transaction.idTransaction = item.idTransaction;
			transaction.idAccountSend = item.idAccountSend;
			transaction.idAccountReceive = item.idAccountReceive;
			transaction.time = item.time;
			transaction.type = item.type;
			transaction.amount = item.amount;
            transactions.push(transaction);
        });
		console.log(transactions[0].time);
        
	});
	console.log(transactions[0].time);
	
	return {
		
		transactions : transactions
	}

*/