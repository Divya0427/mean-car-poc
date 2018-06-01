angular.module('carController', [])

	// inject the cars service factory into our controller
	.controller('mainController', ['$scope','$http','CarsFactory', function($scope, $http, CarsFactory) {
		$scope.formData = {};
		$scope.loading = true;
		var carsInfo = [
	        {
	            "name": "Ford",
	            "models": ["Edge", "Escape"]
	        },
	        {
	            "name": "Acura",
	            "models": ["ILX", "MDX"]
	        }
	    ]

		/*
		//Initially ran this to save data through application
		CarsFactory.createCars(carsInfo).success(function(data) {
			console.log("dataAfterCreatingCars::");
			console.log(data);
		}).catch(function(err) {
			console.log("err@creating");
			console.log(err);
		});*/

		$scope.handleChange = function(val) {
			$scope.showCarModels = true;
			$scope.selectedModel = '';
			$scope.selectedCar = val;
			CarsFactory.getCarModels(val).success(function(data) {
				$scope.models = data && data[0] && data[0].models;
			});
		}

		$scope.handleModelChange = function(model) {
			$scope.selectedModel = model;
		}
		
		/*My assignment starts here!!*/
		CarsFactory.getCars().success(function(data) {
			$scope.cars = data;
			$scope.loading = false;
		})
		/*My assignment ends here!!*/
	}]);
