var app = angular.module('documento', []);
app.controller('controlador', function($scope, $http) {
    $http.get("json/doc.json")
    .then(function(response) {
        $scope.datos = response.data;
    });
    $scope.ordenar = function(order){
		$scope.ordenado=order;
	};
});