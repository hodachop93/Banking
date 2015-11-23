/*Containing methos for authenticaing a user, setting credentials, clear credentials*/

angular
.module('login.authenticate', [])
.factory('AuthenticateService', AuthenticateService);

AuthenticateService.$inject = ['$http', '$cookieStore', '$rootScope', 
'$timeout', 'UserService'];

var AuthenticateService = function('$http', '$cookieStore', '$rootScope', 
'$timeout', 'UserService'){
	var service = {};

	var login = function(username, password, callback){
		//Create a dummy authentication to simulate API call
		var responese;

		UserService.getByUserName(username)
			.then()
	}
}