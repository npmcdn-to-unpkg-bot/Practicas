//
var app=angular.module("primero",[]);
/* vamos a agregar el nombre del controlador y una funcion implicita (el mismo nombre)---"controlador"=nombre del controlador ---- function($scope)=definimos los elementos 
globales en el java scrip*/
app.controller("controlador",function($scope){
	$scope.nombre="Maria José";
	$scope.lista=['lazzy','ruffo','violeta'];
	$scope.diccionario=[{materia:'Programación Avanzada',credito:"2"},{materia:'Ensamblador',credito:"8"},{materia:'Contabilidad',credito:"4"}];
});