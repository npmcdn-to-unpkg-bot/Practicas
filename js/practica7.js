var app=angular.module('miApp', ['ngRoute','ngResource'])
//link y controlador de js de todas las paginas
app.config(function($routeProvider) {
	$routeProvider
		.when('/pg1',{
			controller:'controlador1',
			templateUrl:'pagina1.html'
		})
		.when('/pg2',{
			controller:'controlador2',
			templateUrl:'pagina2.html'
		})
		.when('/pg3',{
			controller:'controlador3',
			templateUrl:'pagina3.html'
		})
		.when('/pg4',{
			controller:'controlador4',
			templateUrl:'pagina4.html'
		})
		.when('/pg5',{
			controller:'controlador5',
			templateUrl:'pagina5.html'
		})
		.when('/pg6',{
			controller:'controlador6',
			templateUrl:'pagina6.html'
		})
		.when('/pg8',{
			controller:'controlador8',
			templateUrl:'pagina8.html'
		})
		.when('/pg9',{
			controller:'controlador9',
			templateUrl:'pagina9.html'
		})
		.when('/pg10',{
			controller:'controlador10',
			templateUrl:'pagina10.html'
		})
		.otherwise({
			redirectTo:'/index.html'
		});
});
//factory para la practica 1 ^ 2
app.factory('listaNombres',function(){
	return [{materia:'Programación Avanzada',credito:"2"},{materia:'Ensamblador',credito:"8"},{materia:'Contabilidad',credito:"4"}];
});
//factory para la practica 3
app.factory('diccionario',function(){
	return [{nombre:"María Ojeda"},{nombre:"Adriana Gómez"},{nombre:"Mónica Coronel"}];
});
//factory para la practica 4
app.factory('pract4',function(){
	return [{nombre:"Luis",telefono:"0994767996",materia:"Programacion Avanzada"},{nombre:"Elvis",telefono:"0994767997",materia:"Contabilidad de Costos"}];
});
//factory para el controlador 8
app.factory('listados',function($resource){
	return $resource("json/datos.json", {}, {get:{method:'GET',isArray:true}});
});
//factory para el controlador 9
app.factory('listado',function($resource){
	return $resource('https://whispering-woodland-9020.herokuapp.com/getAllBooks');
});

//AQUI SE ADMINISTRA LOS CONTROLADORES DE LOS JS
app.controller('controlador2',function($scope,listaNombres){
	$scope.nombre="Maria José";
	$scope.lista=['lazzy','ruffo','violeta'];
	$scope.diccionario=listaNombres;
});

app.controller('controlador3',function($scope,diccionario){
	$scope.diccionario=diccionario;
	$scope.AgregarNombre=function(){
		$scope.diccionario.push({nombre:$scope.NombreEntrada});
		$scope.NombreEntrada="";
	};
	$scope.EliminarNombre=function(){
		$scope.diccionario=[];
	};
});

app.controller('controlador4',function($scope,pract4){
	$scope.diccionario=pract4;
	$scope.AgregarListado=function(){
		$scope.diccionario.push({nombre:$scope.NombreEntrada,telefono:$scope.TelefonoEntrada,materia:$scope.MateriaEntrada});
		$scope.NombreEntrada="";
		$scope.TelefonoEntrada="";
		$scope.MateriaEntrada="Contabilidad de Costos";
	};
	$scope.EliminarListado=function(){
		$scope.diccionario=[];
	};
	$scope.OrdenarListado=function(orden){
		$scope.ordenado=orden;
	};
});

app.controller('controlador5',function($scope,pract4){
	$scope.diccionario=pract4;	
	$scope.agregar = function(){
		$scope.diccionario.push({nombres:$scope.nombreEntrada,telefono:$scope.telefonoEntrada,materia:$scope.materiaEntrada});
		$scope.nombre = "";
		$scope.telefono = "";
	};
	$scope.ordenar = function(order){
		$scope.ordenado=order;
	};
	
	$scope.disabledAgregar=function() {
  		return ($scope.disabledAgregar===false)
	};
});

app.controller('controlador6',function($scope,pract4){
	$scope.diccionario =pract4;
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
});

app.controller('controlador8',function($scope,listados){
	$scope.lista = listados.get();
});

app.controller('controlador9',function($scope,$http){
	$http.get("json/doc.json")
    .then(function(response) {
        $scope.datos = response.data;
    });
    

});

app.controller('controlador10',function($scope,listado){
	
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
	
});

function verificar($scope){
	$scope.nombre="Jose";
}
app.controller('controlador',verificar);