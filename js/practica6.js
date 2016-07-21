var app = angular.module("formulario",[]);

function listar($scope,$http){
	$scope.diccionario = [{nombres:"Alex Castillo",telefono:"2545266",materia:"Contabilidad"},{nombres:"Daniel Betancourt",telefono:"2545266",materia:"Arquitectura de Computadores"}];
	$scope.agregar = function(){
		$scope.diccionario.push({nombres:$scope.nombreEntrada,telefono:$scope.telefonoEntrada,materia:$scope.materiaEntrada});
		$scope.nombres = "";
		$scope.telefono = "";
	$scope.formVisibility=false;
	console.log($scope,formVisibility)

	};
	//nombre de la funcion, nombre del parametro y nombre del modelob
	$scope.ordenar = function(order){
		$scope.ordenado=order;
	};
	//mostrar y ocultar un fomulario
	$scope.formVisibility=false;

	$scope.ShowForm=function(){
		$scope.formVisibility=true;
		console.log($scope,formVisibility)
	};
}
app.controller("controlador",listar);