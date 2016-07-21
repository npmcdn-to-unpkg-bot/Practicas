var app = angular.module("formulario",[]);

function listar($scope){
	$scope.diccionario = [{nombres:"Alex Castillo",telefono:"2545266",materia:"Contabilidad"},{nombres:"Daniel Betancourt",telefono:"2545266",materia:"Arquitectura de Computadores"}];
	$scope.agregar = function(){
		$scope.diccionario.push({nombres:$scope.nombreEntrada,telefono:$scope.telefonoEntrada,materia:$scope.materiaEntrada});
		$scope.nombres = "";
		$scope.telefono = "";
	};
	//nombre de la funcion, nombre del parametro y nombre del modelob
	$scope.ordenar = function(order){
		$scope.ordenado=order;
	};
	
	$scope.disabledAgregar=function() {
  		return ($scope.disabledAgregar===false)
	};
}
app.controller("controlador",listar);