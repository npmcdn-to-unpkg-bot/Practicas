var app = angular.module("app",[]);

function entrada($scope){
	$scope.diccionario = [{nombres:"Maria Jose"},{nombres:"Alex Castillo"}];
	$scope.agregarNombre = function(){
		$scope.diccionario.push({nombres:$scope.nombreEntrada});
	};
	$scope.eliminarNombre = function(){
		$scope.diccionario=" ";
	};
}
app.controller("controlador",entrada);