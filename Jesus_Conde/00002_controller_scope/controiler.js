//  Definicion de un ncontgrolador con datos iterables 
// //////////////////////////////////
//  Instancia de modulo de AngulasJs1.5 
var xxxxxxxxx = angular.module('myApp', []);
// //////////////////////////////////

xxxxxxxxx.controller('myCtrl', function($scope) {

  //  Declaramos un objeto utilizando la variable 
  // $scope 
  //  DEfinir mas de un objeto aquí 
  $scope.persona = [{
    nombre: "Carlos 1",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 2",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 3",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 4",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 5",
    apellido: "Aleman"
  }];

  $scope.persona1 = [{
    nombre: "Carlos 1",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 2",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 3",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 4",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 5",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 6",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 7",
    apellido: "Aleman"
  }, {
    nombre: "Carlos 8",
    apellido: "Aleman"
  }];

  // Usar otras propiedades
  $scope.size = {
    persona: $scope.persona.length,
    persona1: $scope.persona1.length,
  };

});