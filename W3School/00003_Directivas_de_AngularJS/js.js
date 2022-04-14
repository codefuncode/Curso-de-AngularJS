var app = angular.module('App', []);

app.controller('Nombre_Controlador', function($scope) {

  $scope.name = "John Doe";

});

app.controller("Ejemplo1", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});

app.controller('Ejemplo2', function($scope) {
  $scope.count = 0;
  //  Definición de funciones en AngularjS
  $scope.myFunction = function() {
    $scope.count++;
  }
});