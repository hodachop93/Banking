angular
.module('bankingApp.account', [])

.factory('listAccount', ['$http', '$q', function ($http, $q) {
	var accounts = [];
	var currentAccount = null;
	var deferredObj = $q.defer();
	var isLoggedIn = {status : false}; 
	
	$http.get('app/fake_data/list_accounts.json')
	.then(
			function(response){ //Scuccess callback
				// this callback will be called asynchronously when the response is available
				response.data.accounts.forEach(function(account){
					accounts.push(account);
				})
				/*console.log(response);*/
				deferredObj.resolve(accounts);
			},
			function(response){ //error callback
				// called asynchronously if an error occurs or server returns response with an error status.
				console.log(response);
			}
			);
	/*console.log(accounts);*/
	console.log("Dang o trong listAccount");

	function checkCurrentAccountExist(){
		if (this.currentAccount == null){
			return false;
		}else{
			return true;
		}
	}

	return{
		accounts : accounts,
		currentAccount : currentAccount,
		checkCurrentAccountExist : checkCurrentAccountExist,
		isLoggedIn : isLoggedIn
	}

}]);