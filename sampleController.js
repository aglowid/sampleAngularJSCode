angular.module('sampleApp')
  .controller('sampleController', ['$scope', '$rootScope', '$location', 'sampleService','ngDialog', '$filter',
    function($scope, $rootScope, $location, sampleService, ngDialog, $filter) 
    {

		$scope.products = [];
		$scope.getProducts = function(){
			sampleService.getProducts().then(function(data){					
					 $scope.products=data.data;					 
				  });
		}		

		$scope.addProduct=function()
		{			
			sampleService.addProduct($scope.product).then(function(data){	
				if(data.status===200)
				 {			
					sampleService.getProducts().then(function(data){					
						 $scope.products=data.data;					 
					  });
					$scope.product={};
				}
			});
		}

		$scope.deleteProduct=function(product)
		{
									 
			 sampleService.deleteProduct(product.productID).then(function(data){
				 if(data.status===200)
				 {
					 sampleService.getProducts().then(function(data){					
						 $scope.products=data.data;					 
					  });
				 }		 
			  });
			 
		}

		$scope.getProduct=function(product)
		{
									 
			 sampleService.getProduct(product.productID).then(function(data){
				 if(data.status===200)
				 {
					$scope.product = data.data;
				 }		 
			  });
			 
		}

		$scope.editProduct=function()
		{
									 
			 sampleService.editProduct($scope.product).then(function(data){
				 if(data.status===200)
				 {
					 sampleService.getProducts().then(function(data){					
						 $scope.products=data.data;					 
					  });
					$scope.product={};
				 }		 
			  });
			 
		}
	});
