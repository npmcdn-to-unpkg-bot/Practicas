
var app = angular.module("app",["ngResource"]);
//Definir el controlador
app.controller("controlador",function($scope,datos){
	$scope.mensaje ="saludos";
	$scope.lista= datos.get();
});
 //Definir el factori que retorne datos del webservice
 app.factory("datos",['$resource',function($resource){
 	return $resource('http://127.0.0.1:8000/api/materia/',{},{get:{method:'GET',pararms:{}, isArray:true}});
 	}
 ])
 