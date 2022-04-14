var app = angular.module("App", []);

// ////////////////////////////////////////////////
app.controller("Ejemplo1", function($scope) {
  $scope.numeroEjemplo = "1";
  $scope.firstName = "Carlos";
  $scope.lastName = "Prinmero";
});

// ////////////////////////////////////////////////
app.controller("Ejemplo2", function($scope) {
  $scope.numeroEjemplo = "2";
  $scope.firstName = "Carlos";
  $scope.lastName = "Alohan";
});

// ////////////////////////////////////////////////
app.controller("Ejemplo3", function($scope) {
  $scope.numeroEjemplo = "3";
  $scope.color = "lightblue";

});
// ////////////////////////////////////////////////
app.controller("Ejemplo4", function($scope) {
  $scope.numeroEjemplo = "4";
  $scope.quantity = "5";
  $scope.cost = "2";

});
// ////////////////////////////////////////////////
app.controller("Ejemplo5", function($scope) {
  $scope.numeroEjemplo = "5";
  $scope.quantity = "5";
  $scope.cost = "2";

});
// ////////////////////////////////////////////////
app.controller("Ejemplo6", function($scope) {
  $scope.numeroEjemplo = "6";
  $scope.firstName = "Carlos";
  $scope.lastName = "Aleman";

});
// ////////////////////////////////////////////////
app.controller("Ejemplo7", function($scope) {
  $scope.numeroEjemplo = "7";
  $scope.persona = {
    firstName: "Carlos",
    lastName: "Aleman"
  };

});
// ////////////////////////////////////////////////
app.controller("Ejemplo8", function($scope) {
  $scope.numeroEjemplo = "8";
  $scope.points = [1, 2, 3, 4, 5, 10, 15, 20];

});