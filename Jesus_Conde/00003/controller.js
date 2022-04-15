//  Definicion de un ncontgrolador con datos iterables 

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

  $scope.persona = [{
    nombre: "Carlos 1",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 2",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 3",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 4",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 5",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 6",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 7",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 8",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 9",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }, {
    nombre: "Carlos 10",
    apellido: "Aleman",
    url: "https://www.w3schools.com/w3css/img_avatar3.png"
  }];
});