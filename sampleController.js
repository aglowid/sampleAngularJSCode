
	

var app = angular.module('sampleApp', []);

app.controller('sampleController', ['$scope', 'UserService', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {

	$scope.users = [];
	$scope.user = {};
	$scope.mode = 'LIST';

	$scope.getAllUsers = function(){
		UserService.getAllUsers(function(data){
			$scope.users = data.data;
		});
	}


	$scope.add = function(){
		$scope.mode = 'ADD';
		$scope.user = {};
	}


	$scope.edit = function(userId){
		$scope.mode = 'EDIT';
		UserService.getUser({id: userId}, function(data){
			if(data.status == 200){
				$scope.user = data.data;
			}
		});
	}

	$scope.delete = function(userId){
		UserService.deleteUser({id: userId}, function(data){
			if(data.status == 200){
				$scope.getAllUsers();
				$scope.user = {};
			}
		});
	}
        
	$scope.save = function(){
		if($scope.mode == 'EDIT'){
			UserService.updateUser({id: $scope.user.id}, function(data){
				if(data.status == 200){
					$scope.getAllUsers();
					$scope.user = {};
					$scope.mode = 'LIST';
				}
			});
		}
		else{
			UserService.createUser(function(data){
				if(data.status == 200){
					$scope.getAllUsers();
					$scope.user = {};
					$scope.mode = 'LIST';
				}
			});
		}
	}
	
	$scope.getAllUsers();

    }]);

