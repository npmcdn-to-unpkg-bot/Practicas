var app=angular.module('app', ['ngResource']);

function listar($scope,listado){
	$scope.diccionario = [{id:"",nombre:"",autor:"",precio:"",cantidad:""}];
	$scope.lista = listado.get();
	$scope.agregar = function(){
		$scope.diccionario.push({id:$scope.idE,nombre:$scope.nombreE,autor:$scope.autorE,precio:$scope.precioE,cantidad:$scope.cantidadE});
		$scope.id = "";
		$scope.nombre = "";
		$scope.autor = "";
		$scope.precio = "";
		$scope.cantidad = "";
	$scope.formVisibility=false;
	console.log($scope,formVisibility)
	};
	//ORDENAR 
	$scope.ordenar = function(order){
		$scope.ordenado=order;
	};
	//SUMAR 
	$scope.suma =function(indice){
		var suma=0;
		for (var i = 0; i < $scope.lista.books[indice].salesPerMonth.length;i++){
			suma=suma+$scope.lista.books[indice].salesPerMonth[i].amount;
		}
		return suma;
	};

	//ELIMINAR DATOS 
	$scope.eliminar =function(){
		$scope.lista=[];
		$scope.diccionario=[];
	};
	//DESCATIVAR BOTON
	$scope.disabledAgregar=function() {
  		return ($scope.disabledAgregar===false)
	};
	//OCULTAR FORMULARIO
	$scope.formVisibility=false;

	$scope.ShowForm=function(){
		$scope.formVisibility=true;
		console.log($scope,formVisibility)
	};
}
app.factory('listado',function($resource){
	return $resource('https://whispering-woodland-9020.herokuapp.com/getAllBooks');
});
app.controller("controlador",listar);

