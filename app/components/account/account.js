var account = angular.module('account', []);

var model = {
	count : 4,
	customers: [
		{id : 0, name : "Hop Dac Ho", balance : 100},
		{id : 1, name : "Dan Du Chau", balance : 200},
		{id : 2, name : "Danh Thanh Quach", balance : 200},
		{id : 3, name : "Ha Ngoc Ho", balance : 200}
	]
};

account.controller('informationCtrl', function($scope) {
	$scope.info = model;

	$scope.addNewCustomer = function(nameText, balanceText){
		var idAdd = $scope.info.count;
		$scope.info.count++;
		$scope.info.customers.push({
			id : idAdd,
			name : nameText,
			balance : balanceText
		});
	}
});



