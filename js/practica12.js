
var app = angular.module("app",["ngResource"]);
//Definir el controlador
app.controller("controlador",function($scope,datos_cuenta,datos_cliente,datos_transaccion){
	$scope.mensaje ="saludos";
	$scope.lista_cliente= datos_cliente.get();
	$scope.lista_cuenta= datos_cuenta.get();
	$scope.lista_transaccion= datos_transaccion.get();
});
 //Definir el factori que retorne datos del webservice
app.factory("datos_cliente",['$resource',function($resource){
 	return $resource('http://127.0.0.1:8000/api/cliente/',{},{get:{method:'GET',pararms:{}, isArray:true}});
 	}
]) 
app.factory("datos_cuenta",['$resource',function($resource){
 	return $resource('http://127.0.0.1:8000/api/cuenta/',{},{get:{method:'GET',pararms:{}, isArray:true}});
 	}
])
app.factory("datos_transaccion",['$resource',function($resource){
 	return $resource('http://127.0.0.1:8000/api/transaccion/',{},{get:{method:'GET',pararms:{}, isArray:true}});
 	}
])
 