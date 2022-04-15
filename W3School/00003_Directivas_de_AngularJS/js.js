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

// app.directive("DirectivaComentario", function() {
//   return {
//     restrict: "M",
//     replace: true,
//     template: "<div class='w3-col s4 w3-card w3-padding-large' >" +
//       "<button class='w3-button w3-green' ng-click='myFunction()'>" +
//       "Click me!" +
//       "</button>" +
//       "<p>" +
//       "Comentario :)" +
//       "</p>" +
//       "</div>"
//   };
// });