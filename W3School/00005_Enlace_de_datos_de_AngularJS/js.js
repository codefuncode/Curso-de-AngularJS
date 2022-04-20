var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.texto = "Click pata cmabiar el texto";
  //  Declaracion de una fiuncion 
  $scope.changeName = function() {
    $scope.texto = "Texto comabiado con el evento Click";
  }
});