var app = angular.module('myApp', []);

app.controller('customersCtrl', function($scope, $http) {
  $http.get("index2.php").then(function(response) {
    // console.log(JSON.parse(response.data));
    $scope.myData = response.data.records;
    // console.log(response.data.records);
  });
});