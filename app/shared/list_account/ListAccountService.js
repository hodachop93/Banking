angular
.module('bankingApp.account', [])

.factory('listAccount', ['$http', '$q', '$location', 
	function ($http, $q, $location) {
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
				//console.log(JSON.stringify(response.data.accounts));
				//console.log(response);
				// deferredObj.resolve(accounts);
				deferredObj.resolve(response.data);


			},
			function(response){ //error callback
				// called asynchronously if an error occurs or server returns response with an error status.
				// console.log(JSON.stringify(response));
				deferredObj.reject(response);
			}
			);

	console.log(accounts);
	/*console.log(accounts);*/
	// console.log("Dang o trong listAccount");

	function checkCurrentAccountExist(){
		if (this.currentAccount == null){
			$location.path('/login');
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