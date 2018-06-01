angular.module('carService', [])
	// each function returns a promise object 
	.factory('CarsFactory', ['$http',function($http) {
		return {
			getCars: function() {
				return $http.get('/api/cars');				
			},
			createCars: function(carsData) {
				return $http.post('/api/cars', carsData);
			},			
			getCarModels: function(carType) {
				return $http.get('/api/cars/'+ carType);
			}			
		}
	}]);
