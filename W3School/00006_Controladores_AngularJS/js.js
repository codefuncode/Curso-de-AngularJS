var app = angular.module('App', []);

// //////////////////////////////////////////
// angular.module('controllerAsExample', [])
// //////////////////////////////////////////

app.controller('nombreControlador', NombreControlador);

function NombreControlador() {

  this.name = 'John Smith';
  this.contacts =
    [{
      type: 'phone',
      value: '408 555 1212'
    }, {
      type: 'email',
      value: 'john.smith@example.org'
    }];
}

NombreControlador.prototype.greet =
  function() {

    console.log(this.name);

  };

NombreControlador.prototype.addContact =
  function() {
    this.contacts.push({
      type: 'email',
      value: 'yourname@example.org'
    });
  };

NombreControlador.prototype.removeContact =
  function(contactToRemove) {
    var index =
      this.contacts.indexOf(contactToRemove);

    this.contacts.splice(index, 1);
  };

NombreControlador.prototype.clearContact =
  function(contact) {
    contact.type = 'phone';
    contact.value = '';
  };

// ////////////////////////////////////////////////////////////////////////
//  Usando scope
// ////////////////////////////////////////////////////////////////////////

// app.controller('controlador',
//   // ////////////////////////////////////////////
//   function($scope) {

//     $scope.name = 'John Smith';

//     $scope.contacts =
//       [{
//         type: 'phone',
//         value: '408 555 1212'
//       }, {
//         type: 'email',
//         value: 'john.smith@example.org'
//       }];

//     $scope.greet = function() {

//       console.log($scope.name);

//     };

//     $scope.addContact = function() {

//       $scope.contacts.push({
//         type: 'email',
//         value: 'yourname@example.org'
//       });

//     };

//     $scope.removeContact = function(contactToRemove) {
//       var index =
//         $scope.contacts.indexOf(contactToRemove);
//       $scope.contacts.splice(index, 1);
//     };

//     $scope.clearContact = function(contact) {
//       contact.type = 'phone';
//       contact.value = '';
//     };

//   }

//   // ////////////////////////////////////////////
// );