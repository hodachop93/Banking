angular
.module('bankingApp.account')

.factory('listAccount', ['$http', '$q', function ($http, $q) {
	var accounts = [];
	var deferredObj = $q.defer(); 
	
	$http.get('app/fake_data/list_accounts.json')
	.then(
			function(response){ //Scuccess callback
				// this callback will be called asynchronously when the response is available
				response.data.accounts.forEach(function(account){
					accounts.push(account);
				})
				console.log(response);
				deferredObj.resolve(accounts);
			},
			function(response){ //error callback
				// called asynchronously if an error occurs or server returns response with an error status.
				console.log(response);
			}
			);
	console.log(accounts);
	return{
		accounts : accounts
	}

}]);