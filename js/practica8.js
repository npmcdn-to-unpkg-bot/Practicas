var app=angular.module('app', ['ngResource']);
//llamamos la factoria en la funcion para utilizar en el controlador
app.controller('controlador',function($scope,listado){
	
	$scope.diccionario = [{id:"",nombre:"",apellido:"",telefono:"",materia:""}];
	$scope.lista = listado.get();
	$scope.agregar = function(){
		$scope.diccionario.push({id:$scope.idE,nombre:$scope.nombreE,apellido:$scope.apellidoE,telefono:$scope.telefonoE,materia:$scope.materiaE});
		$scope.id = "";
		$scope.nombre = "";
		$scope.apellido = "";
		$scope.telefono = "";
		$scope.materia = "";
	};
	$scope.eliminar =function(){
		$scope.lista=[];
	};
	$scope.disabledAgregar=function() {
  		return ($scope.disabledAgregar===false)
	};
	$scope.ordenar = function(order){
		$scope.ordenado=order;
	};
});
//resource se utiliza en una funcion normal y 
//en una factoria

app.factory('listado',function($resource){
	//ayuda para obtener los datos del json.
	/*$http.get('js/datos.json').success(function(data){
		$scope.datos = data;
	})*/	
	return $resource("json/datos.json", {}, {get:{method:'GET',isArray:true}});
	//para leer el datos2 como no es array cambiar la propiedad en false
});

